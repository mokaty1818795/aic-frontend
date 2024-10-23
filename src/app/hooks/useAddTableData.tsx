import { useEffect, useState } from "react";
import QuotationTypes from "../types/quotation.types";

function useTableData() {
  const [beneficiaries, setBeneficiaries] = useState<
    QuotationTypes["insuredDetails"][]
  >([]);

  const [insureds, setInsured] = useState<QuotationTypes["insuredDetails"][]>(
    []
  );

  const addBeneficiary = (beneficiary: QuotationTypes["insuredDetails"]) => {
    setBeneficiaries((prev) => [...prev, beneficiary]);
    console.log(beneficiaries);
  };
  useEffect(() => {
    console.log("Beneficiaries updated:", beneficiaries);
    setInsured(beneficiaries);
  }, [beneficiaries]);
  return { beneficiaries, insureds, addBeneficiary };
}

export default useTableData;
