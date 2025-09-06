import Image from "next/image";
import Link from "next/link";
import icon from "./icon.svg";
import iconWhite from "./icon-white.svg";

export default function NotFound() {
  return (
    <div className="font-sans min-h-screen p-8 pt-32 flex flex-col gap-16 max-w-7xl mx-auto">
      <div className="flex flex-col gap-8">
        <Link href="/">
          <Image
            src={icon}
            alt="Yannis Huber's initials"
            className="-ml-6 w-24 h-24 dark:hidden"
          />
          <Image
            src={iconWhite}
            alt="Yannis Huber's initials"
            className="-ml-6 w-24 h-24 hidden dark:block"
          />
        </Link>
        <h3 className="font-semibold text-2xl md:text-3xl tracking-tight">
          Sorry, this page could not be found.
        </h3>
      </div>
    </div>
  );
}
