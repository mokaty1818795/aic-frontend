import React from "react";
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

interface Modalprops {
  onClose: () => void;
  isOpen: boolean;
}

export default function FormModal({ onClose, isOpen }: Modalprops) {
  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="#CF0909" fontWeight="bold">Add Insured Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className="w-full">
            <div className="mb-5">
              <label className="mb-3 block text-base text-gray-500">Age</label>
              <input
                type="text"
                name="nationalId"
                placeholder="19"
                id="nationaId"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base  text-[#6B7280] outline-none focus:border-red-400 focus:shadow-md"
              />
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
              >
                <option selected>Choose Amount</option>
                <option value="US">M30</option>
                <option value="CA">M74</option>
              </select>
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
              >
                <option selected>Choose Amount</option>
                <option value="US">M30</option>
                <option value="CA">M74</option>
              </select>
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
              >
                <option selected>Choose Amount</option>
                <option value="US">M30</option>
                <option value="CA">M74</option>
              </select>
            </div>
          </div>
        </ModalBody>
        <ModalFooter gap={2}>
          <Button
            bg="#CF0909"
            _hover={{
              bg: "white",
              border: "2px solid #CF0909",
              borderWidth: "2",
              color: "#CF0909",
              borderColor:"#CF0909"
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
