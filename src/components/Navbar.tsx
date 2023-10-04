import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { HiMenuAlt1 } from "react-icons/hi";
import Logo from "../assets/international conglomerate.png";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto relative z-20 flex shrink-0 items-center space-x-2 bg-transparent py-6 px-4 sm:px-6">
      <a href="/" className="z-10">
        {/* Logo */}
        <div className="h-9 text-heading">
          <img className="h-12" src={Logo} alt="" />
        </div>
      </a>
      <div className="flex-1">
        <div className="absolute inset-y-0 inset-x-0 hidden items-center justify-center space-x-1.5 px-4 lg:flex">
          <a
            href="#"
            className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-transparent bg-transparent px-4 py-2.5 text-base font-medium text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text"
          >
            Services
          </a>
          <a
            href="#"
            className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-transparent bg-transparent px-4 py-2.5 text-base font-medium text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text"
          >
            About
          </a>
          <a
            href="#"
            className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-transparent bg-transparent px-4 py-2.5 text-base font-medium text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text"
          >
            Projects
          </a>
          <a
            href="#"
            className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-transparent bg-transparent px-4 py-2.5 text-base font-medium text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text"
          >
            Blog
          </a>
        </div>
      </div>
      <div className="z-10">
        <button
          type="button"
          className=" cursor-pointer hidden lg:block items-center justify-center rounded-full border-2 border-[#193151] bg-transparent px-4 py-2.5 text-base font-medium text-[#193151]  shadow-sm hover:text-heading focus:text-heading focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:text-text"
        >
          Contact Us
        </button>
      </div>

      <Menu as="div" className="relative lg:hidden">
        <Menu.Button
          type="button"
          className="inline-flex cursor-pointer items-center justify-center rounded-xl border-none border-transparent bg-transparent p-2 font-medium text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text"
        >
          <HiMenuAlt1 className="h-5 w-5" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-xl bg-white py-3 shadow-xl focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`${
                    active ? "bg-muted-1 text-heading" : "text-text"
                  } flex w-full cursor-pointer items-center px-4 py-2 text-sm font-medium`}
                >
                  Services
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`${
                    active ? "bg-muted-1 text-heading" : "text-text"
                  } flex w-full cursor-pointer items-center px-4 py-2 text-sm font-medium`}
                >
                  About
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`${
                    active ? "bg-muted-1 text-heading" : "text-text"
                  } flex w-full cursor-pointer items-center px-4 py-2 text-sm font-medium`}
                >
                  Projects
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`${
                    active ? "bg-muted-1 text-heading" : "text-text"
                  } flex w-full cursor-pointer items-center px-4 py-2 text-sm font-medium`}
                >
                  Blog
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-muted-1 text-heading" : "text-text"
                  } flex w-full cursor-pointer items-center px-4 py-2 text-sm font-medium`}
                >
                  Contact Us
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </nav>
  );
}
