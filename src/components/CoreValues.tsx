import React from "react";
import Customer from "../assets/customer commitment.svg";
import Integrity from "../assets/integrity.svg";
import PA from "../assets/personal assistant.svg";
import Teamwork from "../assets/teamwork.svg";
import Win from "../assets/win.svg";

function CoreValues() {
  return (
    <div>
      <div className="bg-white text-gray-800">
        <div className="max-w-7xl py-10 lg:py-16 container grid grid-cols-12 mx-auto">
          <div
            className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat lg:col-span-6 lg:h-auto"
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/random/640x480')",
              backgroundPosition: "center center",
              backgroundBlendMode: "multiply",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-200">
            <div className="py-4 space-y-2">
              <div className="flex items-center">
                <h1 className="text-2xl lg:text-3xl font-semibold">
                  Core Values
                </h1>
              </div>
            </div>
            <div className="py-4 space-y-2">
              <div className="flex items-center">
                <img src={Customer} alt="" />
                <div className="py-2 px-2">
                  <h1 className="text-xl font-semibold">Timeliness</h1>
                </div>
              </div>
            </div>
            <div className="py-4 space-y-2">
              <div className="flex items-center">
                <img src={Teamwork} alt="" />
                <div className="py-2 px-2">
                  <h1 className="text-xl font-semibold">
                    Competence with creativity
                  </h1>
                </div>
              </div>
            </div>
            <div className="py-4 space-y-2">
              <div className="flex items-center">
                <img src={Integrity} alt="" />
                <div className="py-2 px-2">
                  <h1 className="text-xl font-semibold">Client Satisfaction</h1>
                </div>
              </div>
            </div>
            <div className="py-4 space-y-2">
              <div className="flex items-center">
                <img src={PA} alt="" />
                <div className="py-2 px-2">
                  <h1 className="text-xl font-semibold">Excellence</h1>
                </div>
              </div>
            </div>
            <div className="py-4 space-y-2">
              <div className="flex items-center">
                <img src={Win} alt="" />
                <div className="py-2 px-2">
                  <h1 className="text-xl font-semibold">Accuracy</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoreValues;
