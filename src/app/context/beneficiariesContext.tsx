"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import QuotationTypes from "../types/quotation.types";

const BeneficiaryContext = createContext<any>(null);

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

export const useBeneficiaries = () => useContext(BeneficiaryContext);
