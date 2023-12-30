"use client";
import {
  closeLaunchModal,
  selectLaunchModalOpen,
  selectSelectedLaunch,
} from "@/lib/slices/launchModalSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function LaunchModal() {
  const isModalOpen = useSelector(selectLaunchModalOpen);
  const selectedLaunch = useSelector(selectSelectedLaunch);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeLaunchModal());
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div class="flex justify-center items-end text-center min-h-screen sm:block">
            <div class="bg-gray-500 transition-opacity bg-opacity-75"></div>
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen">
              ​
            </span>
            <div class="inline-block text-left bg-gray-900 rounded-lg overflow-hidden align-bottom transition-all transform shadow-2xl sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
              <div class="items-center w-full mr-auto ml-auto relative max-w-7xl md:px-12 lg:px-24">
                <div class="grid grid-cols-1">
                  <div class="mt-4 mr-auto mb-4 ml-auto bg-gray-900 max-w-lg">
                    <div class="flex flex-col items-center pt-6 pr-6 pb-6 pl-6">
                      <img
                        src="/public/images/spaceshipImage.jpeg"
                        class="flex-shrink-0 object-cover object-center btn- flex w-16 h-16 mr-auto -mb-8 ml-auto rounded-full shadow-xl"
                      />
                      <p class="mt-8 text-2xl font-semibold leading-none text-white tracking-tighter lg:text-3xl">
                        {selectedLaunch?.mission_name}
                      </p>
                      <p class="mt-3 text-base leading-relaxed text-center text-gray-200">
                        {selectedLaunch?.flight_number}
                      </p>
                      <div class="w-full mt-6">
                        <button
                          onClick={closeModal}
                          class="flex text-center items-center justify-center w-full pt-4 pr-10 pb-4 pl-10 text-base
                    font-medium text-white bg-cyan-400 rounded-xl transition duration-500 ease-in-out transform
                    hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LaunchModal;
