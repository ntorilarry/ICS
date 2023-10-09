import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Player } from "@lottiefiles/react-lottie-player";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    setTimeout(() => {
      AOS.init();
      AOS.refresh();
    });
  }, []);
  return (
    <div>
      <div className="bg-gradient-to-r from-[#B5FFFF] via-[#b5ffff6a] to-[#FFEED4]">
        <Navbar />
        <section className=" flex items-center py-[3rem] lg:py-[4rem]">
          <div className=" px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="lg:py-6 grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
              <div>
                <div className="text-center lg:text-left">
                  <span
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="inline-flex items-center rounded-full bg-[#193151] font-medium bg-opacity-60 px-3 py-1 text-sm text-white shadow-sm"
                  >
                    THE BEST SOLUTIONS
                  </span>
                  <h1
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-once="true"
                    className="text-5xl mt-4 font-semibold text-[#193151] lg:text-7xl uppercase"
                  >
                    Visualize Your Ideas
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-once="true"
                    className="mt-4 text-base font-medium text-[#193151]"
                  >
                    We may not always follow the trend, but we are guaranteed to
                    provide the best in digital services
                  </p>
                  <div className="flex items-center justify-center mt-4 space-x-5 lg:justify-start">
                    <Link
                      data-aos="fade-up"
                      data-aos-duration="2000"
                      data-aos-once="true"
                      to="/contact-us"
                      className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-semibold rounded-full group"
                    >
                      <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-[#193151] opacity-[3%]"></span>
                      <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#193151] opacity-100 group-hover:-translate-x-8"></span>
                      <span className="relative w-full text-left text-[#193151] transition-colors duration-200 ease-in-out group-hover:text-white">
                        Contact Us
                      </span>
                      <span className="absolute inset-0 border-2 border-[#193151] rounded-full"></span>
                    </Link>
                  </div>
                </div>
              </div>
              <div  data-aos="fade-left"
                      data-aos-duration="2500"
                      data-aos-once="true" className="mt-auto">
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
            <div className="grid grid-cols-1 gap-8 text-center sm:gap-x-8 md:grid-cols-3">
              <div>
                <h3 className="font-semibold text-5xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                    <>
                      <CountUp end={6} redraw={true}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                      +
                    </>
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
                    <>
                      <CountUp end={4821} redraw={true}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    </>
                  </span>
                </h3>
                <p className="text-xl font-medium text-white">
                  Projects delivered
                </p>
                <p className="text-base mt-0.5 text-white">In last 6 years</p>
              </div>

              <div>
                <h3 className="font-semibold text-5xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                    <>
                      <CountUp end={37} redraw={true}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                      +
                    </>
                  </span>
                </h3>
                <p className="text-xl font-medium text-white">Team members</p>
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
