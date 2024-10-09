import { HiArrowSmLeft } from "react-icons/hi";
import Image from "next/image";

export default function FormSidebar() {
  return (
    <div className=" flex-col h-full w-1/4 shadow-md">

      <div className="p-6">
        <button className="border px-4 rounded-3xl py-2">
          <HiArrowSmLeft className="text-3xl font-bold text-red-600" />
        </button>
      </div>
   

    <div className="flex flex-1 flex-col justify-between items-center">
        <div className="flex flex-col items-center">
          <Image
            src="/alliance-logo.png"
            alt="alliance"
            width={100}
            height={37}
            priority
          />
        </div>

        <div className="mt-20">
            <ul>
                <li>batho pele</li>
                <li>batho pele</li>
                <li>batho pele</li>
                <li>batho pele</li>
            </ul>
         </div>
        </div>
        <div className="h-[61.4%] bg-[url('/footerpic.png')] bg-cover bg-center bg-no-repeat ">
        
        </div>
{/* 
      <div className="flex flex-1 flex-col justify-between items-center">
        <div className="flex flex-col items-center">
          <Image
            src="/alliance-logo.png"
            alt="alliance"
            width={100}
            height={37}
            priority
          />
        </div>

        <div className="mt-20">
          <ul>
            <li>batho pele</li>
            <li>batho pele</li>
            <li>batho pele</li>
            <li>batho pele</li>
          </ul>
        </div>

        <div className="w-full h-[500px] bg-red-600 text-center p-4">
          hello
        </div>
      </div> */}
    </div>
  );
}
