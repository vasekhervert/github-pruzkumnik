"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { SearchParamsType } from "./utils";

const SearchForm = ({ searchParams }: { searchParams: SearchParamsType }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      query: searchParams.q ?? "",
    },
  });

  const onSubmit = (data: { query: string }) => {
    router.push(`?q=${encodeURIComponent(data.query)}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-8 flex gap-4">
      <div className="flex flex-col flex-grow relative">
        <input
          type="text"
          {...register("query", { required: true, minLength: 2 })}
          placeholder="Zadejte název repozitáře"
          className="w-full p-2 border text-black font-bold border-gray-300 rounded me-2"
        />
        {errors.query && (
          <span className="text-red-500 absolute bottom-[-30px] left-0">
            {errors.query.type === "required" && "Toto pole je povinné."}
            {errors.query.type === "minLength" && "Minimální délka je 2 znaky."}
          </span>
        )}
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 self-center"
      >
        Hledat
      </button>
    </form>
  );
};

export default SearchForm;
