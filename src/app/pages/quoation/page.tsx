import FormSidebar from "@/app/components/ui/formsidebar";
import Image from "next/image";
import { HiArrowSmLeft } from "react-icons/hi";

export default function Quotation() {
  return (
    <div className="flex h-screen">
        <FormSidebar/>  
        <div className="w-3/4">
            <h2>Form Area Here</h2>
        </div>
    </div>
  );
}
