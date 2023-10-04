import { Player } from "@lottiefiles/react-lottie-player";
import React, { useRef } from "react";
import Hosting from "../assets/animation_hosting.json";
import WebDesign from "../assets/animation_webdesign.json";
import Software from "../assets/animation_softwareDevelopment.json";
import Networking from "../assets/networking.json";
import Hardware from "../assets/hardware.json";
import CCTV from "../assets/cctv.json";
import Telecom from "../assets/telecommunication.json";
import Design from "../assets/design.json";
import App from "../assets/app.json";
import Telecommunication from "../assets/telecommunication.json";
import ecommerce from "../assets/ecommerce.json";
import Fiber from "../assets/fiber.json";

function Services() {
  return (
    <div className="bg-[#F7F8FD]" id="services" >
      <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <h1 className="text-center font-medium pb-8 text-3xl lg:text-4xl">Managing your business with our best service</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-2">
          <a
            className="group flex flex-col justify-center bg-white hover:bg-[#193151] rounded-2xl p-4 md:p-7 shadow-sm"
            href="#"
          >
            <div className="flex justify-center items-center w-20 h-20  rounded-md bg-opacity-20">
              <Player
                src={WebDesign}
                className="player"
                loop
                autoplay
                // style={{ height: '250px', width: '250px' }}
              />
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-medium text-gray-800 group-hover:text-white">
                Website Design
              </h3>
            </div>
          </a>

          <a
            className="group flex flex-col justify-center bg-white hover:bg-[#193151] rounded-2xl p-4 md:p-7 shadow-sm"
            href="#"
          >
            <div className="flex justify-center items-center w-20 h-20  rounded-md bg-opacity-20">
              <Player
                src={Hosting}
                className="player"
                loop
                autoplay
                // style={{ height: '250px', width: '250px' }}
              />
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-medium text-gray-800 group-hover:text-white">
                Hosting
              </h3>
            </div>
          </a>

          <a
            className="group flex flex-col justify-center bg-white hover:bg-[#193151] rounded-2xl p-4 md:p-7 shadow-sm"
            href="#"
          >
            <div className="flex justify-center items-center w-20 h-20  rounded-md bg-opacity-20">
              <Player
                src={Software}
                className="player"
                loop
                autoplay
                // style={{ height: '250px', width: '250px' }}
              />
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-medium text-gray-800 group-hover:text-white">
                Software Development
              </h3>
            </div>
          </a>

          <a
            className="group flex flex-col justify-center bg-white hover:bg-[#193151] rounded-2xl p-4 md:p-7 shadow-sm"
            href="#"
          >
            <div className="flex justify-center items-center w-20 h-20  rounded-md bg-opacity-20">
              <Player
                src={Networking}
                className="player"
                loop
                autoplay
                // style={{ height: '250px', width: '250px' }}
              />
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-medium text-gray-800 group-hover:text-white">
                Networking
              </h3>
            </div>
          </a>

          <a
            className="group flex flex-col justify-center bg-white hover:bg-[#193151] rounded-2xl p-4 md:p-7 shadow-sm"
            href="#"
          >
            <div className="flex justify-center items-center w-20 h-20  rounded-md bg-opacity-20">
              <Player
                src={Hardware}
                className="player"
                loop
                autoplay
                // style={{ height: '250px', width: '250px' }}
              />
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-medium text-gray-800 group-hover:text-white">
                Hardware
              </h3>
            </div>
          </a>

          <a
            className="group flex flex-col justify-center bg-white hover:bg-[#193151] rounded-2xl p-4 md:p-7 shadow-sm"
            href="#"
          >
            <div className="flex justify-center items-center w-20 h-20  rounded-md bg-opacity-20">
              <Player
                src={CCTV}
                className="player"
                loop
                autoplay
                // style={{ height: '250px', width: '250px' }}
              />
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-medium text-gray-800 group-hover:text-white">
                CCTV Services
              </h3>
            </div>
          </a>

          <a
            className="group flex flex-col justify-center bg-white hover:bg-[#193151] rounded-2xl p-4 md:p-7 shadow-sm"
            href="#"
          >
            <div className="flex justify-center items-center w-20 h-20  rounded-md bg-opacity-20">
              <Player
                src={Telecom}
                className="player"
                loop
                autoplay
                // style={{ height: '250px', width: '250px' }}
              />
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-medium text-gray-800 group-hover:text-white">
                Telecom Services
              </h3>
            </div>
          </a>

          <a
            className="group flex flex-col justify-center bg-white hover:bg-[#193151] rounded-2xl p-4 md:p-7 shadow-sm"
            href="#"
          >
            <div className="flex justify-center items-center w-20 h-20  rounded-md bg-opacity-20">
              <Player
                src={Design}
                className="player"
                loop
                autoplay
                // style={{ height: '250px', width: '250px' }}
              />
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-medium text-gray-800 group-hover:text-white">
                Graphic Design
              </h3>
            </div>
          </a>
          <a
            className="group flex flex-col justify-center bg-white hover:bg-[#193151] rounded-2xl p-4 md:p-7 shadow-sm"
            href="#"
          >
            <div className="flex justify-center items-center w-20 h-20  rounded-md bg-opacity-20">
              <Player
                src={App}
                className="player"
                loop
                autoplay
                // style={{ height: '250px', width: '250px' }}
              />
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-medium text-gray-800 group-hover:text-white">
                Mobile Apps
              </h3>
            </div>
          </a>
          <a
            className="group flex flex-col justify-center bg-white hover:bg-[#193151] rounded-2xl p-4 md:p-7 shadow-sm"
            href="#"
          >
            <div className="flex justify-center items-center w-20 h-20  rounded-md bg-opacity-20">
              <Player
                src={Telecommunication}
                className="player"
                loop
                autoplay
                // style={{ height: '250px', width: '250px' }}
              />
            </div>
            <div className="mt-5">
              <h3 className="text-lg break-all font-medium text-gray-800 group-hover:text-white">
                Telecommunication
              </h3>
            </div>
          </a>
          <a
            className="group flex flex-col justify-center bg-white hover:bg-[#193151] rounded-2xl p-4 md:p-7 shadow-sm"
            href="#"
          >
            <div className="flex justify-center items-center w-20 h-20  rounded-md bg-opacity-20">
              <Player
                src={ecommerce}
                className="player"
                loop
                autoplay
                // style={{ height: '250px', width: '250px' }}
              />
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-medium text-gray-800 group-hover:text-white">
                E-Commerce
              </h3>
            </div>
          </a>
          <a
            className="group flex flex-col justify-center bg-white hover:bg-[#193151] rounded-2xl p-4 md:p-7 shadow-sm"
            href="#"
          >
            <div className="flex justify-center items-center w-20 h-20  rounded-md bg-opacity-20">
              <Player
                src={Fiber}
                className="player"
                loop
                autoplay
                // style={{ height: '250px', width: '250px' }}
              />
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-medium text-gray-800 group-hover:text-white">
                Fiber Optics
              </h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Services;
