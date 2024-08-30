"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { SearchParamsType } from "./utils";

const SearchForm = ({ searchParams }: { searchParams: SearchParamsType }) => {
  const [query, setQuery] = useState(searchParams.q ?? "");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`?q=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 flex">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Zadejte název repozitáře"
        className="w-full p-2 border text-black font-bold border-gray-300 rounded me-2"
      />
      <button
        type="submit"
        className=" px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Hledat
      </button>
    </form>
  );
};

export default SearchForm;
