"use client";
import FormStepper from "../../components/ui/stepper";
import Image from "next/image";
import { HiArrowSmLeft } from "react-icons/hi";

export default function Quotation() {
  function handleClick() {
    console.log("increment like count");
  }

  return (
    <div className="flex w-full flex-wrap">
      <div className=" relative hidden md:hidden lg:flex w-full h-screen bg-red-700 shadow-md flex-col md:w-1/2 lg:w-1/3">
        <div className="absolute right-0 top-0">
          <Image
            src="/top-corner-bg.png"
            alt="alliance"
            width={60}
            height={37}
            priority
          />
        </div>
        <div className="p-6">
          <button className="border bg-white px-4 rounded-3xl py-2">
            <HiArrowSmLeft className="text-3xl font-bold text-red-600" />
          </button>
        </div>
        <div className="flex h-screen flex-col justify-center items-center  px-6 pt-8 sm:px-24 md:pt-0 lg:px-12">
          <div className="bg-white rounded-xl max-w-24 p-4">
            <Image
              src="/alliance-logo.png"
              alt="alliance"
              width={90}
              height={37}
              priority
            />
          </div>
          <div className="mt-2">
            <p className="text-center text-md text-gray-200">
              Always there for Basotho
            </p>
            <div className="max-w-80 mt-2">
              <p className="text-center text-2xl text-gray-50 font-bold">
                Welcome to Alliance Insurance Portal
              </p>
            </div>
          </div>
        </div>
        <div className="absolute left-0 bottom-0">
          <Image
            src="/bottom-corner-bg.png"
            alt="alliance"
            width={60}
            height={37}
            priority
          />
        </div>
      </div>

      <div className=" p-4 lg:p-20  bg-gray-50 h-screen  md:block md:w-full  w-full lg:w-2/3">
        <div className="w-full shadow-sm lg:p-4 p-2 rounded-2xl bg-white border">
          <div className="w-full lg:p-4">
            <p className="lg:text-3xl md:text-lg text-md font-bold text-left">
              Fill in your details
            </p>
            <p className="text-black">
              To complete the process please fill the form.
            </p>
          </div>
          <div className="lg:p-4 w-full">
            <FormStepper />
          </div>
          <div className="w-full mt-5 lg:p-4">
            <form>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-gray-500">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-400 focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-gray-500">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      id="suename"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-400 focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-gray-500">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="name"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-400 focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-gray-500">
                      Date Of Birth
                    </label>
                    <input
                      type="date"
                      name="dob"
                      id="suename"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-400 focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-gray-500">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-400 focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-gray-500">
                      National Id
                    </label>
                    <input
                      type="text"
                      name="nationalId"
                      id="nationaId"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-400 focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <button
                  onClick={handleClick}
                  type="button"
                  className="text-white w-full bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 me-2 mb-2"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
