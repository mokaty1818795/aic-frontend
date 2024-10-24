"use client";
import Image from "next/image";

export default function Success() {
  return (
    <div className=" w-full h-screen">
      <Image src="/logo.png" alt="alliance" width={150} height={150} priority />
      <div></div>
      <div className="flex flex-col mt-32 items-center justify-center">
        <Image
          src="/Message.png"
          alt="alliance"
          width={200}
          height={200}
          priority
        />
        <div className="mt-4 py-4 max-w-80">
          <p className="font-bold text-center text-2xl">QUOTATION:#896573</p>
          <p className="text-center text-gray-400">
            Thank you for using our services.Your policy and your login details
            have been sent to your email. Thank you
          </p>
        </div>
        <button
          type="button"
          className="text-white bg-red-600  px-24 hover:bg-red-100 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
        >
          Done
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
