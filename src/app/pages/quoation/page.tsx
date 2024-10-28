"use client";

import FormStepper from "../../components/ui/stepper";
import Image from "next/image";
import { useState } from "react";
import { HiArrowSmLeft, HiPlus } from "react-icons/hi";
import BeneFiaryTable from "../../components/ui/table";
import FormModal from "../../components/ui/modal";
import { useDisclosure } from "@chakra-ui/react";
import QuotationTypes from "@/app/types/quotation.types";
import { useForm } from "react-hook-form";
import { emailRegex, numberRegex, } from "@/lib/utils";
import { getUserByID } from "@/api/services";

export default function Quotation() {
  // const [step, setStep] = useState<number>(1);
  // const [completedStep, setcompletedStep] = useState<number>(0);
  // pageNavigations
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm<QuotationTypes>({
    defaultValues: {
      personalDetails: {
        firstName: "",
        lastName: "",
        email: "",
        dateOfBirth: "",
        phoneNumber: "",
        nationalId: "",
      },

      coverDetails: {
        coverOption: "",
        coverType: "",
        coverAmount: "",
        productOption: "",
      },
    },
  });

  // const onSubmit = (data: QuotationTypes) => {
  //   if (data.coverDetails.coverOption === "Member Only") {
  //     window.location.href = pageNavigations.successPage;
  //   } else {
  //     if (step === 3) {
  //       window.location.href = pageNavigations.successPage;
  //     }
  //     handleClick();
  //   }
  // };

  // function handleClick() {
  //   setStep(step + 1);
  //   setcompletedStep(completedStep + 1);
  // }

  const getUser = async()=>{
   await getUserByID("051257152696");
  }

  return (
    <div className="flex bg-gray-50 w-full h-full flex-wrap">
      <div className=" relative hidden md:hidden lg:flex w-full h-full bg-red-700 shadow-md flex-col md:w-1/2 lg:w-1/3">
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

      <div className=" p-4 lg:p-10 bg-cover  h-full b  md:block md:w-full  w-full lg:w-2/3">
        <div className="w-full shadow-sm lg:p-4 p-2 rounded-2xl bg-white border">
          <div className="w-full lg:p-2">
            <p className="lg:text-3xl md:text-lg text-md font-bold text-left">
              Fill in your details
            </p>
            <p className="text-black">
              To complete the process please fill the form.
            </p>
          </div>
          <div className="lg:p-2 w-full">
            <FormStepper activeStep={step} />
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
                          id="name"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base text-[#6B7280] outline-none focus:border-red-400 focus:shadow-md"
                          {...register("personalDetails.firstName", {
                            required: true,
                          })}
                        />
                        {errors?.personalDetails?.firstName?.type ===
                          "required" && (
                          <p className="text-base text-red-600">
                            first name is required
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <label className="mb-3 block text-base  text-gray-500">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="suename"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base  text-[#6B7280] outline-none focus:border-red-400 focus:shadow-md"
                          {...register("personalDetails.lastName", {
                            required: true,
                          })}
                        />
                        {errors?.personalDetails?.lastName?.type ===
                          "required" && (
                          <p className="text-base text-red-600">
                            last name is required
                          </p>
                        )}
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
                          id="name"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base  text-[#6B7280] outline-none focus:border-red-400 focus:shadow-md"
                          {...register("personalDetails.email", {
                            required: true,
                            validate: {
                              matchPattern: (v) => emailRegex.test(v),
                            },
                          })}
                        />
                        {errors?.personalDetails?.email?.type ===
                          "required" && (
                          <p className="text-base text-red-600">
                            email is required
                          </p>
                        )}
                        {errors.personalDetails?.email?.type ===
                          "matchPattern" && (
                          <p className="text-base text-red-600">
                            invalid email address format
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <label className="mb-3 block text-base  text-gray-500">
                          Date Of Birth
                        </label>
                        <input
                          type="date"
                          id="suename"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base  text-[#6B7280] outline-none focus:border-red-400 focus:shadow-md"
                          {...register("personalDetails.dateOfBirth", {
                            required: true,
                          })}
                        />
                        {errors?.personalDetails?.dateOfBirth?.type ===
                          "required" && (
                          <p className="text-base text-red-600">
                            date of birth is required
                          </p>
                        )}
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
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base  text-[#6B7280] outline-none focus:border-red-400 focus:shadow-md"
                          {...register("personalDetails.phoneNumber", {
                            required: true,
                          })}
                        />
                        {errors?.personalDetails?.phoneNumber?.type ===
                          "required" && (
                          <p className="text-base text-red-600">
                            phone number is required
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <label className="mb-3 block text-base text-gray-500">
                          National Id
                        </label>
                        <input
                          type="text"
                          id="nationaId"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base  text-[#6B7280] outline-none focus:border-red-400 focus:shadow-md"
                          {...register("personalDetails.nationalId", {
                            required: true,
                            validate: {
                              matchPattern: (v) => numberRegex.test(v),
                            },
                          })}
                        />
                        {errors?.personalDetails?.nationalId?.type ===
                          "required" && (
                          <p className="text-base text-red-600">
                            national identity is required
                          </p>
                        )}
                        {errors.personalDetails?.nationalId?.type ===
                          "matchPattern" && (
                          <p className="text-base text-red-600">
                            National Identity must only be Numbers
                          </p>
                        )}
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
                      value="Family"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      {...register("coverDetails.coverOption", {
                        required: "please select cover option",
                      })}
                    />
                    <label className="ms-2 text-sm font-medium text-black">
                      Family
                    </label>
                    {errors.coverDetails?.coverType && (
                      <p className="text-base ms-2 text-red-600">
                        {errors.coverDetails?.coverOption?.message}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center">
                    <input
                      id="default-radio-2"
                      type="radio"
                      value="Member Only"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      {...register("coverDetails.coverOption", {
                        required: "please select cover option",
                      })}
                    />
                    <label className="ms-2 text-sm font-medium text-black">
                      Member Only
                    </label>
                    {errors.coverDetails?.coverType && (
                      <p className="text-base ms-2  text-red-600">
                        {errors.coverDetails?.coverOption?.message}
                      </p>
                    )}
                  </div>
                  <div className=" mt-3 w-full">
                    <div className="mb-5">
                      <label className="mb-3 block text-base text-gray-500">
                        Cover Type
                      </label>
                      <select
                        id="countries"
                        className="bg-white border border-gray-300 py-3 p-2.5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        {...register("coverDetails.coverType", {
                          required: "please select cover type",
                        })}
                      >
                        <option value="" disabled>
                          Choose Cover Type
                        </option>
                        <option value="Funeral">Funeral</option>
                        <option value="Live">Live</option>
                      </select>
                      {errors.coverDetails?.coverType && (
                        <p className="text-base text-red-600">
                          {errors.coverDetails?.coverType.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className=" mt-3 w-full">
                    <div className="mb-5">
                      <label className="mb-3 block text-base text-gray-500">
                        Cover Amount
                      </label>
                      <select
                        className="bg-white border border-gray-300 py-3 p-2.5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        {...register("coverDetails.coverAmount", {
                          required: "please select cover premium",
                        })}
                      >
                        <option value="" disabled>
                          Choose Cover Premium
                        </option>
                        <option value="30">M30</option>
                        <option value="74">M74</option>
                      </select>
                      {errors.coverDetails?.coverAmount && (
                        <p className="text-base text-red-600">
                          {errors.coverDetails?.coverAmount.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className=" mt-3 w-full">
                    <div className="mb-5">
                      <label className="mb-3 block text-base text-gray-500">
                        Select Product
                      </label>
                      <select
                        className="bg-white border border-gray-300 py-3 p-2.5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        {...register("coverDetails.productOption", {
                          required: "please select a product",
                        })}
                      >
                        <option value="" disabled>
                          Choose Product
                        </option>
                        <option value="U Mang?">U Mang?</option>
                      </select>
                      {errors.coverDetails?.productOption && (
                        <p className="text-base text-red-600">
                          {errors.coverDetails?.productOption.message}
                        </p>
                      )}
                    </div>
                  </div>
                </>
              )}

              {step == 3 && (
                <div className="w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <div>
                      <p className="text-2xl font-bold">
                        Add your family details
                      </p>
                    </div>
                    <div>
                      <FormModal onClose={onClose} isOpen={isOpen} />

                      <button
                        type="button"
                        onClick={onOpen}
                        className="text-white bg-red-600 hover:bg-red-100 hover:text-red-600 focus:ring-4 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm px-6 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
                      >
                        <HiPlus
                          style={{
                            fontSize: "20",
                          }}
                        />
                        Add Field
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 w-full">
                    <p className="text-red-600 text-base">
                      Please note you can only add up to 7 seven children, 1
                      spouse, 4 extended families as parents and 2 other
                      relatives.
                    </p>
                  </div>
                  <div className="w-full mt-4 bg-red-100 rounded-md">
                    <BeneFiaryTable />
                  </div>
                </div>
              )}

              <div className="w-full mt-4">
                <button
                  onClick={getUser}
                  type="button"
                  className="text-white w-full bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 me-2 mb-2"
                >
                  {step === 3 ? "Create Quotation" : "Next"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
