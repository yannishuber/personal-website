import Link from "next/link";
import AnimatedInitials from "@/components/animated-svg";
import "./header.css"

export const Header = () => {
  return (
    <header className="z-20 w-full h-16 mb-16 col-start-1 xl:col-start-2">
      <Link href="/" className="dark:hidden">
        <AnimatedInitials stroke="#252525" className="-ml-4 w-16 h-16" />
      </Link>
      <Link href="/" className="hidden dark:block">
        <AnimatedInitials stroke="#ededed" className="-ml-4 w-16 h-16" />
      </Link>
    </header>
  );
};
