"use client";

import Image from "next/image";
import { useRouter } from 'next/navigation'
import { useState } from "react";
import { HiArrowSmLeft, HiPlus } from "react-icons/hi";
import BeneFiaryTable from "../../components/ui/table";
import FormModal from "../../components/ui/modal";
import { useDisclosure } from "@chakra-ui/react";
import QuotationTypes from "@/app/types/quotation.types";
import { useForm } from "react-hook-form";
import { emailRegex, numberRegex, } from "@/lib/utils";
import LifeCover from "@/app/components/ui/livecover/lifecover";
import { differenceInYears } from 'date-fns';
import FuneralQuote from "@/app/components/ui/funeral/funeral";


export default function Quotation() {
  const [step, setStep] = useState<number>(1);
  const [completedStep, setcompletedStep] = useState<number>(0);
  const [quoteType, setQuotetype] = useState<number>(1);
  const [age, setAge] = useState<number>();
  const [gender, setGender] = useState("");
  const [ageMessage, setAgeMessage] = useState<string>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuotationTypes>({
    defaultValues: {
      personalDetails: {
        firstName: "",
        lastName: "",
        email: "",
        dateOfBirth: undefined,
        phoneNumber: "",
        nationalId: "",
        gender: ""
      },

      coverDetails: {
        coverOption: "",
        coverType: "",
        coverAmount: "",
        productOption: "",
      },
    },
  });

  function calculateAge(birthDate: string): number {
    return differenceInYears(new Date(), birthDate);
  }

  const onSubmit = (data: QuotationTypes) => {
    setGender(data.personalDetails.gender);
    const dateOfBirth = data.personalDetails.dateOfBirth.toString();

    const userAge = calculateAge(dateOfBirth);
    if (userAge <= 17) {
      setAgeMessage("age should be 18 and above");
      return;
    }

    setAge(userAge);
    handleClick(data.coverDetails.coverType);

    if (data.coverDetails.coverType === "Livecover") {
      setQuotetype(2);
      const date = new Date();
      const currentDate = date.getUTCDate();
      console.log(currentDate);
    } else {
      setQuotetype(1)
    }
  };

  function handleClick(quoteType: string) {
    if (quoteType !== "Livecover") {
      router.push("/pages/comingsoon")
    } else {
      setStep(step + 1);
      setcompletedStep(completedStep + 1);
    }
  }


  return (
    <div className="flex bg-gray-50 w-full min-h-screen">
      <div className="relative h-screen hidden md:hidden lg:flex w-full flex-col bg-red-700 shadow-md flex-col md:w-1/2 lg:w-1/3">
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
          <button className="border bg-white px-4 rounded-3xl py-2" type='button' onClick={() => {
            if (step === 1) {
              return
            } else {
              setStep(step - 1);
            }
          }}>
            <HiArrowSmLeft className="text-3xl font-bold text-red-600" />
          </button>
        </div>
        <div className="flex flex-col justify-center items-center my-64  px-6 pt-8 sm:px-24 md:pt-0 lg:px-12">
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

      <div className=" p-4 lg:p-6 bg-cover  md:block md:w-full  w-full lg:w-2/3">
        <div className="w-full shadow-sm lg:p-4 p-2 rounded-2xl bg-white border">
          {
            step && step === 1 && (
              <div className="w-full lg:p-2">
                <p className="lg:text-3xl md:text-lg text-md font-bold text-left">
                  Fill in your details
                </p>
                <p className="text-black">
                  To complete the process please fill the form.
                </p>
              </div>
            )
          }

          {/* <div className="lg:p-2 w-full">
            <FormStepper activeStep={step} />
          </div> */}

          <div className="w-full p-2">
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

                        {ageMessage && (
                          <p className="text-base text-red-600">
                            {ageMessage}
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
                  <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                          <div className="mb-5">
                            <label className="mb-3 block text-base text-gray-500">
                              Gender
                            </label>
                            <select
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base text-[#6B7280] outline-none focus:border-red-400 focus:shadow-md"
                              {...register("personalDetails.gender", { required: true })}
                            >
                              <option value="">Select Gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="other">Other</option>
                            </select>
                            {errors.personalDetails?.gender && (
                              <p className="text-base text-red-600">Gender is required</p>
                            )}
                          </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                          <div className="mb-5">
                            <label className="mb-3 block text-base text-gray-500">
                              Cover Type
                            </label>
                            <select
                              id="countries"
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base text-[#6B7280] outline-none focus:border-red-400 focus:shadow-md"
                              {...register("coverDetails.coverType", {
                                required: "please select cover type",
                              })}
                            >
                              <option value="" disabled>
                                Choose Cover Type
                              </option>
                              <option value="Funeral">Funeral</option>
                              <option value="Livecover">Once-Off Life Cover</option>
                            </select>
                            {errors.coverDetails?.coverType && (
                              <p className="text-base text-red-600">
                                {errors.coverDetails?.coverType.message}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    <button
                      onClick={handleSubmit(onSubmit)}
                      type="button"
                      className="text-white w-full bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 me-2 mb-2"
                    >
                      Next
                    </button>
                </>
              )}

              {step == 2 && (
                <>
                  {
                    quoteType === 2 ? (
                      <LifeCover age={age as number} gender={gender} />
                    ) : (
                      <FuneralQuote />
                    )
                  }
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
