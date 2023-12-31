"use client";

import LaunchFilters from "@/components/launch/LaunchFilters";
import LaunchList from "@/components/launch/LaunchList";
import { useSession } from "next-auth/react";

export default function Home() {
  const ses = useSession();
  const session = ses.data;

  console.log("session", session);

  return (
    <main className="">
      <section className="relative text-[#9C9C9C] font-audioWide uppercase flex flex-col gap-2 md:gap-4 justify-center items-center py-48">
        <h3 className="text-md md:text-2xl">
          Welcome {session ? session.user.name : "Guest"}
        </h3>
        <h1 className="text-white text-2xl md:text-7xl tracking-wider">
          SpaceX
          <span className="text-[#00C2FF] ml-2 ">Spectacle</span>
        </h1>
        <p className="font-gafata text-xs md:text-lg text-center ">
          Unveiling SpaceX&apos;s Cosmic Odyssey: Witness the Universe&apos;s
          Unfolding in Every Launch!
        </p>

        <div className="absolute left-32 z-10 h-48 w-48 bg-[#00FFB2] rounded-full blur-[120px]" />
        <div className="absolute right-32 z-10 h-48 w-48 bg-[#00C2FF] rounded-full blur-[120px]" />
      </section>

      <section>
        <div className="section__header">
          <span className="font-audioWide text-xl text-white">Launch Log</span>
          <div className="search__bar"></div>
        </div>

        <LaunchFilters />
        <LaunchList />
      </section>
    </main>
  );
}
