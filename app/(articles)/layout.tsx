import { Header } from "./header";
import Link from "next/link";
import { PiArrowBendUpLeftThin } from "react-icons/pi";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="font-sans min-h-screen p-8 pt-4 pb-16 grid grid-cols-1 xl:grid-cols-[10em_auto_10em] grid-rows-[auto_auto_auto_auto_1fr] xl:grid-rows-[auto_auto_auto_1fr] md:max-w-3xl xl:max-w-5xl mx-auto ">
      <Header />
      <div className="z-20 col-start-1 row-start-2 h-full flex xl:sticky xl:top-8">
      <Link href="/" className="self-center ">
        <div className="flex items-center gap-2 text-foreground/50 hover:text-foreground transition-colors mb-6 xl:mb-0 cursor-pointer w-fit">
          <PiArrowBendUpLeftThin />
          <span>Back</span>
        </div>
      </Link>
      </div>
      {children}
    </div>
  );
}
