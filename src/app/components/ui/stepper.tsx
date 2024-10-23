type StepperProps = {
  activeStep: number;
  completeStep: number;
};

export default function FormStepper({
  activeStep,
  completeStep,
}: StepperProps) {
  return (
    <div className=" flex w-full mt-4  items-center space-x-4 md:justify-center md:px-10">
      <span
        className={`hidden h-8 w-8 items-center justify-center rounded-full  ${
          activeStep === 1 ? "bg-red-600 text-white" : "border"
        } text-gray-500  } shadow md:inline-flex`}
      >
        1
      </span>
      <span
        className={`hidden ${
          activeStep === 1 ? "text-red-600" : "text-gray-500"
        }      
        md:inline`}
      >
        Personal Details
      </span>
      <span
        className={`hidden h-0 w-10 border-t-2 border-dashed  ${
          activeStep === 1 ? " border-red-600" : "border-gray-400"
        }     
        border-gray-400 md:inline`}
      ></span>
      <span
        className={`flex h-8 w-8    ${
          activeStep === 2 ? "bg-red-600 text-white" : "border"
        }   items-center  justify-center rounded-full 
         text-gray-500 shadow   `}
      >
        2
      </span>
      <span
        className={`font-semibold ${
          activeStep === 2 ? "text-red-600" : "text-gray-500"
        }   md:inline`}
      >
        Cover Details
      </span>
      <span
        className={`hidden h-0 w-10 border-t-2 border-dashed  border-gray-400 md:inline`}
      ></span>
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-full   ${
          activeStep === 3 ? "bg-red-600 text-white  " : "border"
        }    text-gray-500 shadow`}
      >
        3
      </span>
      <span
        className={`hidden ${
          activeStep === 3 ? "text-red-600" : "text-gray-500"
        } md:inline`}
      >
        Life’s Insured Details
      </span>
    </div>
  );
}
