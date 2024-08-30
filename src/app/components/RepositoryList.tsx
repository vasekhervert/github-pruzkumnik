import Link from "next/link";
import { gql } from "@apollo/client";
import { getClient } from "../lib/apollo-client";
import { SearchParamsType } from "./utils";
import { Star } from "./Star";

const SEARCH_REPOSITORIES = gql`
  query SearchRepositories($query: String!) {
    search(query: $query, type: REPOSITORY, first: 10) {
      edges {
        node {
          ... on Repository {
            name
            description
            url
            owner {
              login
              url
            }
            stargazerCount
            primaryLanguage {
              name
            }
          }
        }
      }
    }
  }
`;

interface Repository {
  node: {
    name: string;
    description: string;
    url: string;
    owner: {
      login: string;
      url: string;
    };
    stargazerCount: number;
    primaryLanguage: {
      name: string;
    };
  };
}

const RepositoryList = async ({
  searchParams,
}: {
  searchParams: SearchParamsType;
}) => {
  const { loading, error, data } = await getClient().query({
    query: SEARCH_REPOSITORIES,
    variables: { query: searchParams.q || "" },
  });

  if (!data) return null;
  if (loading) return <p>Načítání...</p>;
  if (error) return <p>Chyba: {error.message}</p>;

  const repositories: Repository[] = data?.search?.edges || [];
  const sortedRepositories = [...repositories].sort(
    (a: Repository, b: Repository) =>
      b.node.stargazerCount - a.node.stargazerCount
  );

  return (
    <>
      <ul className="space-y-4">
        {sortedRepositories.map(({ node: repo }: Repository) => (
          <li key={repo.url} className="border border-gray-500 p-4 rounded">
            <h2 className="text-xl font-bold">
              <Link href={repo.url} className="text-blue-500 hover:underline">
                {repo.name}
              </Link>
            </h2>
            <p className="text-sm">
              by{" "}
              <Link
                href={repo.owner.url}
                className="text-blue-500 hover:underline"
              >
                {repo.owner.login}
              </Link>
            </p>
            <p className="text-gray-400 py-4">{repo.description}</p>

            <div className="flex items-center gap-4">
              <span className="text-sm bg-blue-800 text-gray-300 font-bold px-1 rounded-md">
                {repo.primaryLanguage?.name || "N/A"}
              </span>
              <span className="flex items-center text-sm">
                <Star /> {repo.stargazerCount}
              </span>
            </div>
          </li>
        ))}
      </ul>
      {repositories.length === 0 && searchParams.q && (
        <p className="text-center">
          Na základě zadaného dotazu nebyl nalezen žádný repozitář
        </p>
      )}
    </>
  );
};

export default RepositoryList;
