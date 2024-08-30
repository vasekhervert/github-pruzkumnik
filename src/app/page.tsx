import SearchForm from "./components/SearchForm";
import RepositoryList from "./components/RepositoryList";
import { parseSearchParams } from "./components/utils";

export default function Home({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const sp = parseSearchParams(searchParams ?? {});
  return (
    <main className="container mx-auto max-w-2xl px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-300 mb-8 text-center">
        GitHub Průzkumník
      </h1>
      <SearchForm searchParams={sp} />
      <RepositoryList searchParams={sp} />
    </main>
  );
}
