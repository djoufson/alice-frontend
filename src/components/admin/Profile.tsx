"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useRequireAuth } from "@/hooks/useRequireAuth";

export default function Profile() {
  const user = useRequireAuth();
  const signOut = () => {
    console.log("signing out");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="p-6">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage
                className="rounded-full aspect-square w-6"
                src={user?.doctor?.imageUrl ?? ""}
              />
              <AvatarFallback>
                {user?.doctor?.firstName?.charAt(0)}
                {user?.doctor?.lastName?.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start">
              <p className="text-sm font-bold">
                Dr. {user?.doctor?.firstName} {user?.doctor?.lastName}
              </p>
              <p className="text-xs text-gray-500">
                {user?.doctor?.specialization}
              </p>
            </div>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link
              href="/admin/profile"
              className="flex items-center justify-between w-full"
            >
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/admin/settings"
              className="flex items-center justify-between w-full"
            >
              Settings
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link
            href="https://github.com/djoufson"
            target="__blank"
            className="flex items-center justify-between w-full"
          >
            GitHub
            <ExternalLink />
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href="https://buymeacoffee.com/djoufson"
            target="__blank"
            className="flex items-center justify-between w-full"
          >
            Support
            <ExternalLink />
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()} className="text-red-500">
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
