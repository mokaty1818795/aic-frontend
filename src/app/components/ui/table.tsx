import ItableProps from "../../types/table.types";
import { RiDeleteBin2Line } from "react-icons/ri";

export default function BeneFiaryTable({ data }: ItableProps) {
  return (
    <div className="w-full">
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
            {data.map((item, key) => {
              return (
                <tr key={key} className="bg-white border-b border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    1
                  </th>
                  <td className="px-6 py-4  text-gray-900">
                    {item.relationShipGroup}
                  </td>
                  <td className="px-6 py-4  text-gray-900">
                    {item.typeofrelationship}
                  </td>
                  <td className="px-6 py-4  text-gray-900">
                    {item.premiumAmount}
                  </td>
                  <td className="px-6 py-4  text-gray-900">{item.age}</td>
                  <td className="px-6 py-4  text-gray-900">
                    <button type="button">
                      <RiDeleteBin2Line className="text-red-600" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
