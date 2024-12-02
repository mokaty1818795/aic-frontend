'use client'
import Image from "next/image"
import { useRouter } from 'next/navigation'

export default function FuneralQuote() {
    const router =useRouter();
    return (
        <div className="flex justify-center items-center h-screen w-full">
            <div className="flex flex-col items-center justify-center space-y-6">
                <div className="relative">
                    <Image 
                        src="/coming.png" 
                        width={200} 
                        height={200} 
                        alt="Coming Soon"
                        className="mx-auto"
                    />
                </div>
                <h1 className="text-red-600 font-bold text-4xl text-center">
                    Coming Soon
                </h1>
                <p className="text-center text-gray-600">
                    The feature you are trying to access is currently under development
                </p>
                <button type="button" className="w-full rounded-lg bg-red-600 px-8 py-4 text-base font-semibold text-white shadow-md transition duration-150 ease-in-out hover:bg-red-600 focus:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-200" onClick={()=>{
                    router.back(); 
                }}>Go Back</button>
            </div>
        </div>
    )
}