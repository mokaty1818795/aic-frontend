import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const numberRegex =
  /^(?:-(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))|(?:0|(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))))(?:.\d+|)$/;

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const pageNavigations = {
  successPage: "pages/success",
};


export const BASE_URL ="https://aic-api-cphradewfgehdpb7.southafricanorth-01.azurewebsites.net/v1/api"