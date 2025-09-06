"use client";

import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect } from "react";

export default function AnimatedInitials({ stroke }: { stroke: string }) {
  const progress = useMotionValue(0);

  const path1Length = useTransform(progress, [0, 0.33], [0, 1]);
  const path2Length = useTransform(progress, [0.33, 0.66], [0, 1]);
  const path3Length = useTransform(progress, [0.66, 1], [0, 1]);

  const path2Opacity = useTransform(progress, (val) => (val >= 0.33 ? 1 : 0));
  const path3Opacity = useTransform(progress, (val) => (val >= 0.66 ? 1 : 0));

  useEffect(() => {
    const controls = animate(progress, 1, {
      duration: 2,
      ease: "easeInOut",
    });

    return controls.stop;
  }, [progress]);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="-ml-6 w-24 h-24"
    >
      <defs>
        <clipPath id={`clip1-${stroke.replace("#", "")}`}>
          <path d="M42.86,82.54c.39-1.15,1.24-2.54,1.69-10.3.36-6.17,1.06-11.87,1.09-13.08l.03-26.31c0-.55-.41-1.22-.9-1.49-4.44-2.45-4.07,8.38-4.85,12.67-1.18,6.55-1.9,11.08-5.74,11.86-2.11.34-2.9-.85-3.24-2.72-1.22-6.64,2.28-19.69,1.07-21.24-3.33-3.98-6.42,17.69-6.42,19.19,0,8.58,5.29,15.16,12.96,8.05,0,0,0,.02.02.07.01.04.02.11.04.19,0,.04.02.09.03.14.02.09.04.18.06.29.03.17.06.38.1.6.02.14.04.27.05.4s.02.26.04.4c.13,1.17-.35,6.82-.34,10.98.01,5.76-1.64,9.93-2.44,12.27-2.4,7.01,1.05,7.07,1.05,7.07,2.01,0,3.73-3.73,5.7-9.04" />
        </clipPath>
        <clipPath id={`clip2-${stroke.replace("#", "")}`}>
          <path d="M56.28,46.17c-.51,5.18-2.28,11.63-5.65,14.75-8.8,6.3-4.42,12.58-7.77,21.61-1.97,5.3-7.93,21.38-15.27,13.2-5.66-6.31-.63-18.69,3.98-24.49,3.84-4.84,8.71-4.95,6.98-12.08h7.09c9.41-10.38,5.29-25.02,7.01-37.98.13-.96.92-1.69,1.88-1.8l2.1-.24c.45-.05.9.17,1.1.57,1.92,4-1.39,22.49-1.45,26.45M30.94,91.85c2.3,1.68,4.67-5.96,5.17-7.35,1.41-3.9,2.59-8.07,2.44-12.27-6.37,4.37-10.79,11.92-7.61,19.61Z" />
        </clipPath>
        <clipPath id={`clip3-${stroke.replace("#", "")}`}>
          <path d="M45.64,59.16c9.41-10.38,5.29-25.02,7.01-37.97.13-.96.92-1.69,1.88-1.8l2.1-.24c.45-.05.9.17,1.1.57,1.92,4-1.39,22.49-1.45,26.45,6.21-7.73,17.25-9.23,18.55,2.7.37,3.36-.33,14.2-1.29,17.29-.42,1.35-1.22,1.74-2.56,1.87-7.01.67-1.89-13.83-2.37-20.17-.08-1.06-.98-1.91-2.04-1.86-8.68.39-7.91,21.49-13.03,22.03-5.17.55-2.82-3.53-2.91-7.12" />
        </clipPath>
      </defs>

      <motion.path
        fill="none"
        stroke={stroke}
        strokeMiterlimit={10}
        strokeWidth={8}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        clipPath={`url(#clip1-${stroke.replace("#", "")})`}
        d="M31.57,31c-1.03,6.23-2.75,14.22-3.23,18.57-.34,3.07-.86,4.95,1.12,7.99,1.68,2.58,5.39.93,8.59-4.37,1.37-2.26,2.31-3.85,3.23-8.19,2.26-10.63,2.09-20.23,2.09-20.23.24-5.53-.29,23.49-1.76,44.05-.55,7.75-.1,7.08-2.74,15.06"
        style={{ pathLength: path1Length }}
      />

      <motion.path
        fill="none"
        stroke={stroke}
        strokeMiterlimit={10}
        strokeWidth={12}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        clipPath={`url(#clip2-${stroke.replace("#", "")})`}
        d="M38.88,83.89c-1.24,3.79.44,12.97-6.13,11.97-2.01-.3-5.47-.18-5.64-6s1.26-9.26,2.57-11.9,4.44-8.78,11.71-13.03c5.42-3.16,7.05-4.08,9.61-8.05s4.5-15.7,4.23-16.22,1.54-12.17,1.1-15.34"
        style={{ pathLength: path2Length, opacity: path2Opacity }}
      />

      <motion.path
        fill="none"
        stroke={stroke}
        strokeMiterlimit={10}
        strokeWidth={8}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        clipPath={`url(#clip3-${stroke.replace("#", "")})`}
        d="M56.33,25.32c-.44-3.17-2.33-5.38-2.59-1.32s-2.98,35.78-3.11,36.92c-.93,8.15,1.2,7.11,1.2,7.11,0,0,.23,5.55,2.64-.09,1.47-3.44,3.3-17.94,3.3-17.94,0,0,4.47-7.2,8.67-6.87,3.59.28,5.76,3.66,5.47,6.97-.55,6.36-.89,17.69-.92,18.45"
        style={{ pathLength: path3Length, opacity: path3Opacity }}
      />
    </motion.svg>
  );
}
