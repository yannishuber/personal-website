"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Zoomable } from "./zoomable";

type VideoProps = {
  src: string;
  title?: string;
};

export const Video = ({ src, title }: VideoProps) => {
  const [video, setVideo] = useState<HTMLVideoElement | null>(null);
  const [aspectRatio, setAspectRatio] = useState<number>();

  // A single video element is moved between the inline and zoomed slots so it keeps playing instead of reloading
  useEffect(() => {
    const element = document.createElement("video");
    element.src = src;
    element.muted = true;
    element.loop = true;
    element.autoplay = true;
    element.playsInline = true;
    element.addEventListener("loadedmetadata", () => {
      setAspectRatio(element.videoWidth / element.videoHeight);
    });
    setVideo(element);

    return () => {
      element.pause();
      element.removeAttribute("src");
      element.load();
    };
  }, [src]);

  return (
    <Zoomable id={src} title={title}>
      {(isZoomed, isActive) => (
        <VideoSlot
          video={video}
          isActive={isActive}
          aspectRatio={aspectRatio}
          className={
            isZoomed
              ? "rounded-md shadow-md !my-0 cursor-zoom-out h-auto w-full"
              : "rounded-md shadow-md !my-0 mx-auto w-full h-auto cursor-zoom-in"
          }
        />
      )}
    </Zoomable>
  );
};

type VideoSlotProps = {
  video: HTMLVideoElement | null;
  isActive: boolean;
  aspectRatio?: number;
  className: string;
};

const VideoSlot = ({
  video,
  isActive,
  aspectRatio,
  className,
}: VideoSlotProps) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  // Layout effect so the video is in place before the zoom animation measures the layout
  useLayoutEffect(() => {
    if (!video || !isActive || !containerRef.current) return;

    video.className = className;
    containerRef.current.appendChild(video);
    video.play().catch(() => {});
  }, [video, isActive, className]);

  // Keeps its size while the video is shown in the other slot
  return <span ref={containerRef} className="block" style={{ aspectRatio }} />;
};
