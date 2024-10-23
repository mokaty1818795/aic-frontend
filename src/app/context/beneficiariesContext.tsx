"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import QuotationTypes from "../types/quotation.types";

interface BeneficiaryContextType {
  beneficiaries: QuotationTypes["insuredDetails"][];
  addBeneficiary: (beneficiary: QuotationTypes["insuredDetails"]) => void;
  removeBeneficiary: (index: number) => void;
}

const BeneficiaryContext = createContext<BeneficiaryContextType | undefined>(
  undefined
);

export const BeneficiaryProvider = ({ children }: { children: ReactNode }) => {
  const [beneficiaries, setBeneficiaries] = useState<
    QuotationTypes["insuredDetails"][]
  >([]);

  const addBeneficiary = (beneficiary: QuotationTypes["insuredDetails"]) => {
    setBeneficiaries((prev) => [...prev, beneficiary]);
  };

  const removeBeneficiary = (index: number) => {
    setBeneficiaries((prev) => prev.filter((_, i) => i !== index));
  };
  return (
    <BeneficiaryContext.Provider
      value={{ beneficiaries, addBeneficiary, removeBeneficiary }}
    >
      {children}
    </BeneficiaryContext.Provider>
  );
};

export const useBeneficiaries = () => {
  const context = useContext(BeneficiaryContext);
  if (!context) {
    throw new Error(
      "useBeneficiaries must be used within a BeneficiaryProvider"
    );
  }
  return context;
};
