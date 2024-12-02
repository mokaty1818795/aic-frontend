'use client'

import { useState } from "react";
import { useForm } from "react-hook-form";
import Loader from "../loader";
import { getLivesProducts } from "@/api/services";
import ProductLivesAssuredProps from "@/app/types/lifeProduct.types";

type LifeCoverProps = {
  gender: string;
  monthlySalary: number;
  quoteType: 'coverAmount' | 'premiumAmount';
  amount: string;
}

type ClientAgeProps = {
  age: number;
}

export default function LifeCover({age}: ClientAgeProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<number>(0);
  const [showResults, setShowResults] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<LifeCoverProps>({
    defaultValues: {
      gender: '',
      monthlySalary: 0,
      quoteType: 'coverAmount',
      amount: ''
    },
  });

  const quoteType = watch('quoteType');

  const calculateByCover = (rptValue: number, coverAmount: number) => {
    const initialPremiumAmount = rptValue * (coverAmount/1000);
    const finalPremiumAmount = initialPremiumAmount/0.5775;
    return finalPremiumAmount;
  }

  const calculateByPremium = (rptValue: number, premiumAmount: number) => {
    const initialPremiumAmount = premiumAmount * 0.5775;
    const valueOnRPT = initialPremiumAmount/rptValue;
    const finalPremiumAmount = valueOnRPT * 1000;
    return finalPremiumAmount;
  }

  const onSubmit = async (data: LifeCoverProps) => {
    setLoading(true);
    const lifeDetails = await getLivesProducts(data.gender, age, data.monthlySalary, data.monthlySalary);
    if(lifeDetails) {
      setLoading(false);
      const lifeProductsDetails = lifeDetails.productLivesAssured as ProductLivesAssuredProps[];
      const rptValue = lifeProductsDetails?.map(details => details.RPT);
      const rpt = parseFloat(rptValue[0]);
      const amount = parseFloat(data.amount);
      if(data.quoteType === "coverAmount") {
        setResult(calculateByCover(rpt, amount));
      } else {
        setResult(calculateByPremium(rpt, amount));
      }
      setShowResults(true);
    } else {
      setLoading(false);
      console.log(lifeDetails);
    }
  };

  const handleReset = () => {
    reset();
    setShowResults(false);
    setResult(0);
  };

  return (
    <div className="p-6">
      {loading && (<Loader/>)}
      <div className="bg-white rounded-t-xl px-8 py-6">
        <h2 className="text-2xl font-bold text-black">Get Once-Off Life Cover Quote</h2>
      </div> 
      <div className="p-4">
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender
              </label>
              <select
                className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-gray-700 shadow-sm transition duration-150 ease-in-out focus:border-red-400 focus:ring-2 focus:ring-red-200 focus:outline-none"
                {...register("gender", { required: true })}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <p className="mt-2 text-sm text-red-600">Gender is required</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Salary
              </label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500">M</span>
                <input
                  type="number"
                  className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-8 pr-4 text-gray-700 shadow-sm transition duration-150 ease-in-out focus:border-red-400 focus:ring-2 focus:ring-red-200 focus:outline-none"
                  {...register("monthlySalary", {
                    required: true,
                    min: 0,
                    valueAsNumber: true
                  })}
                />
              </div>
              {errors.monthlySalary?.type === "required" && (
                <p className="mt-2 text-sm text-red-600">Monthly salary is required</p>
              )}
              {errors.monthlySalary?.type === "min" && (
                <p className="mt-2 text-sm text-red-600">Salary cannot be negative</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Quote Type
            </label>
            <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-3 bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
                <input
                  type="radio"
                  id="coverAmount"
                  value="coverAmount"
                  className="h-5 w-5 text-red-500 focus:ring-red-400"
                  {...register("quoteType", { required: true })}
                />
                <label htmlFor="coverAmount" className="text-sm font-medium text-gray-700">
                  Quote by Cover Amount
                </label>
              </div>
              <div className="flex items-center space-x-3 bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
                <input
                  type="radio"
                  id="premiumAmount"
                  value="premiumAmount"
                  className="h-5 w-5 text-red-500 focus:ring-red-400"
                  {...register("quoteType", { required: true })}
                />
                <label htmlFor="premiumAmount" className="text-sm font-medium text-gray-700">
                  Quote by Premium Amount
                </label>
              </div>
            </div>
            {errors.quoteType && (
              <p className="mt-2 text-sm text-red-600">Please select a quote type</p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {quoteType === 'coverAmount' ? 'Cover Amount' : 'Premium Amount'}
              </label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500">M</span>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-8 pr-4 text-gray-700 shadow-sm transition duration-150 ease-in-out focus:border-red-400 focus:ring-2 focus:ring-red-200 focus:outline-none"
                  {...register("amount", { required: true })}
                />
              </div>
              {errors.amount && (
                <p className="mt-2 text-sm text-red-600">Amount is required</p>
              )}
            </div>

            {showResults && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {quoteType === 'coverAmount' ? 'Monthly Premium' : 'Cover Amount'}
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">M</span>
                  <input
                    type="text"
                    value={result.toFixed(2)}
                    readOnly
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 py-3 pl-8 pr-4 text-gray-700"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  This is an estimate. Final amount may vary based on additional factors.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="flex lg:flex-row sm:flex-col space-x-4 mt-6">
          <button
          type="button"
            onClick={handleSubmit(onSubmit)}
            className="w-full rounded-lg bg-red-600 px-8 py-4 text-base font-semibold text-white shadow-md transition duration-150 ease-in-out hover:bg-red-600 focus:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-200"
          >
            Calculate
          </button>
          <button
          type="button"
            onClick={handleReset}
            className="w-full rounded-lg bg-white text-red-600 border border-red-600 px-8 py-4 text-base font-semibold shadow-md transition duration-150 ease-in-out hover:bg-red-600 focus:bg-red-600 focus:outline-none hover:text-white focus:ring-2 focus:ring-red-200"
          >
            Clear 
          </button>
        </div>
      </div>
    </div>
  );
}