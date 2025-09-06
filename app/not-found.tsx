import Link from "next/link";
import AnimatedInitials from "./animated-svg";

export default function NotFound() {
  return (
    <div className="font-sans min-h-screen p-8 pt-32 flex flex-col gap-16 max-w-7xl mx-auto">
      <div className="flex flex-col gap-8">
        <Link href="/">
          <div className="dark:hidden">
            <AnimatedInitials stroke="#252525" />
          </div>
          <div className="hidden dark:block">
            <AnimatedInitials stroke="#ededed" />
          </div>
        </Link>
        <h3 className="font-semibold text-2xl md:text-3xl tracking-tight">
          Sorry, this page could not be found.
        </h3>
      </div>
    </div>
  );
}
