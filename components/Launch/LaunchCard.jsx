import formatDate from "@/utils/date-formatters";
import Image from "next/image";
import React from "react";

const LaunchCard = ({ project }) => {
  const { mission_name, details, launch_date_local, upcoming } = project;
  const date = formatDate(launch_date_local);
  return (
    <div className="card flex py-12 relative bg-[#151515] p-4 border-2 border-fuchsia-500 rounded-xl w-full max-w-4xl mx-auto">
      <div className="hidden md:block card__image -translate-x-24 bg-slate-50 h-52 w-full max-w-[15rem]    relative rounded overflow-hidden">
        <Image
          src="/images/spaceshipImage.jpeg"
          className="absolute h-full w-full"
          alt="Space Ship"
          fill
        />
      </div>
      <div className="card__body md:-translate-x-12 font-gafata text-[#929292]">
        <span className="card__date">
          {date}
          <span className="ml-4 text-cyan-600">
            ({`${upcoming ? "Upcoming" : "Past"}`})
          </span>
        </span>
        <p className="card__title text-white font-audioWide text-3xl mt-2">
          MISSION: {mission_name}
        </p>
        <p className="card__description text-lg my-2">
          {details
            ? details
            : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non amet, veritatis reprehenderit at eligendi quasi eum quaerat eveniet eos magni atque modi? Incidunt cupiditate veniam illum soluta beatae, omnis quos!"}
        </p>
        <button className="rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-xl shadow-cyan-400/40 hover:shadow-cyan-400/60 text-white py-2 px-4">
          Read more!
        </button>
      </div>
    </div>
  );
};

export default LaunchCard;
