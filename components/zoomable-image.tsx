"use client";

import Image, { ImageProps } from "next/image";
import { useState, useEffect, useRef } from "react";

export const ZoomableImage = (props: ImageProps) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [scale, setScale] = useState(1);
  const imageRef = useRef<HTMLImageElement>(null);

  const calculateScale = () => {
    if (!imageRef.current) return 1;

    const img = imageRef.current;
    const imgRect = img.getBoundingClientRect();

    // Available space (viewport minus 20px padding and space for caption)
    const availableWidth = window.innerWidth - 20;
    const availableHeight = window.innerHeight - 20 - 60; // 60px for caption space

    // Calculate scale to fill either width or height (whichever is smaller)
    const scaleX = availableWidth / imgRect.width;
    const scaleY = availableHeight / imgRect.height;

    return Math.min(scaleX, scaleY);
  };

  const handleImageClick = () => {
    
    if (!isZoomed) {
      const newScale = calculateScale();
      setScale(newScale);
    } else {
      if (window.innerWidth >= 1280) {
        setScale(1.2);
      } else {
        setScale(1.2);
      }
    }

    setIsZoomed(!isZoomed);
    
  };

  useEffect(() => {
    const handleResize = () => {
      if (isZoomed) {
        const newScale = calculateScale();
        setScale(newScale);
      } else if (window.innerWidth >= 1280) {
        setScale(1.2);
      } else {
        setScale(1);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isZoomed]);

  useEffect(() => {
    if (window.innerWidth >= 1280) {
      setScale(1.2);
    }
  }, []);

  return (
    <>
      {isZoomed && (
        <span
          className="fixed inset-0 z-50 flex flex-col justify-center items-center cursor-pointer"
          onClick={handleImageClick}
        >
          {props.title && (
            <span className="absolute bottom-0 left-0 right-0 text-center py-4">
              <span className="text-sm font-semibold text-white">
                {props.title}
              </span>
            </span>
          )}
        </span>
      )}
      <Image
        ref={imageRef}
        sizes="100vw"
        width={1280}
        height={853}
        className="rounded-md shadow-md !my-0 mx-auto w-full h-auto cursor-pointer transition-transform duration-300 ease-in-out"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "center",
          zIndex: isZoomed ? 100 : "auto",
        }}
        onClick={handleImageClick}
        {...props}
      />
      <span className="text-sm text-semibold text-foreground/75 mt-2 xl:mt-13 block">
        {props.title}
      </span>
    </>
  );
};
