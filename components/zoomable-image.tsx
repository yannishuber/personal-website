"use client";

import Image, { ImageProps } from "next/image";
import { useState, useRef } from "react";
import {
  AnimatePresence,
  motion,
  SpringOptions,
  Transition,
} from "motion/react";

export const ZoomableImage = (props: ImageProps) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleImageClick = () => {
    if (!isZoomed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    setIsZoomed(!isZoomed);
  };

  const SPRING: Transition<SpringOptions> = {
    type: "spring",
    duration: 0.4,
    bounce: 0.2,
  };

  const imageId =
    typeof props.src === "string"
      ? props.src
      : (props.src as Partial<{ src: string }>).src;

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
              className="fixed inset-0 z-50 p-2 pt-16 md:p-5 md:pt-8 xl:p-12 xl:pt-12 flex w-full min-h-full overflow-y-scroll cursor-zoom-out"
              onClick={handleImageClick}
            >
              <motion.span
                key="zoomed-image"
                layoutId={imageId}
                className="w-full md:max-w-4xl xl:max-w-6xl flex flex-col gap-2 mx-auto h-fit"
                transition={SPRING}
              >
                <Image
                  className="rounded-md shadow-md !my-0 cursor-zoom-out h-auto w-full"
                  {...(props as ImageProps)}
                />
                <motion.span
                  key="zoomed-title"
                  id={`${imageId}-title`}
                  layoutId={`${imageId}-title`}
                  className="text-sm text-semibold text-white/75 block"
                  transition={SPRING}
                >
                  {props.title}
                </motion.span>
              </motion.span>
            </span>
          </>
        )}
      </AnimatePresence>
      <span className="mt-8 mb-4 xl:mt-16 xl:mb-8 block">
        <motion.span
          layoutId={imageId}
          className="block xl:scale-[1.2]"
          transition={SPRING}
        >
          <Image
            className="rounded-md shadow-md !my-0 mx-auto w-full h-auto cursor-zoom-in"
            {...props}
            ref={imageRef}
            onClick={handleImageClick}
          />
        </motion.span>
        <motion.span
          layoutId={`${imageId}-title`}
          className="text-sm text-semibold text-foreground/75 mt-2 xl:mt-13 block"
          transition={SPRING}
        >
          {props.title}
        </motion.span>
      </span>
    </>
  );
};
