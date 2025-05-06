import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import { DropdownMenuShortcut } from "../ui/dropdown-menu";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Profile() {
  function signOut() {
    console.log("signing out");
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} className="p-6 flex items-center gap-2">
          <Avatar>
            <AvatarImage
              className="rounded-full w-[40px] h-[40px]"
              src="https://github.com/djoufson.png"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start">
            <p className="text-sm font-bold">Dr. Djoufson Che</p>
            <p className="text-xs text-gray-500">Generalist</p>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/admin/profile" className="w-full flex justify-between">
              Profile
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link
            target="__blank"
            href={"https://github.com/djoufson/alice-frontend"}
            className="flex w-full justify-between items-center"
          >
            Github
            <DropdownMenuShortcut>
              <ExternalLink />
            </DropdownMenuShortcut>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            target="__blank"
            href={"https://buymeacoffee.com/djoufson"}
            className="flex w-full justify-between items-center"
          >
            Support
            <DropdownMenuShortcut>
              <ExternalLink />
            </DropdownMenuShortcut>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button
            variant={"ghost"}
            className="w-full justify-start text-red-500 hover:text-red-600"
            onClick={() => {
              signOut();
            }}
          >
            Log out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
