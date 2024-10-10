import FormStepper from "../../components/ui/stepper";
import Image from "next/image";
import { HiArrowSmLeft } from "react-icons/hi";

export default function Quotation() {
  return (
    <div className="flex w-full">
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
      <div className=" h-screen p-12 justify-center  md:block md:w-full lg:full">
        <div className="w-full content-center p-4 rounded-2xl border">
            <div className="w-full p-4">
              <p className="text-3xl font-bold text-left">Fill in your details</p>
              <p className="text-black">To complete the process please fill the form.</p>    
            </div>
            <div className="p-4 mx-auto">
              <FormStepper/>
            </div>
        </div>
      </div>     
    </div>
  );
}
