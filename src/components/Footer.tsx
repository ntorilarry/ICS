import { Link } from "react-router-dom";
import Logo from "../assets/Logo2.png";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";


function Footer() {
  return (
    <div className="bg-[#292930]">
      <div className="px-4 lg:py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4">
        <footer className="px-4 pt-10 pb-18">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-start justify-left lg:justify-center space-y-8 md:flex-row md:space-y-0">
              <div>
                <a href="/">
                  {/* Logo */}
                  <img className="w-44" src={Logo} alt="" />
                </a>
                <div className="mt-4 lg:max-w-sm">
                  <p className="text-sm text-white">
                    We are located at Numo Odametey, Adenta East-Greater Accra
                  </p>
                </div>
                <div className="mt-6 flex space-x-4 text-text">
                  <a
                    href="https://facebook.com/profile.php?id=100066607512610"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {/* Logo icon: Facebook */}
                    <svg
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 fill-white"
                    >
                      <path d="M11.4758 8.88543L11.8904 6.15533H9.2968V4.38446C9.2968 3.63737 9.65845 2.90873 10.8201 2.90873H12V0.58446C12 0.58446 10.9297 0.399994 9.90685 0.399994C7.76986 0.399994 6.37443 1.70786 6.37443 4.07456V6.15533H4V8.88543H6.37443V15.4856C6.85114 15.5613 7.33881 15.6 7.83562 15.6C8.33242 15.6 8.82009 15.5613 9.2968 15.4856V8.88543H11.4758Z" />
                    </svg>
                  </a>
                  <a
                    href="https://x.com/ICSL_GH?t=AQIj7k4btoHsmPB14xTpHg&s=09"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <RiTwitterXFill className="h-4 w-4 text-white" />
                  </a>
                  <a
                    href="http://linkedin.com/in/joseph-dickson-70572517b"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {/* Logo icon: LinkedIn */}
                    <svg
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 fill-white"
                    >
                      <path d="M14.8189 0H1.18111C0.867861 0 0.567441 0.124438 0.34594 0.34594C0.124438 0.567441 0 0.867861 0 1.18111V14.8189C0 15.1321 0.124438 15.4326 0.34594 15.6541C0.567441 15.8756 0.867861 16 1.18111 16H14.8189C15.1321 16 15.4326 15.8756 15.6541 15.6541C15.8756 15.4326 16 15.1321 16 14.8189V1.18111C16 0.867861 15.8756 0.567441 15.6541 0.34594C15.4326 0.124438 15.1321 0 14.8189 0ZM4.76889 13.63H2.36333V5.98889H4.76889V13.63ZM3.56445 4.93C3.29158 4.92846 3.02528 4.84613 2.79916 4.69339C2.57304 4.54065 2.39723 4.32435 2.29392 4.07179C2.19061 3.81923 2.16443 3.54173 2.21869 3.2743C2.27294 3.00688 2.4052 2.76152 2.59877 2.56919C2.79234 2.37686 3.03854 2.24618 3.30631 2.19364C3.57408 2.1411 3.85141 2.16906 4.1033 2.27399C4.35519 2.37892 4.57036 2.55611 4.72164 2.78321C4.87293 3.01031 4.95355 3.27713 4.95333 3.55C4.95591 3.73269 4.92167 3.91403 4.85267 4.0832C4.78368 4.25238 4.68132 4.40593 4.55171 4.53471C4.42211 4.66349 4.2679 4.76486 4.09828 4.83277C3.92867 4.90068 3.74711 4.93375 3.56445 4.93ZM13.6356 13.6367H11.2311V9.46222C11.2311 8.23111 10.7078 7.85111 10.0322 7.85111C9.31889 7.85111 8.61889 8.38889 8.61889 9.49333V13.6367H6.21333V5.99445H8.52667V7.05333H8.55778C8.79 6.58333 9.60333 5.78 10.8444 5.78C12.1867 5.78 13.6367 6.57667 13.6367 8.91L13.6356 13.6367Z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/intcogsolutions_gh?igshid=NzZlODBkYWE4Ng=="
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <BsInstagram className="h-4 w-4 text-white" />
                  </a>
                </div>
              </div>
              <div className="md:pl-16 lg:pl-48">
                <div className="text-lg font-semibold uppercase text-white tracking-wide text-heading">
                  Company
                </div>
                <div className="mt-4 space-y-2 font-normal">
                  <a
                    href="/#services"
                    className=" block font-normal text-text text-white"
                  >
                    Services
                  </a>
                  <Link
                    to="/about-us"
                    className="block  text-text font-normal text-white"
                  >
                    About
                  </Link>
                  <Link
                    to="/projects"
                    className="block  text-text font-normal text-white"
                  >
                    Project
                  </Link>
                  <Link
                    to="/blog"
                    className="block font-normal text-text text-white"
                  >
                    Blog
                  </Link>
                </div>
              </div>
              <div className="md:pl-16 lg:pl-48">
                <div className="text-lg font-semibold uppercase text-white tracking-wide text-heading">
                  Contact Us
                </div>
                <div className="mt-4 space-y-2 font-normal">
                  <a
                    href="mailto:infor@ics-gh.org"
                    className="block font-normal text-text text-white"
                  >
                    infor@ics-gh.org
                  </a>
                  <a
                    href="mailto:support@ics-gh.org"
                    className="block font-normal text-text text-white"
                  >
                    support@ics-gh.org
                  </a>
                  <a
                    href="mailto:sales@ics-gh.org"
                    className="block font-normal text-text text-white"
                  >
                    sales@ics-gh.org
                  </a>
                  <a
                    href="mailto:customers@ics-gh.org"
                    className="block font-normal text-text text-white"
                  >
                    customers@ics-gh.org
                  </a>
                  <a
                    href="tel:+233 20 843 5723"
                    className="block  text-text font-normal text-white"
                  >
                    +233 20 843 5723
                  </a>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200" />

            <p className="text-sm text-center text-white">
              © Copyright 2023, All Rights Reserved by ICS
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default Footer;
