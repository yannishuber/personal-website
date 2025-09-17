import type { MDXComponents } from "mdx/types";
import { ImageProps } from "next/image";
import Link from "next/link";
import { ZoomableImage } from "./components/zoomable-image";

const components: MDXComponents = {
  a: (props) => (
    <Link
      {...props}
      className="underline decoration-foreground/50 hover:decoration-foreground transition-colors text-foreground"
    />
  ),
  img: (props) => {
    return (
      <ZoomableImage {...(props as ImageProps)} />
    );
  },
  h1: (props) => (
    <h1
      {...props}
      className="font-bold text-foreground text-xl md:text-2xl mt-8 mb-4 leading-tight tracking-tight"
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
