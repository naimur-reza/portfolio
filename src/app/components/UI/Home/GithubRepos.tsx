"use client";

import { GITHUB_QUERY } from "@/api/githubApi";
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
    <div className="container z-50 relative mx-auto  rounded-4xl shadow-lg  overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-white/90 mb-2">
          GitHub Statistics
        </h2>
        <p className="text-gray-400 mb-6">An overview of my GitHub activity</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <h3 className="text-lg font-semibold mb-2 text-white">
              Top Languages
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={languageData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {languageData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={getRandomColor(entry.name)}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: "#1f2937", border: "none" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="w-full flex -z-10 justify-end flex-col  h-full col-span-2 lg:col-span-3 absolute bottom-0  ">
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
  <div className="w-full max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden p-6">
    <div className="h-8 w-3/4 bg-gray-700 rounded-sm mb-2"></div>
    <div className="h-4 w-1/2 bg-gray-700 rounded-sm mb-6"></div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-24 w-full bg-gray-700 rounded-sm"></div>
          ))}
        </div>
      </div>
      <div className="h-[300px] w-full bg-gray-700 rounded-sm"></div>
    </div>
  </div>
);

export default GitHubData;
