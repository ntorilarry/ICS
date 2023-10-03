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
              <div className="lg:flex">
                <h1 className="text-2xl lg:text-3xl font-semibold">
                  Our values reflect who we are and what we stand for as a
                  company:
                </h1>
              </div>
            </div>
            <div className="py-4 space-y-2">
              <div className="lg:flex">
                <img src={Customer} alt="" />
                <div className="lg:px-2">
                  <h1 className="text-xl font-semibold">Customer Commitment</h1>
                  <p>
                    We develop relationship that make positive difference in our
                    customers’ lives.
                  </p>
                </div>
              </div>
            </div>
            <div className="py-4 space-y-2">
              <div className="lg:flex">
                <img src={Teamwork} alt="" />
                <div className="lg:px-2">
                  <h1 className="text-xl font-semibold">Teamwork</h1>
                  <p>
                    We provide outstanding product and unsurpassed service that,
                    together, deliver premium value to our customers.
                  </p>
                </div>
              </div>
            </div>
            <div className="py-4 space-y-2">
              <div className="lg:flex">
                <img src={Integrity} alt="" />
                <div className="lg:px-2">
                  <h1 className="text-xl font-semibold">Integrity</h1>
                  <p>
                    We work together, cross boundaries, to meet the needs of our
                    customers and to help the company win.
                  </p>
                </div>
              </div>
            </div>
            <div className="py-4 space-y-2">
              <div className="lg:flex">
                <img src={PA} alt="" />
                <div className="lg:px-2">
                  <h1 className="text-xl font-semibold">
                    Personal Accountability
                  </h1>
                  <p>
                    We are personally accountable for delivering on our
                    commitments.
                  </p>
                </div>
              </div>
            </div>
            <div className="py-4 space-y-2">
              <div className="lg:flex">
                <img src={Win} alt="" />
                <div className="lg:px-2">
                  <h1 className="text-xl font-semibold">A Will to Win</h1>
                  <p>
                    We exhibit a strong will to win in the marketplace and in
                    every aspect of our business
                  </p>
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
