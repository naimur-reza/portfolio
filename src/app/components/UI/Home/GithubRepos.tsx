"use client";

import { GITHUB_QUERY } from "@/api/githubApi";
import { styles } from "@/app/styles/styles";
import { getRandomColor } from "@/utils/getRandomColor";
import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";
import { motion } from "framer-motion";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
  },
  cache: new InMemoryCache(),
});

const GitHubData = () => {
  const { loading, error, data } = useQuery(GITHUB_QUERY, { client });

  if (loading) return <LoadingSkeleton />;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  const { user } = data;
  const totalFollowers = user.followers.totalCount;
  const totalRepos = user.repositories.totalCount;
  const totalFollowing = user.following.totalCount;
  const repositories = user.repositories.nodes;

  interface Repository {
    primaryLanguage: {
      name: string;
    } | null;
  }

  interface LanguageCounts {
    [key: string]: number;
  }

  const languageCounts: LanguageCounts = repositories.reduce(
    (acc: LanguageCounts, repo: Repository) => {
      const lang = repo.primaryLanguage?.name;
      if (lang) {
        acc[lang] = (acc[lang] || 0) + 1;
      }
      return acc;
    },
    {}
  );

  const languageData: { name: string; value: number }[] = Object.entries(
    languageCounts
  )
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  const totalStars = repositories.reduce(
    (acc: number, { stargazers }: { stargazers: { totalCount: number } }) =>
      acc + stargazers.totalCount,
    0
  );

  return (
    <div className="container z-40 relative mx-auto  rounded-4xl shadow-lg  overflow-hidden">
      <div className="pt-10">
        <p className={styles.sectionSubText}>MY ACTIVITY</p>
        <h2 className={styles.sectionHeadText}>GitHub.</h2>
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <StatsGrid
              stats={[
                { label: "Repositories", value: totalRepos },
                { label: "Stars", value: totalStars },
                { label: "Followers", value: totalFollowers },
                { label: "Following", value: totalFollowing },
              ]}
            />
          </div>
          <div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  className="select-none border-none"
                  data={languageData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {languageData.map((entry, index) => (
                    <Cell
                      style={{
                        stroke: getRandomColor(entry.name),
                        strokeWidth: 0.7,
                      }}
                      key={`cell-${index}`}
                      fill={getRandomColor(entry.name)}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="w-full hidden md:flex -z-10 justify-end flex-col  h-full col-span-2 lg:col-span-3 absolute -bottom-10  ">
        <video
          loop
          autoPlay
          muted
          playsInline
          preload="false"
          src="/cards-video.webm"
        />
      </div>
      <div className="absolute inset-0 bg-black/20 -z-10 "></div>
    </div>
  );
};

interface Stat {
  label: string;
  value: number;
}

const StatsGrid = ({ stats }: { stats: Stat[] }) => (
  <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
    {stats.map((stat, index) => (
      <StatsCard key={index} {...stat} />
    ))}
  </div>
);

const StatsCard = ({ value, label }: { value: number; label: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex flex-col items-center justify-center p-4 rounded-2xl bg-gray-700/30 text-white"
  >
    <p className="text-2xl font-bold">{value.toLocaleString()}</p>
    <h3 className="text-sm text-gray-300">{label}</h3>
  </motion.div>
);

const LoadingSkeleton = () => (
  <div className="p-6">
    <div className="h-8 w-1/4 bg-gray-700/70 rounded-sm mb-2"></div>
    <div className="h-4 w-1/3 bg-gray-700/70 rounded-sm mb-6"></div>
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-6">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4 mt-5">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-20 w-full bg-gray-700/70 rounded-sm"
            ></div>
          ))}
        </div>
      </div>
      <div className="h-50 w-50  bg-gray-700/70 rounded-full"></div>
    </div>
  </div>
);

export default GitHubData;
