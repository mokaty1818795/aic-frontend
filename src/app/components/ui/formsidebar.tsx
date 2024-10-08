import { HiArrowSmLeft } from "react-icons/hi";
import Image from "next/image";

export default function FormSidebar(){
    return (
        <div className="columns-sm shadow-md h-screen">
           <button className="border px-4 rounded-3xl py-2"><HiArrowSmLeft className="text-3xl font-bold text-red-600"/></button>
           <div className="flex flex-col justify-center gap-10 items-center w-full">
           <Image
                src="/alliance-logo.png"
                alt="allliance"
                width={100}
                height={37}
                priority
              />
               <div className="mt-20">
                <li> batho pele</li>
                <li> batho pele</li>
                <li> batho pele</li>
                <li> batho pele</li>
            </div>
           </div>
            <div className="w-full m-0 bg-red-600 h-1/2">
               
           </div>
        </div>
    )
}