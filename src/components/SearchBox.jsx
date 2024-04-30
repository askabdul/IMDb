"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  return (
    <form
      className="flex justify-between max-w-6xl px-5 mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search keywords"
        type="text"
        className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1"
      />
      <button className="text-amber-600" disabled={search === ""}>
        Search
      </button>
    </form>
  );
}
