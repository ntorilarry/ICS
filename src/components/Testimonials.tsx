import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
                          " With Preline, we're able to easily track our
                          performance in full detail. It's become an essential
                          tool for us to grow and engage with our audience. "
                        </p>
                      </div>

                      <div className="p-4 bg-gray-100 rounded-b-xl md:px-7">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <img
                              className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                              alt="Image Description"
                            />
                          </div>

                          <div className="grow ml-3">
                            <p className="text-sm sm:text-base font-semibold text-gray-800">
                              Josh Tyson
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Product Manager | Capsule
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
                          " In September, I will be using this theme for 2
                          years. I went through multiple updates and changes and
                          I'm very glad to see the consistency and effort made
                          by the team. "
                        </p>
                      </div>

                      <div className="p-4 bg-gray-100 rounded-b-xl md:px-7">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <img
                              className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                              alt="Image Description"
                            />
                          </div>

                          <div className="grow ml-3">
                            <p className="text-sm sm:text-base font-semibold text-gray-800">
                              Luisa
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Senior Director of Operations | Fitbit
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
                          " Refreshing and Thought provoking design and it
                          changes my view about how I design the websites. Great
                          typography, modern clean white design, nice tones of
                          the color. "
                        </p>
                      </div>

                      <div className="p-4 bg-gray-100 rounded-b-xl md:px-7">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <img
                              className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                              src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                              alt="Image Description"
                            />
                          </div>

                          <div className="grow ml-3">
                            <p className="text-sm sm:text-base font-semibold text-gray-800">
                              Alisa Williams
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Entrepreneur | Happy customer
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
                          " With Preline, we're able to easily track our
                          performance in full detail. It's become an essential
                          tool for us to grow and engage with our audience. "
                        </p>
                      </div>

                      <div className="p-4 bg-gray-100 rounded-b-xl md:px-7">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <img
                              className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                              alt="Image Description"
                            />
                          </div>

                          <div className="grow ml-3">
                            <p className="text-sm sm:text-base font-semibold text-gray-800">
                              Josh Tyson
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Product Manager | Capsule
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
                          " In September, I will be using this theme for 2
                          years. I went through multiple updates and changes and
                          I'm very glad to see the consistency and effort made
                          by the team. "
                        </p>
                      </div>

                      <div className="p-4 bg-gray-100 rounded-b-xl md:px-7">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <img
                              className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                              alt="Image Description"
                            />
                          </div>

                          <div className="grow ml-3">
                            <p className="text-sm sm:text-base font-semibold text-gray-800">
                              Luisa
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Senior Director of Operations | Fitbit
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
                          " Refreshing and Thought provoking design and it
                          changes my view about how I design the websites. Great
                          typography, modern clean white design, nice tones of
                          the color. "
                        </p>
                      </div>

                      <div className="p-4 bg-gray-100 rounded-b-xl md:px-7">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <img
                              className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                              src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                              alt="Image Description"
                            />
                          </div>

                          <div className="grow ml-3">
                            <p className="text-sm sm:text-base font-semibold text-gray-800">
                              Alisa Williams
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Entrepreneur | Happy customer
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
