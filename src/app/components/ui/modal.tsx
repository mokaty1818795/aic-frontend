import React from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { numberRegex } from "@/lib/utils";
import QuotationTypes from "@/app/types/quotation.types";
import { useBeneficiaries } from "../../context/beneficiariesContext";

interface Modalprops {
  onClose: () => void;
  isOpen: boolean;
}

export default function FormModal({ onClose, isOpen }: Modalprops) {
  const { addBeneficiary } = useBeneficiaries();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuotationTypes>({
    defaultValues: {
      insuredDetails: {
        age: "",
        premiumAmount: "",
        relationshipGroup: "",
        typeofRelationship: "",
      },
    },
  });

  const onSubmit = (data: QuotationTypes) => {
    console.log(data);
    addBeneficiary(data.insuredDetails);
    reset();

    console.log("Updated Reached here");
  };

  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="#CF0909" fontWeight="bold">
          Add Insured Details
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form>
            <div className="w-full">
              <div className="mb-5">
                <label className="mb-3 block text-base text-gray-500">
                  Age
                </label>
                <input
                  type="text"
                  placeholder="19"
                  id="nationaId"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base  text-[#6B7280] outline-none focus:border-red-400 focus:shadow-md"
                  {...register("insuredDetails.age", {
                    required: true,
                    validate: {
                      matchPattern: (v) => numberRegex.test(v),
                    },
                  })}
                />
                {errors.insuredDetails?.age?.type === "required" && (
                  <p className="text-base text-red-600">Age is required</p>
                )}

                {errors.insuredDetails?.age?.type === "matchPattern" && (
                  <p className="text-base text-red-600">
                    Age must only be Numbers
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
                  id="countries"
                  className="bg-white border border-gray-300 py-3 p-2.5 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 "
                  {...register("insuredDetails.premiumAmount", {
                    required: "please select amount",
                  })}
                >
                  <option value="" disabled>
                    Select option
                  </option>
                  <option value="30.00">M30</option>
                  <option value="74.00">M74</option>
                </select>
                {errors.insuredDetails?.premiumAmount && (
                  <p className="text-base text-red-600">
                    {errors.insuredDetails?.premiumAmount.message}
                  </p>
                )}
              </div>
            </div>
            <div className=" mt-3 w-full">
              <div className="mb-5">
                <label className="mb-3 block text-base text-gray-500">
                  Relationship Group
                </label>
                <select
                  id="countries"
                  className="bg-white border border-gray-300 py-3 p-2.5 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 "
                  {...register("insuredDetails.relationshipGroup", {
                    required: "please select relationship group",
                  })}
                >
                  <option value="" disabled>
                    Choose relationship group
                  </option>
                  <option value="Immediate Family">Immediate Family</option>
                  <option value="Extended Family">Extended Family</option>
                </select>
                {errors?.insuredDetails?.relationshipGroup && (
                  <p className="text-base text-red-600">
                    {errors.insuredDetails?.relationshipGroup.message}
                  </p>
                )}
              </div>
            </div>
            <div className=" mt-3 w-full">
              <div className="mb-5">
                <label className="mb-3 block text-base text-gray-500">
                  Type Of Relationship
                </label>
                <select
                  id="countries"
                  className="bg-white border border-gray-300 py-3 p-2.5 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 "
                  {...register("insuredDetails.typeofRelationship", {
                    required: "please select relationship type",
                  })}
                >
                  <option value="" disabled>
                    Choose Relationship Type
                  </option>
                  <option value="Children">Children</option>
                  <option value="Spouse">Spouse</option>
                </select>
                {errors?.insuredDetails?.typeofRelationship && (
                  <p className="text-base text-red-600">
                    {errors.insuredDetails?.typeofRelationship.message}
                  </p>
                )}
              </div>
            </div>
          </form>
        </ModalBody>
        <ModalFooter gap={2}>
          <Button
            onClick={handleSubmit(onSubmit)}
            bg="#CF0909"
            _hover={{
              bg: "white",
              border: "2px solid #CF0909",
              borderWidth: "2",
              color: "#CF0909",
              borderColor: "#CF0909",
            }}
            color="white"
          >
            Add
          </Button>
          <Button
            bg="white"
            variant="outline"
            _hover={{
              bg: "#CF0909",
              variant: "outline",
              borderWidth: "2",
              color: "white",
            }}
            borderWidth={2}
            color="#CF0909"
            borderColor="#CF0909"
            mr={3}
            onClick={onClose}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
