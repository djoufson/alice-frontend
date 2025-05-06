import React from "react";
import SearchBar from "./SearchBar";
import Profile from "./Profile";
import { AppRoutes } from "@/utils/AppRoutes";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="bg-white fixed h-[70px] top-0 left-0 w-full flex justify-between items-center gap-4 p-4">
      <div>
        <Link href={AppRoutes.admin.dashboard}>
          <img src="/assets/logo.png" alt="Alice Care" />
        </Link>
      </div>
      <SearchBar />
      <Profile />
    </div>
  );
}
