"use client";

import { ReactNode, useState } from "react";
import {
  AnimatePresence,
  motion,
  SpringOptions,
  Transition,
} from "motion/react";

const SPRING: Transition<SpringOptions> = {
  type: "spring",
  duration: 0.4,
  bounce: 0.2,
};

type ZoomableProps = {
  id: string;
  title?: string;
  // Called once for the inline and once for the zoomed slot; `isActive` tells whether that slot is currently the visible one
  children: (isZoomed: boolean, isActive: boolean) => ReactNode;
};

export const Zoomable = ({ id, title, children }: ZoomableProps) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleClick = () => {
    if (!isZoomed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    setIsZoomed(!isZoomed);
  };

  return (
    <>
      <AnimatePresence>
        {isZoomed && (
          <>
            <motion.span
              className="fixed inset-0 z-20 backdrop-blur-sm bg-black/75"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <span
              className="fixed inset-0 z-50 p-2 py-16 md:p-5 md:py-8 xl:p-12 flex w-full min-h-full overflow-y-scroll cursor-zoom-out"
              onClick={handleClick}
            >
              <motion.span
                key="zoomed-media"
                layoutId={id}
                className="w-full md:max-w-4xl xl:max-w-6xl flex flex-col gap-2 m-auto h-fit"
                transition={SPRING}
              >
                {children(true, isZoomed)}
                <motion.span
                  key="zoomed-title"
                  id={`${id}-title`}
                  layoutId={`${id}-title`}
                  className="text-sm text-semibold text-white/75 block"
                  transition={SPRING}
                >
                  {title}
                </motion.span>
              </motion.span>
            </span>
          </>
        )}
      </AnimatePresence>
      <span className="mt-8 mb-4 xl:mt-16 xl:mb-8 block">
        <motion.span
          layoutId={id}
          className="block xl:scale-[1.2]"
          transition={SPRING}
          onClick={handleClick}
        >
          {children(false, !isZoomed)}
        </motion.span>
        <motion.span
          layoutId={`${id}-title`}
          className="text-sm text-semibold text-foreground/75 mt-2 xl:mt-13 block"
          transition={SPRING}
        >
          {title}
        </motion.span>
      </span>
    </>
  );
};
