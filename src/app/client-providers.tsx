"use client";

import { ClerkProvider } from "@clerk/nextjs/app-beta/client";
import { AnimatePresence, motion } from "framer-motion";
import { MapProvider } from "react-map-gl";
import { useTernaryDarkMode } from "usehooks-ts";
import { env } from "~/env.mjs";
import { api } from "~/lib/api/client";
import { cnMerge } from "~/lib/utils";

export function ClientProviders({ children }: PropsWithChildren) {
  const { isDarkMode } = useTernaryDarkMode();
  return (
    <ClerkProvider publishableKey={env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <api.Provider>
        <div
          className={cnMerge(
            "absolute h-full w-full z-[-1] bg-tgBackgroundLight text-tgTextLight transition-colors",
            isDarkMode && "bg-tgBackgroundDark text-tgTextDark"
          )}
        >
          {/* <SessionProvider> */}
          <MapProvider>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div>{children}</motion.div>
            </AnimatePresence>
          </MapProvider>
          {/* </SessionProvider> */}
        </div>
      </api.Provider>
    </ClerkProvider>
  );
}
