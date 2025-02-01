export interface Stargazers {
  totalCount: number;
}

export interface RepositoryNode {
  stargazers: Stargazers;
}

export interface Repositories {
  totalCount: number;
  nodes: RepositoryNode[];
}

export interface User {
  followers: {
    totalCount: number;
  };
  repositories: Repositories;
}

export interface GitHubDataResponse {
  user: {
    followers: {
      totalCount: number;
    };
    following: {
      totalCount: number;
    };
    repositories: {
      totalCount: number;
      nodes: Array<{
        stargazers: {
          totalCount: number;
        };
        forks: {
          totalCount: number;
        };
        primaryLanguage: {
          name: string;
          color: string;
        } | null;
      }>;
    };
  };
}
