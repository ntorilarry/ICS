import React from "react";
import Navbar from "./Navbar";
import { Player } from "@lottiefiles/react-lottie-player";

function Hero() {
  return (
    <div className="bg-gradient-to-r from-[#B5FFFF] via-[#b5ffff6a] to-[#FFEED4]">
      <Navbar />
      <section className=" flex items-center py-[4rem] lg:pt-0">
        <div className=" px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
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
                    className=" cursor-pointer hidden lg:block items-center justify-center rounded-full border-2 border-[#193151] bg-transparent px-4 py-2.5 text-base font-semibold text-[#193151]  shadow-sm hover:text-heading focus:text-heading focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:text-text"
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
  );
}

export default Hero;
