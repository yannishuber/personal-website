"use client";

import Image, { ImageProps } from "next/image";
import { Zoomable } from "./zoomable";

export const ZoomableImage = (props: ImageProps) => {
  const imageId =
    typeof props.src === "string"
      ? props.src
      : (props.src as Partial<{ src: string }>).src;

  return (
    <Zoomable id={imageId!} title={props.title}>
      {(isZoomed) =>
        isZoomed ? (
          <Image
            className="rounded-md shadow-md !my-0 cursor-zoom-out h-auto w-full"
            {...props}
          />
        ) : (
          <Image
            className="rounded-md shadow-md !my-0 mx-auto w-full h-auto cursor-zoom-in"
            {...props}
          />
        )
      }
    </Zoomable>
  );
};
