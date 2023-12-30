"use client";
import {
  HamburgerMenu,
  NavCloseIcon,
  NavHomeIcon,
  NavLoginIcon,
  NavLogoutIcon,
  SpacexIcon,
} from "@/assets";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();
  console.log(session);

  const handleTogge = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="flex justify-between items-center">
      <Link href="/">
        <SpacexIcon className="w-52" />
      </Link>
      <div className="launches hidden md:flex gap-4 items-center uppercase flex-1 mt-2 text-[#DDDDDD] ">
        <span className="border-0 border-b-1 hover:border-white hover:px-2 duration-200 cursor-pointer hover:underline transition-all">
          Falcon 9
        </span>
        <span className="border-0 border-b-1 hover:border-white hover:px-2 duration-200 cursor-pointer hover:underline transition-all">
          Falcon heavy
        </span>
        <span className="border-0 border-b-1 hover:border-white hover:px-2 duration-200 cursor-pointer hover:underline transition-all">
          Dragon
        </span>
        <span className="border-0 border-b-1 hover:border-white hover:px-2 duration-200 cursor-pointer hover:underline transition-all">
          Starship
        </span>
      </div>
      <div className="relative">
        <HamburgerMenu onClick={handleTogge} className="cursor-pointer" />
        <div
          className={`absolute -right-2 -top-4 z-20 
         border-[#777777] border transition-opacity opacity-0 ease-in flex flex-col gap-4 items-center justify-center bg-[#101010]/60 text-white
         rounded-xl
          ${isMenuOpen ? "opacity-100 h-60 w-52 " : ""}
         `}
        >
          <NavCloseIcon
            className="absolute right-[1px] top-1 cursor-pointer"
            onClick={handleTogge}
          />
          <div className="nav__item flex items-center justify-center gap-4 w-full">
            <NavHomeIcon />
            <span className="text-xl">Home</span>
          </div>

          {!session ? (
            <Link
              onClick={() => setIsMenuOpen(false)}
              href={"/login"}
              className="nav__item bg-cyan-400 rounded-xl w-fit px-6 py-2 flex items-center justify-center gap-4 "
            >
              <NavLoginIcon />
              <span className="text-xl">Login</span>
            </Link>
          ) : (
            <button
              onClick={() => signOut()}
              className="nav__item bg-cyan-400 rounded-xl w-fit px-6 py-2 flex items-center justify-center gap-4 "
            >
              <NavLogoutIcon />
              <span className="text-xl">Logout</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
