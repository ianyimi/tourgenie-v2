"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTernaryDarkMode } from "usehooks-ts";
import Favicon from "~/app/icon3.png";
import { GlobeIcon } from "~/app/icons";
import { SpaceGrotesk } from "~/lib/fonts";
import { cnMerge } from "~/lib/utils";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Company", href: "#" },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDarkMode, setTernaryDarkMode } = useTernaryDarkMode();

  return (
    <motion.div
      key="nav"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={cnMerge("fixed top-0 z-10 min-w-full", SpaceGrotesk.className)}
    >
      <nav
        className={cnMerge(
          "mx-auto flex max-w-7xl items-center justify-between bg-tgBackgroundLight p-6 text-tgTextLight lg:px-8",
          isDarkMode && "bg-tgBackgroundDark text-tgTextDark"
        )}
        aria-label="Global"
      >
        <div className="flex flex-1">
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-semibold leading-6 transition-colors duration-500 hover:text-tgPrimary"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">TourGenie</span>
          {/* <Image className="h-8 w-auto" src={Favicon} alt="tourgenie-logo" /> */}
          <GlobeIcon className="h-16 w-16" fill="#834f0b" />
        </a>
        <div className="flex flex-1 justify-end">
          <a
            href="#"
            className="text-sm font-semibold leading-6 transition-colors duration-500 hover:text-tgPrimary"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
          <div
            className="ml-4 cursor-pointer px-2 transition-colors duration-500 hover:text-tgPrimary xl:ml-24"
            onClick={() => {
              if (isDarkMode) {
                setTernaryDarkMode("light");
              } else {
                setTernaryDarkMode("dark");
              }
            }}
          >
            {isDarkMode ? <Moon /> : <Sun />}
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        className={cnMerge(
          "lg:hiddenbg-tgBackgroundLight text-tgTextLight",
          isDarkMode && "bg-tgBackgroundDark text-tgTextDark"
        )}
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-inherit p-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-1">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">TourGenie</span>
              <Image
                className="h-8 w-auto"
                src={Favicon}
                alt="tourgenie-logo"
              />
            </a>
            <div className="flex flex-1 justify-end">
              <a href="#" className="text-sm font-semibold leading-6">
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="mt-6 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </motion.div>
  );
}
