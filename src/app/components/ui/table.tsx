import { useBeneficiaries } from "../../context/beneficiariesContext";
import { RiDeleteBin2Line } from "react-icons/ri";
import QuotationTypes from "../../types/quotation.types";

export default function BeneFiaryTable() {
  const { beneficiaries, removeBeneficiary } = useBeneficiaries();
  return (
    <div className="w-full">
      {beneficiaries.length === 0 ? (
        <div className="p-4 items-center justify-center ">
          <p className="text-red-600 text-2xl font-bold text-center">
            No Insured Added
          </p>
        </div>
      ) : (
        <div className="relative max-h-64 overflow-y-auto overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-900 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Relationship Group
                </th>
                <th scope="col" className="px-6 py-3">
                  Type Of Relationship
                </th>
                <th scope="col" className="px-6 py-3">
                  Premium Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Age
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {beneficiaries.map(
                (item: QuotationTypes["insuredDetails"], index: number) => {
                  return (
                    <tr
                      key={index}
                      className="bg-white border-b border-gray-200"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        1
                      </th>
                      <td className="px-6 py-4  text-gray-900">
                        {item.relationshipGroup}
                      </td>
                      <td className="px-6 py-4  text-gray-900">
                        {item.typeofRelationship}
                      </td>
                      <td className="px-6 py-4  text-gray-900">
                        {item.premiumAmount}
                      </td>
                      <td className="px-6 py-4  text-gray-900">{item.age}</td>
                      <td className="px-6 py-4  text-gray-900">
                        <button type="button">
                          <RiDeleteBin2Line
                            className="text-red-600"
                            onClick={() => {
                              removeBeneficiary(index);
                            }}
                          />
                        </button>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
