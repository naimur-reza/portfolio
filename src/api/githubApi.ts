import { gql } from "@apollo/client";

export const GITHUB_QUERY = gql`
  {
    user(login: "naimur-reza") {
      followers {
        totalCount
      }
      following {
        totalCount
      }
      repositories(first: 100, privacy: PUBLIC, isFork: false) {
        totalCount
        nodes {
          stargazers {
            totalCount
          }
          forks {
            totalCount
          }
          primaryLanguage {
            name
            color
          }
        }
      }
    }
  }
`;
