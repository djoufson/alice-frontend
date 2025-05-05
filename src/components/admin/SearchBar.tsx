import React from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex items-center gap-2 w-full max-w-[300px]">
      <label htmlFor="searchBar">
        <Search />
      </label>
      <Input id="searchBar" type="text" placeholder="Search an appointment" />
    </div>
  );
}
