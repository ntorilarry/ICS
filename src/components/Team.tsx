import Joseph from "../assets/Joseph Martey Dickson.jpeg";
import Michael from "../assets/Michael Gyamfi.jpeg";
import Dickson from "../assets/Dickson Addai-Badu Jr.jpeg";
export const Team = () => {
  return (
    <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-20 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-semibold md:text-4xl md:leading-tight">
          Our Team
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          We provide every employee with chances to enhance their skills and
          grow their careers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="text-center">
          <img
            className="rounded-xl sm:w-48 sm:h-48 lg:w-64 lg:h-72 mx-auto "
            src={Joseph}
            alt=""
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
              Joseph Martey Dickson
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
              President and CEO
            </p>
          </div>
        </div>

        <div className="text-center">
          <img
            className="rounded-xl sm:w-48 sm:h-48 lg:w-64 lg:h-72 mx-auto"
            src={Michael}
            alt=""
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg ">
              Michael Gyamfi
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
              Director of Business Dev. & Partnerships
            </p>
          </div>
        </div>

        <div className="text-center">
          <img
            className="rounded-xl sm:w-48 sm:h-48 lg:w-64 lg:h-72 mx-auto"
            src={Dickson}
            alt=""
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg ">
              Dickson Addai-Badu Jr.
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
              Director of Operation/Projects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
