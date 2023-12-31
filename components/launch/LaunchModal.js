"use client";
import { NavCloseIcon } from "@/assets";
import {
  closeLaunchModal,
  selectLaunchModalOpen,
  selectSelectedLaunchId,
} from "@/lib/slices/launchModalSlice";
import formatDate from "@/utils/date-formatters";
import Image from "next/image";
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

function LaunchModal() {
  const isModalOpen = useSelector(selectLaunchModalOpen);
  const selectedLaunchId = useSelector(selectSelectedLaunchId);
  const allLaunches = useSelector((state) => state.launches.data);

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeLaunchModal());
  };

  const selectLaunch = useMemo(() => {
    let launch = allLaunches?.filter(
      (launch) => launch.flight_number === selectedLaunchId
    )[0];

    return launch;
  }, [allLaunches, selectedLaunchId]);

  console.log(selectLaunch);

  const formatedDate = formatDate(selectLaunch?.launch_date_local);

  // if (selectLaunch) return null;

  return (
    <>
      {isModalOpen && (
        <div className="fixed transition-all z-50 top-0 left-0 w-full h-full flex items-center px-4 justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="flex items-stretch bg-[#101010]/90 max-w-3xl w-full rounded-lg overflow-hidden transition-all shadow-2xl backdrop-blur-xl">
            <div className="card__image relative w-full ">
              <Image
                fill
                src={"/images/spaceshipImage.jpeg"}
                className="absolute h-full w-full object-cover "
              />
            </div>
            <div className="card__body relative py-12 px-12 text-[#929292] ">
              <div
                className="absolute right-2 top-2 hover:opacity-80 cursor-pointer"
                onClick={closeModal}
              >
                <NavCloseIcon />
              </div>

              <span className="card__date ">{formatedDate}</span>
              <h4 className="card__header text-2xl text-white font-gafata">
                Mission: {selectLaunch?.mission_name}
              </h4>
              <div className="card__details flex flex-col gap-2 mt-4">
                <p className="details__key">
                  Rocket Name:
                  <span className="details__value text-white ml-4">
                    {selectLaunch.rocket.rocket_name}
                  </span>
                </p>
                <p className="details__key">
                  Rocket Type:
                  <span className="details__value text-white ml-4">
                    {selectLaunch.rocket.rocket_type}
                  </span>
                </p>
                <p className="details__key">
                  Details:
                  <br />
                  <span className="details__value text-white line-clamp-3 ">
                    {selectLaunch.details}
                  </span>
                </p>
              </div>
              <p className="text-red-500 mt-4">
                This description is dummy to improve the UI.
              </p>
              <p className="card__dummytexty mt-1 text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
                dolor omnis placeat et mollitia labore velit, quos neque
                doloremque nulla iusto minus ea nihil dolore consectetur
                deserunt! Saepe, minus pariatur?
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LaunchModal;
