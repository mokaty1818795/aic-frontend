import { useState } from "react";
import LifesInsured from "../types/relations.types";

export interface Person {
  id: number;
  relationShipGroup: string;
  typeofrelationship: string;
  premiumAmount: string;
  age: string;
  occupation: string;
}

function useTableData() {
  const [tableData, setTableData] = useState<LifesInsured>();

  console.log(tableData);

  return { tableData, setTableData };
}

export default useTableData;
