import { Fragment, useCallback } from "react";
import { Menu, Transition } from "@headlessui/react";
import { HiMenuAlt1 } from "react-icons/hi";
import Logo from "../assets/international conglomerate.png";
import { Link, NavLink } from "react-router-dom";

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
            href="/#services"
            className="inline-flex cursor-pointer items-center justify-center  px-4 py-2.5 text-base font-medium text-text navlink"
          >
            Services
          </a>
          <NavLink
            to="/about-us"
            className="inline-flex cursor-pointer items-center justify-center  px-4 py-2.5 text-base font-medium text-text navlink"
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className="inline-flex cursor-pointer items-center justify-center  px-4 py-2.5 text-base font-medium text-text navlink"
          >
            Projects
          </NavLink>
          <NavLink
            to="/blog"
            className="inline-flex cursor-pointer items-center justify-center  px-4 py-2.5 text-base font-medium text-text navlink"
          >
            Blog
          </NavLink>
        </div>
      </div>
      <div className="z-10">
        {/* <Link
          to="/contact-us"
          type="button"
          className=" cursor-pointer hidden lg:block items-center justify-center rounded-full border-2 border-[#193151] bg-transparent px-4 py-2.5 text-base font-medium text-[#193151]  shadow-sm hover:text-heading focus:text-heading focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:text-text"
        >
          Contact Us
        </Link> */}
        <Link
          to="/contact-us"
          className="hidden lg:block items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-[#193151] border-2 border-transparent rounded-full shadow-sm hover:bg-transparent hover:text-[#193151] hover:border-[#193151] focus:outline-none"
        >
          Contact Us
        </Link>
      </div>

      <Menu as="div" className="relative lg:hidden">
        <Menu.Button
          type="button"
          className="inline-flex cursor-pointer items-center justify-center rounded-xl border-none border-transparent bg-transparent p-2 font-medium text-text navlink"
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
                  href="/#services"
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
                <NavLink
                  to="/about-us"
                  className={`${
                    active ? "bg-muted-1 text-heading" : "text-text"
                  } flex w-full cursor-pointer items-center px-4 py-2 text-sm font-medium`}
                >
                  About
                </NavLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NavLink
                  to="/projects"
                  className={`${
                    active ? "bg-muted-1 text-heading" : "text-text"
                  } flex w-full cursor-pointer items-center px-4 py-2 text-sm font-medium`}
                >
                  Projects
                </NavLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NavLink
                  to="/blog"
                  className={`${
                    active ? "bg-muted-1 text-heading" : "text-text"
                  } flex w-full cursor-pointer items-center px-4 py-2 text-sm font-medium`}
                >
                  Blog
                </NavLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/contact-us"
                  className={`${
                    active ? "bg-muted-1 text-heading" : "text-text"
                  } flex w-full cursor-pointer items-center px-4 py-2 text-sm font-medium`}
                >
                  Contact Us
                </Link>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </nav>
  );
}
