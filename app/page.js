import LaunchCards from "@/components/Cards/LaunchCards";

export default function Home() {
  return (
    <main className="">
      <section className="relative text-[#9C9C9C] font-audioWide uppercase flex flex-col gap-4 justify-center items-center py-48">
        <h3 className=" text-2xl">Welcome Jaspreet Singh</h3>
        <h1 className="text-white text-7xl tracking-wider">
          SpaceX
          <span className="text-[#00C2FF] ml-2 ">Spectacle</span>
        </h1>
        <p className="font-gafata">
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
        <div className="filters">More filters</div>

        <LaunchCards />
      </section>
    </main>
  );
}
