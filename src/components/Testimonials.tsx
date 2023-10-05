import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import William from "../assets/William-Agyi-Manu.jpg";
import Evans from "../assets/Mr-Evans-Larbi-Beit-Farms.jpg";
import Amoateng from "../assets/Mr.-Amoateng-liberty-medical-laboratory.jpg";


function Testimonials() {
  return (
    <div>
      <div className="bg-[#F5F5F5]">
        <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
            <h1 className="max-w-lg text-3xl font-semibold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              Testimonials
            </h1>
            <p className="text-sm font-medium text-gray-700 py-2">
              What people are saying about working with us.
            </p>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            slidesPerView={3}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                spaceBetween: 10,
                slidesPerView: 1,
              },
              375: {
                spaceBetween: 10,
                slidesPerView: 1,
              },
              575: {
                spaceBetween: 10,
                slidesPerView: 1,
              },
              767: {
                spaceBetween: 10,
                slidesPerView: 2,
              },
              1024: {
                spaceBetween: 10,
                slidesPerView: 3,
              },
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
                <SwiperSlide>
                  <div className="flex h-auto">
                    <div className="flex flex-col bg-white rounded-xl">
                      <div className="flex-auto p-4 md:p-6">
                        <p className="text-base italic md:text-lg text-gray-800">
                          "I went live with the new theme and my site went from
                          "some old ", same old to "WOW!" Now I get a lot of
                          customers calling for prices list and orders! Its
                          makes me smile every-time i click over to it! and
                          Because it designed to be flexible."
                        </p>
                      </div>

                      <div className="p-4 bg-gray-100 rounded-b-xl md:px-7">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <img
                              className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                              src={William}
                              alt=""
                            />
                          </div>

                          <div className="grow ml-3">
                            <p className="text-sm sm:text-base font-semibold text-gray-800">
                              William Agyi-Manu
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Ghana Cassava centre, Accra, GH
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex h-auto">
                    <div className="flex flex-col bg-white rounded-xl">
                      <div className="flex-auto p-4 md:p-6">
                        <p className="text-base italic md:text-lg text-gray-800">
                          "I can't believe how far i have come in the last 6
                          months. Thanks to each and everyone all that put into
                          creating this awesome website and jumping into doing
                          the work that i absolutely love to execute to the
                          world. If i can help in any way in the future count on
                          me."
                        </p>
                      </div>

                      <div className="p-4 bg-gray-100 rounded-b-xl md:px-7">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <img
                              className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                              src={Evans}
                              alt=""
                            />
                          </div>

                          <div className="grow ml-3">
                            <p className="text-sm sm:text-base font-semibold text-gray-800">
                              Mr Evans Larbi
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Beit Farms, Accra, GH
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex h-auto">
                    <div className="flex flex-col bg-white rounded-xl">
                      <div className="flex-auto p-4 md:p-6">
                        <p className="text-base italic md:text-lg text-gray-800">
                          "Our inbound leads have grown so dramatically from our
                          website and search optimization that we have hired a
                          dedicated team that now works on the leads, which was
                          never the case before hosting and running our website"
                        </p>
                      </div>

                      <div className="p-4 bg-gray-100 rounded-b-xl md:px-7">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <img
                              className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                              src={Amoateng}
                              alt=""
                            />
                          </div>

                          <div className="grow ml-3">
                            <p className="text-sm sm:text-base font-semibold text-gray-800">
                              Mr. Amoateng
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Liberty Medical Laboratory, Accra, GH
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex h-auto">
                    <div className="flex flex-col bg-white rounded-xl">
                      <div className="flex-auto p-4 md:p-6">
                        <p className="text-base italic md:text-lg text-gray-800">
                          "I went live with the new theme and my site went from
                          "some old ", same old to "WOW!" Now I get a lot of
                          customers calling for prices list and orders! Its
                          makes me smile every-time i click over to it! and
                          Because it designed to be flexible."
                        </p>
                      </div>

                      <div className="p-4 bg-gray-100 rounded-b-xl md:px-7">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <img
                              className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                              src={William}
                              alt=""
                            />
                          </div>

                          <div className="grow ml-3">
                            <p className="text-sm sm:text-base font-semibold text-gray-800">
                              William Agyi-Manu
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Ghana Cassava centre, Accra, GH
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex h-auto">
                    <div className="flex flex-col bg-white rounded-xl">
                      <div className="flex-auto p-4 md:p-6">
                        <p className="text-base italic md:text-lg text-gray-800">
                          "I can't believe how far i have come in the last 6
                          months. Thanks to each and everyone all that put into
                          creating this awesome website and jumping into doing
                          the work that i absolutely love to execute to the
                          world. If i can help in any way in the future count on
                          me."
                        </p>
                      </div>

                      <div className="p-4 bg-gray-100 rounded-b-xl md:px-7">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <img
                              className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                              src={Evans}
                              alt=""
                            />
                          </div>

                          <div className="grow ml-3">
                            <p className="text-sm sm:text-base font-semibold text-gray-800">
                              Mr Evans Larbi
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Beit Farms, Accra, GH
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex h-auto">
                    <div className="flex flex-col bg-white rounded-xl">
                      <div className="flex-auto p-4 md:p-6">
                        <p className="text-base italic md:text-lg text-gray-800">
                          "Our inbound leads have grown so dramatically from our
                          website and search optimization that we have hired a
                          dedicated team that now works on the leads, which was
                          never the case before hosting and running our website"
                        </p>
                      </div>

                      <div className="p-4 bg-gray-100 rounded-b-xl md:px-7">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <img
                              className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                              src={Amoateng}
                              alt=""
                            />
                          </div>

                          <div className="grow ml-3">
                            <p className="text-sm sm:text-base font-semibold text-gray-800">
                              Mr. Amoateng
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Liberty Medical Laboratory, Accra, GH
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
