import Image from "next/image";
import { HiArrowSmLeft } from "react-icons/hi";

export default function Quotation() {
  return (
    <div className="flex w-full flex-wrap">
      <div className="flex w-full shadow-md flex-col md:w-1/2 lg:w-1/3">
        <div className="p-6">
          <button className="border px-4 rounded-3xl py-2">
            <HiArrowSmLeft className="text-3xl font-bold text-red-600" />
          </button>
        </div>
        <div className=" flex flex-col justify-center px-6 pt-8 sm:px-24 md:justify-start md:px-8 md:pt-0 lg:px-12">
          <div className="flex flex-col items-center">
            <Image
              src="/alliance-logo.png"
              alt="alliance"
              width={100}
              height={37}
              priority
            />
          </div>

          <div className="flex flex-col items-center mt-6 self-center pt-3 md:pt-8">
            <div className="flex flex-row gap-2 items-center w-full mb-3">
              <div className="px-3 py-1 rounded-2xl border">1</div>
              <p className="text-lg text-red-600">Personal Details</p>
            </div>
            <div className="flex flex-row gap-2 items-center w-full mb-3">
              <div className="px-3 py-1 rounded-2xl border">2</div>
              <p className="text-lg text-red-600">Cover Details</p>
            </div>
            <div className="flex flex-row gap-2 items-center w-full mb-3">
              <div className="px-3 py-1 rounded-2xl border">3</div>
              <p className="text-lg text-nowrap  text-red-600 ">
              Life&apos;s Insured Details
              </p>
            </div>
          </div>
        </div>
        <div className="h-full bg-[url('/footerpic.png')] bg-cover bg-center bg-no-repeat "></div>
      </div>
      <div className="select-none h-screen md:block md:w-1/2 lg:w-2/3"></div>
    </div>
  );
}
