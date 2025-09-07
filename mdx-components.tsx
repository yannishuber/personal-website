import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Link from "next/link";

const components: MDXComponents = {
  a: (props) => (
    <Link
      {...props}
      className="underline decoration-foreground/50 hover:decoration-foreground transition-colors text-foreground"
    />
  ),
  img: (props) => {
    return (
      <span className="mt-8 mb-4 xl:mt-16 xl:mb-8 block">
        <Image
          sizes="100vw"
          width={1280}
          height={853}
          className="rounded-md shadow-md !my-0 mx-auto w-full h-auto xl:scale-[1.2]"
          {...(props as ImageProps)}
        />
        <span className="text-sm text-semibold text-foreground/75 mt-2 xl:mt-13 block">
          {props.title}
        </span>
      </span>
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
