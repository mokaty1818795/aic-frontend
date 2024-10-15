"use client";
import FormStepper from "../../components/ui/stepper";
import Image from "next/image";
import { useState } from "react";
import { HiArrowSmLeft } from "react-icons/hi";

export default function Quotation() {
  const [step, setStep] = useState<number>(1);
  const [selected, setSelected] = useState<boolean>(false);

  function handleClick() {
    console.log("increment like count");
    setStep(step + 1);
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

      <div className=" p-4 lg:p-10   bg-gray-50  h-screen b  md:block md:w-full  w-full lg:w-2/3">
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

          <div className="w-full  lg:p-4">
            <form>
              {step == 1 && (
                <>
                  <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <label className="mb-3 block text-base  text-gray-500">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base text-[#6B7280] outline-none focus:border-red-400 focus:shadow-md"
                        />
                      </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <label className="mb-3 block text-base  text-gray-500">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastname"
                          id="suename"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base  text-[#6B7280] outline-none focus:border-red-400 focus:shadow-md"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <label className="mb-3 block text-base text-gray-500">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="name"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base  text-[#6B7280] outline-none focus:border-red-400 focus:shadow-md"
                        />
                      </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <label className="mb-3 block text-base  text-gray-500">
                          Date Of Birth
                        </label>
                        <input
                          type="date"
                          name="dob"
                          id="suename"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base  text-[#6B7280] outline-none focus:border-red-400 focus:shadow-md"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <label className="mb-3 block text-base  text-gray-500">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base  text-[#6B7280] outline-none focus:border-red-400 focus:shadow-md"
                        />
                      </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <label className="mb-3 block text-base text-gray-500">
                          National Id
                        </label>
                        <input
                          type="text"
                          name="nationalId"
                          id="nationaId"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base  text-[#6B7280] outline-none focus:border-red-400 focus:shadow-md"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}

              {step == 2 && (
                <>
                  <p className="mb-1 text-gray-500">Looking for?</p>
                  <div className="flex items-center mb-4">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="ms-2 text-sm font-medium text-black">
                      Family
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      checked
                      id="default-radio-2"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="ms-2 text-sm font-medium text-black">
                      Member Only
                    </label>
                  </div>
                  <div className=" mt-3 w-full">
                    <div className="mb-5">
                      <label className="mb-3 block text-base text-gray-500">
                        Cover Type
                      </label>
                      <select
                        id="countries"
                        className="bg-white border border-gray-300 py-3 p-2.5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      >
                        <option selected>Choose Type</option>
                        <option value="Funeral">Funeral</option>
                        <option value="Live">Live</option>
                      </select>
                    </div>
                  </div>
                  <div className=" mt-3 w-full">
                    <div className="mb-5">
                      <label className="mb-3 block text-base text-gray-500">
                        Cover Amount
                      </label>
                      <select
                        id="countries"
                        className="bg-white border border-gray-300 py-3 p-2.5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      >
                        <option selected>Choose Amount</option>
                        <option value="US">M30</option>
                        <option value="CA">M74</option>
                      </select>
                    </div>
                  </div>
                  <div className=" mt-3 w-full">
                    <div className="mb-5">
                      <label className="mb-3 block text-base text-gray-500">
                        Select Product
                      </label>
                      <select
                        id="countries"
                        className="bg-white border border-gray-300 py-3 p-2.5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      >
                        <option selected>Choose a product</option>
                        <option value="US">U Mang?</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              {step == 3 && (
                <div className="w-full">
                  <p>Hello4</p>
                </div>
              )}

              <div className="w-full mt-4">
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
