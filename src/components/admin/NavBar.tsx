import React from "react";
import SearchBar from "./SearchBar";
import Profile from "./Profile";

export default function NavBar() {
  return (
    <div className="bg-white fixed h-[70px] top-0 left-0 w-full flex justify-between items-center gap-4 p-4">
      <div>
        <img src="/assets/logo.png" alt="Alice Care" />
      </div>
      <SearchBar />
      {/* <Profile /> */}
    </div>
  );
}
