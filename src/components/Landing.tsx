"use client";

import { isMobile, isTablet } from "react-device-detect";
import { useTernaryDarkMode } from "usehooks-ts";
import { SpaceGrotesk } from "~/lib/fonts";
import { cnJoin, cnMerge } from "~/lib/utils";

import SimpleHref from "./ui/SimpleHref";

export default function Landing() {
  const { isDarkMode } = useTernaryDarkMode();
  return (
    <div
      className={cnJoin(
        "fixed inset-0 min-h-[100dvh] min-w-full overflow-hidden",
        isDarkMode ? "text-tgTextDark" : "text-tgTextLight"
      )}
    >
      <div
        className={cnJoin(
          "relative top-[20%] mx-auto",
          isTablet ? "max-w-4xl" : !isMobile ? "max-w-6xl" : ""
        )}
      >
        <div className="max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <h2
            className={cnJoin(
              "relative text-2xl font-bold tracking-tight sm:text-4xl",
              SpaceGrotesk.className
            )}
          >
            Rediscover the Magic of Travel.
            <br />
            Plan with TourGenie today.
          </h2>
          <div className="mt-10 flex items-center gap-x-6">
            <SimpleHref href="plan">Try Now</SimpleHref>
            <a
              href="#"
              className={cnMerge(
                "text-sm font-semibold leading-6 text-tgTextLight transition-colors duration-500 hover:text-tgPrimary",
                isDarkMode && "text-tgTextDark"
              )}
            >
              Learn More <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
