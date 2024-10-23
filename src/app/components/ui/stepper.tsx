export default function FormStepper() {
  return (
    <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
      <li className="flex md:w-full items-center text-red-600  sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
        <span className="flex items-center after:content-['/'] gap-2 sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
          <div className="px-2 border hidden rounded-xl">1</div>
          Personal
          <span className="hidden sm:inline-flex sm:ms-1">Details</span>
        </span>
      </li>
      <li className="flex md:w-full items-center after:content-['/'] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
          <div className="px-2 me-2 border hidden rounded-xl">2</div>
          Account <span className="hidden sm:inline-flex sm:ms-2">Info</span>
        </span>
      </li>
      <li className="flex items-center  whitespace-pre-line">
        <div className="px-2 me-2 border hidden rounded-xl">3</div>
        Life&apos;s Insured Details
      </li>
    </ol>
  );
}
