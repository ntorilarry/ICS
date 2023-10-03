import React from "react";
import Navbar from "./Navbar";
import { Player } from "@lottiefiles/react-lottie-player";

function Hero() {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#B5FFFF] via-[#b5ffff6a] to-[#FFEED4]">
        <Navbar />
        <section className=" flex items-center py-[3rem] lg:py-[4rem]">
          <div className=" px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="lg:py-6 grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
              <div>
                <div className="text-center lg:text-left">
                  <span className="inline-flex items-center rounded-full bg-[#193151] font-medium bg-opacity-60 px-3 py-1 text-sm text-white shadow-sm">
                    THE BEST SOLUTIONS
                  </span>
                  <h1 className="text-5xl mt-4 font-semibold text-[#193151] lg:text-7xl uppercase">
                    Visualize Your Ideas
                  </h1>
                  <p className="mt-4 text-base font-medium text-[#193151]">
                    We may not always follow the trend, but we are guaranteed to
                    provide the best in digital services
                  </p>
                  <div className="flex items-center justify-center mt-4 space-x-5 lg:justify-start">
                    <button
                      type="button"
                      className=" cursor-pointer items-center justify-center rounded-full border-2 border-[#193151] bg-transparent px-4 py-2.5 text-base font-medium text-[#193151]  shadow-sm hover:text-heading focus:text-heading focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:text-text"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-auto">
                {/* <img
                className="w-full lg:w-[85%] m-auto"
                src="https://placehold.co/600x600"
                alt=""
              /> */}
                <Player
                  src="https://lottie.host/9d7c3956-785f-439a-9e6a-46581c9e2e33/Pdz2LoDov9.json"
                  className="player"
                  loop
                  autoplay
                  // style={{ height: '250px', width: '250px' }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-[#193151] rounded-t-lg max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:-mt-10  mx-auto">
        <section className="">
          <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-0 sm:gap-x-8 md:grid-cols-3">
              <div>
                <h3 className="font-semibold text-5xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                    {" "}
                    6+{" "}
                  </span>
                </h3>
                <p className="text-xl font-medium text-white">
                  Years in business
                </p>
                <p className="text-base mt-0.5 text-white">
                  Creating the successful path
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-5xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                    {" "}
                    4821{" "}
                  </span>
                </h3>
                <p className="text-xl font-medium text-white">
                  Projects delivered
                </p>
                <p className="text-base mt-0.5 text-white">
                  In last 6 years
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-5xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                    {" "}
                    37+{" "}
                  </span>
                </h3>
                <p className="text-xl font-medium text-white">
                  Team members
                </p>
                <p className="text-base mt-0.5 text-white">
                  Working for your success
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;
