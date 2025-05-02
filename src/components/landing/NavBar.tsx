"use client";

import * as React from "react";
import Link from "next/link";

import { Button } from "../ui/button";

function buildDownloadLink() {
  const backendUrl = process.env.NEXT_PUBLIC_BASE_API_URL ?? "";
  return `${backendUrl}/download-app`;
}

export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow bg-white">
      <div className="container flex items-center justify-between p-2">
        <Link href="/" className="text-2xl font-bold">
          <img src="/assets/logo.png" alt="logo" className="w-auto h-full" />
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/auth/login">
            <Button className="cursor-pointer" variant="outline">
              Join as Doctor
            </Button>
          </Link>
          <Link href={buildDownloadLink()}>
            <Button className="cursor-pointer">Download App</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
