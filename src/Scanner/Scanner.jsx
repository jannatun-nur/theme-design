import { BiQrScan } from "react-icons/bi";
import { FaDownload } from "react-icons/fa6";
import { MdAddToPhotos } from "react-icons/md";

const Scanner = () => {
  return (
    <div className="mt-24 ">
      {/* Part-01 */}
      <section className="lg:flex lg:justify-between lg:p-5 md:mx-2 md:p-3 md:flex md:justify-between columns-1 gap-4 shadow-md shadow-blue-500">
        <div>
          <p
            className="flex gap-1 lg:text-3xl font-bold text-transparent 
        bg-clip-text bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-2xl ml-24 md:ml-0 lg:ml-0"
          >
            <span className="text-blue-700">
              <BiQrScan />
            </span>{" "}
            Scannner
          </p>
        </div>

        <div>
          <button
            className="flex gap-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-white lg:px-5 lg:py-3 rounded-md
          px-4 py-3 ml-8 lg:ml-0 lg:my-0 my-3"
          >
            <span>
              <FaDownload />
            </span>{" "}
            Download Scanner Example
          </button>
        </div>
      </section>

      {/* MY SCANNNERSSSSSSSSSSSSSSSSSSSSSSS */}

      <div>
        <section className="lg:flex lg:justify-between lg:p-5 lg:mx-6 md:flex md:justify-between columns-1 gap-4 shadow-md shadow-blue-500 lg:mt-6  mt-6">
          <div>
            <p
              className="lg:text-2xl font-bold text-transparent md:px-4
       bg-clip-text bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 lg:px-5 text-center border border-blue-400 shadow-blue-300 shadow-md text-2xl"
            >
              My Scanner
            </p>
          </div>

          <div>
            <button
              className="lg:text-2xl flex gap-2 bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 
          text-white lg:px-4 lg:py-2 rounded-md my-7 lg:my-0 md:my-0 text-xl px-4 py-2 ml-20
          "
            >
              {" "}
              <span className="mt-1">
                <MdAddToPhotos />
              </span>{" "}
              Add new
            </button>
          </div>
        </section>

        {/* Tableeeeeeeeeeeee */}

        <section className="overflow-x-auto border border-blue-500 shadow-xl shadow-blue-200 lg:w-8/12 mx-auto p-10 rounded-md my-4">
          <table className="min-w-full  divide-y-2 text-sm ">
            <thead
              className="ltr:text-left rtl:text-right bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 
              "
            >
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-normal text-white tetx-xl lg:text-2xl ">
                  Sr. No.
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-normal text-white tetx-xl lg:text-2xl">
                  Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-normal text-white tetx-xl lg:text-2xl ">
                  Type
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-normal text-white tetx-xl lg:text-2xl ">
                  Creation Date
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-normal text-white tetx-xl lg:text-2xl ">
                  Action
                </th>
              </tr>
            </thead>
          </table>
        </section>
      </div>

      {/* Public scannerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr */}

      <div className="my-16">
        <section className=" lg:mx-6 p-4 shadow-md shadow-blue-500  lg:mt-6  mt-6">
          <p className="lg:w-2/12 text-2xl md:w-4/12 md:px-0 lg:text-2xl lg:px-4 text-transparent font-bold
       bg-clip-text bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-center border border-blue-400 shadow-blue-300 shadow-md">Public Scanners</p>
           
            <p className="lg:mt-10 mt-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400
        text-2xl">Search Scanners</p>
            <p className="text-blue-700">Search over 150,000+ scans or create your own customized screener.</p>
          <div>

                <div className="relative my-3">
                  <label htmlFor="Search" className="sr-only"> Search </label>

                  <input
                    type="text"
                    id="Search"
                    placeholder="Search for..."
                    className="lg:w-5/12 w-full rounded-md border-blue-600 py-2.5 pe-10 shadow-sm sm:text-sm bg-white border "
                  />

                  
                </div>
                  <button className="font-medium text-white px-4 py-2 rounded-md
       bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400">
                    Search Now
                  </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Scanner;
