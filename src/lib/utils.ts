import { clsx, type ClassValue } from "clsx";
import { customAlphabet } from "nanoid";
import slugifyjs from "slugify";
import { twJoin, twMerge } from "tailwind-merge";

export function cnMerge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function cnJoin(...inputs: ClassValue[]) {
  return twJoin(clsx(inputs));
}

export const nanoid = customAlphabet(
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  7
); // 7-character random string

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function slugify(string: string) {
  return slugifyjs(string, { lower: true });
}
