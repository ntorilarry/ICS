import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Navbar from "../components/Navbar";

export default function Blog() {
  return (
    <div>
      <Navbar />
      <div className="w-full overflow-y-auto scrollbar">
        <div className="mx-auto max-w-6xl px-6 pb-24 md:pt-8 md:pb-32 xl:px-1.5">
          <main className="mt-4 md:mt-20">
            <div className="flex flex-col space-y-10 md:flex-row md:space-x-10 md:space-y-0 lg:space-x-20">
              {/* Sidebar */}
              <section className="flex-shrink-0 md:w-56">
                <h2 className="text-lg font-semibold text-heading">
                  Follow our Blog
                </h2>

                <p className="mt-2 text-sm font-medium text-text">
                  Easily reach, connect, and control your advertisements with
                  tailored campaigns to match your exact goals.
                </p>
                {/* <form className="mt-6 flex flex-col space-y-2">
                <div>
                  <label
                    htmlFor="email"
                    className="sr-only block text-sm font-semibold text-heading"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-primary bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
                >
                  Subscribe
                </button>
              </form> */}
                <div className="mt-8 sm:mt-12">
                  <h3 className="text-sm font-semibold uppercase text-text">
                    Categories
                  </h3>

                  <div className="mt-2 flex flex-col space-y-1">
                    <a
                      href="#innovation"
                      className="flex items-center space-x-2 rounded-lg px-4 py-2 hover:bg-layer-3"
                    >
                      <span className="text-cyan-500">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 8 8"
                          className="h-2 w-2"
                        >
                          <circle cx={4} cy={4} r={3} />
                        </svg>
                      </span>
                      <span className="text-sm font-semibold text-text">
                        Innovation
                      </span>
                    </a>
                    <a
                      href="#media-entertainment"
                      className="flex items-center space-x-2 rounded-lg bg-layer-3 px-4 py-2 hover:bg-layer-3"
                    >
                      <span className="text-blue-500">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 8 8"
                          className="h-2 w-2"
                        >
                          <circle cx={4} cy={4} r={3} />
                        </svg>
                      </span>
                      <span className="text-sm font-semibold text-heading">
                        Media & Entertainment
                      </span>
                    </a>
                    <a
                      href="#healthy-lifestyle"
                      className="flex items-center space-x-2 rounded-lg px-4 py-2 hover:bg-layer-3"
                    >
                      <span className="text-orange-500">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 8 8"
                          className="h-2 w-2"
                        >
                          <circle cx={4} cy={4} r={3} />
                        </svg>
                      </span>
                      <span className="text-sm font-semibold text-text">
                        Healthy lifestyle
                      </span>
                    </a>
                    <a
                      href="#tourism"
                      className="flex items-center space-x-2 rounded-lg px-4 py-2 hover:bg-layer-3"
                    >
                      <span className="text-yellow-500">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 8 8"
                          className="h-2 w-2"
                        >
                          <circle cx={4} cy={4} r={3} />
                        </svg>
                      </span>
                      <span className="text-sm font-semibold text-text">
                        Tourism
                      </span>
                    </a>
                    <a
                      href="#mentorship"
                      className="flex items-center space-x-2 rounded-lg px-4 py-2 hover:bg-layer-3"
                    >
                      <span className="text-red-500">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 8 8"
                          className="h-2 w-2"
                        >
                          <circle cx={4} cy={4} r={3} />
                        </svg>
                      </span>
                      <span className="text-sm font-semibold text-text">
                        Mentorship
                      </span>
                    </a>
                    <a
                      href="#volunteer"
                      className="flex items-center space-x-2 rounded-lg px-4 py-2 hover:bg-layer-3"
                    >
                      <span className="text-gray-500">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 8 8"
                          className="h-2 w-2"
                        >
                          <circle cx={4} cy={4} r={3} />
                        </svg>
                      </span>
                      <span className="text-sm font-semibold text-text">
                        Volunteer
                      </span>
                    </a>
                    <a
                      href="#events"
                      className="flex items-center space-x-2 rounded-lg px-4 py-2 hover:bg-layer-3"
                    >
                      <span className="text-cyan-500">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 8 8"
                          className="h-2 w-2"
                        >
                          <circle cx={4} cy={4} r={3} />
                        </svg>
                      </span>
                      <span className="text-sm font-semibold text-text">
                        Events
                      </span>
                    </a>
                    <a
                      href="#fashion"
                      className="flex items-center space-x-2 rounded-lg px-4 py-2 hover:bg-layer-3"
                    >
                      <span className="text-purple-500">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 8 8"
                          className="h-2 w-2"
                        >
                          <circle cx={4} cy={4} r={3} />
                        </svg>
                      </span>
                      <span className="text-sm font-semibold text-text">
                        Fashion
                      </span>
                    </a>
                  
                  </div>
                </div>
              </section>

              {/* Article list */}
              <section className="space-y-12 sm:space-y-24">
                {/* Article list item */}
                <div className="flex flex-col" id="innovation">
                  <a href="#" className="relative shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                      alt=""
                      className="aspect-video w-full rounded-xl"
                    />
                    <span className="absolute right-4 top-4 inline-flex items-center rounded-full border-2 border-cyan-200 bg-cyan-200 px-2 py-0.5 text-xs font-semibold text-cyan-600 shadow-sm sm:right-8 sm:top-8 sm:text-base">
                      Innovation
                    </span>
                  </a>
                  <a
                    href="#"
                    className="mt-6 focus:outline-none sm:mt-8"
                    tabIndex={-1}
                  >
                    <h2 className="text-xl font-semibold text-heading sm:text-2xl lg:text-4xl">
                      ICS Innovation Hub Centre
                    </h2>
                  </a>
                  <p className="mt-4 text-base font-normal text-text sm:mt-6">
                    Being in the Digital Industry for the past 6 years, I have
                    observed the way the internet has influenced every industry
                    and more importantly every part of our daily lives. Starting
                    With Browsing, to Email, Chatting, Video Conferencing and
                    VOIP, Active Directories, social media, Blogs, Smart Phones
                    and Smart Devices, and many others. I believe that part of
                    this ongoing evolution is Media and this in specific means
                    the way Media Sources Publish Content and the way Audience
                    access content. Content that is more specific, solicited,
                    and customized for every user's preference. Our idea behind
                    Tech media is to provide broadcasters a platform that
                    automates and enhances their entire web streaming platform
                    starting from better audience analysis, to an automated
                  </p>
                  <p className="mt-4 text-base font-normal text-text sm:mt-6">
                    Media technology is any hardware, software or tool that is
                    used to compose, create, produce, deliver and manage media
                    including audio, video, images, information, interactive
                    media, video games, virtual reality and augmented reality
                    environments
                  </p>
                  <p className="mt-4 text-base font-normal text-text sm:mt-6">
                    We drive growth and innovation every single day with our
                    passion to create things differently and our ongoing journey
                    to keep raising the bar of innovation.
                  </p>
                  <p className="mt-4 text-base font-normal text-text sm:mt-6">
                    Join the community that is leading in AI coverage and
                    transformative tech news and events helping business leaders
                    make smart decisions and stay on top of breaking news.
                  </p>
                  <p className="mt-4 text-base font-normal text-text sm:mt-6">
                    Whether you come for the articles, read our newsletters, or
                    attend our events, you will emerge from Tech media with new
                    knowledge, perspective, influences, and connections
                  </p>
                  <p className="mt-4 text-base font-normal text-text sm:mt-6">
                    The move to a digital world, where digital content of every
                    type (e.g., music, movies, photographs)is now stored and
                    transmitted as data, has made every type of entertainment
                    available on demand to any device at any time. It has
                    democratized entertainment, shifting the balance away from a
                    small number of distributors toward content creators. But
                    that convenience comes at a price: Data is now vulnerable to
                    being retrieved, copied
                  </p>
                  <p className="mt-4 text-base font-normal text-text sm:mt-6">
                    ICS Tech media, events focus on the mission-critical trends
                    impacting our audience and the business decisions they make.
                    Whether it’s one of our large flagship events, or an
                    intimate private gathering, our events are always authentic,
                    unique, digital experiences formed around innovative
                    technology, discussions, and ideas.
                  </p>
                </div>

                {/* Article list item */}
                <div className="flex flex-col" id="media-entertainment">
                  <a href="#" className="relative shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1616469829526-7057a1427626?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt=""
                      className="aspect-video w-full rounded-xl"
                    />
                    <span className="absolute right-4 top-4 inline-flex items-center rounded-full border-2 border-blue-200 bg-blue-200 px-2 py-0.5 text-xs font-semibold text-blue-600 shadow-sm sm:right-8 sm:top-8 sm:text-base">
                      Media
                    </span>
                  </a>
                  <a
                    href="#"
                    className="mt-6 focus:outline-none sm:mt-8"
                    tabIndex={-1}
                  >
                    <h2 className="text-xl font-semibold text-heading sm:text-2xl lg:text-4xl">
                      Media & Entertainment
                    </h2>
                  </a>
                  <p className="mt-4 text-base font-normal text-text sm:mt-6">
                    The media and entertainment sectors are undergoing profound
                    changes with the arrival of new players, convergence with
                    telecoms and digitalization. tech media Partners supports
                    sector players in the redesign of economic models in a
                    context of disrupted audiences.
                  </p>
                  <p className="mt-4 text-base font-normal text-text sm:mt-6">
                    A financial advisor is often responsible for more than just
                    executing trades in the market on behalf of their clients.
                    Advisors use their knowledge and expertise to construct
                    personalized financial plans that aim to achieve the
                    financial goals of clients. These plans include not only
                    investments but also savings, budget, insurance, and tax
                    strategies. Advisors further check in with their clients on
                    a regular basis to re-evaluate their current situation and
                    future goals and plan accordingly. You do not need to be
                    wealthy to benefit from the services of a financial advisor.
                  </p>
                </div>

                {/* Article list item */}
                <div className="flex flex-col" id="healthy-lifestyle">
                  <a href="#" className="relative shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1556911073-52527ac43761?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt=""
                      className="aspect-video w-full rounded-xl"
                    />
                    <span className="absolute right-4 top-4 inline-flex items-center rounded-full border-2 border-orange-200 bg-orange-200 px-2 py-0.5 text-xs font-semibold text-orange-600 shadow-sm sm:right-8 sm:top-8 sm:text-base">
                      lifestyle
                    </span>
                  </a>
                  <a
                    href="#"
                    className="mt-6 focus:outline-none sm:mt-8"
                    tabIndex={-1}
                  >
                    <h2 className="text-xl font-semibold text-heading sm:text-2xl lg:text-4xl">
                      Healthy lifestyle
                    </h2>
                  </a>
                  <p className="mt-4 text-base font-normal text-text sm:mt-6">
                    Along with eating right and being active, real health
                    includes getting enough sleep, practicing mindfulness,
                    managing stress, keeping mind and body fit
                  </p>
                </div>

                {/* Article list item */}
                <div className="flex flex-col" id="tourism">
                  <a href="#" className="relative shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt=""
                      className="aspect-video w-full rounded-xl"
                    />
                    <span className="absolute right-4 top-4 inline-flex items-center rounded-full border-2 border-yellow-200 bg-yellow-200 px-2 py-0.5 text-xs font-semibold text-yellow-600 shadow-sm sm:right-8 sm:top-8 sm:text-base">
                      Tourism
                    </span>
                  </a>
                  <a
                    href="#"
                    className="mt-6 focus:outline-none sm:mt-8"
                    tabIndex={-1}
                  >
                    <h2 className="text-xl font-semibold text-heading sm:text-2xl lg:text-4xl">
                      Tourism
                    </h2>
                  </a>
                  <p className="mt-4 text-base font-normal text-text sm:mt-6">
                    The act and process of spending time away from home in
                    pursuit of recreation, relaxation,
                  </p>
                </div>

                {/* Article list item */}
                <div className="flex flex-col" id="mentorship">
                  <a href="#" className="relative shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1521790945508-bf2a36314e85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1934&q=80"
                      alt=""
                      className="aspect-video w-full rounded-xl"
                    />
                    <span className="absolute right-4 top-4 inline-flex items-center rounded-full border-2 border-red-200 bg-red-200 px-2 py-0.5 text-xs font-semibold text-red-600 shadow-sm sm:right-8 sm:top-8 sm:text-base">
                      Mentorship
                    </span>
                  </a>
                  <a
                    href="#"
                    className="mt-6 focus:outline-none sm:mt-8"
                    tabIndex={-1}
                  >
                    <h2 className="text-xl font-semibold text-heading sm:text-2xl lg:text-4xl">
                      Mentorship
                    </h2>
                  </a>
                  <p className="mt-4 text-base font-normal text-text sm:mt-6">
                    Mentorship is the influence, guidance, or direction given by
                    a mentor. A mentor is someone who teaches or gives help and
                    advice to a less experienced and often younger person. In an
                    organizational setting, a mentor influences the personal and
                    profession
                  </p>
                </div>

                {/* Article list item */}
                <div className="flex flex-col" id="volunteer">
                  <a href="#" className="relative shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1590874023110-f82d4c63b599?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt=""
                      className="aspect-video w-full rounded-xl"
                    />
                    <span className="absolute right-4 top-4 inline-flex items-center rounded-full border-2 border-gray-200 bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600 shadow-sm sm:right-8 sm:top-8 sm:text-base">
                      Volunteer
                    </span>
                  </a>
                  <a
                    href="#"
                    className="mt-6 focus:outline-none sm:mt-8"
                    tabIndex={-1}
                  >
                    <h2 className="text-xl font-semibold text-heading sm:text-2xl lg:text-4xl">
                      Volunteer
                    </h2>
                  </a>
                  <p className="mt-4 text-base font-normal text-text sm:mt-6">
                    Volunteer is the leading comparison platform for volunteer
                    in Ghana and programs. We guide you through a safe and easy
                  </p>
                </div>

                {/* Article list item */}
                <div className="flex flex-col" id="events">
                  <a href="#" className="relative shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1569863959165-56dae551d4fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                      alt=""
                      className="aspect-video w-full rounded-xl"
                    />
                    <span className="absolute right-4 top-4 inline-flex items-center rounded-full border-2 border-cyan-200 bg-cyan-200 px-2 py-0.5 text-xs font-semibold text-cyan-600 shadow-sm sm:right-8 sm:top-8 sm:text-base">
                      Events
                    </span>
                  </a>
                  <a
                    href="#"
                    className="mt-6 focus:outline-none sm:mt-8"
                    tabIndex={-1}
                  >
                    <h2 className="text-xl font-semibold text-heading sm:text-2xl lg:text-4xl">
                      Events
                    </h2>
                  </a>
                  <p className="mt-4 text-base font-normal text-text sm:mt-6">
                    Be the first to hear about the latest Tech Media events and
                    opportunities
                  </p>
                </div>

                {/* Article list item */}
                <div className="flex flex-col" id="fashion">
                  <a href="#" className="relative shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt=""
                      className="aspect-video w-full rounded-xl"
                    />
                    <span className="absolute right-4 top-4 inline-flex items-center rounded-full border-2 border-purple-200 bg-purple-200 px-2 py-0.5 text-xs font-semibold text-purple-600 shadow-sm sm:right-8 sm:top-8 sm:text-base">
                      Fashion
                    </span>
                  </a>
                  <a
                    href="#"
                    className="mt-6 focus:outline-none sm:mt-8"
                    tabIndex={-1}
                  >
                    <h2 className="text-xl font-semibold text-heading sm:text-2xl lg:text-4xl">
                      Fashion
                    </h2>
                  </a>
                  <p className="mt-4 text-base font-normal text-text sm:mt-6">
                    Fashion is a form of self-expression and autonomy at a
                    particular period and place and in a specific context, of
                    clothing, footwear, lifestyle, accessories, makeup,
                    hairstyle, and body posture
                  </p>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
