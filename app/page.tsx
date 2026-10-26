import Link from "next/link";
import AnimatedInitials from "@/components/animated-svg";
import "./page.css";

export default async function Home() {
  return (
    <div className="font-sans min-h-screen p-8 pt-32 pb-16 flex flex-col gap-16 max-w-7xl mx-auto ">
      <div className="flex flex-col gap-8">
        <div className="dark:hidden">
          <AnimatedInitials stroke="#252525" className="-ml-6 w-24 h-24" />
        </div>
        <div className="hidden dark:block">
          <AnimatedInitials stroke="#ededed" className="-ml-6 w-24 h-24" />
        </div>
        <h3 className="font-semibold text-2xl md:text-3xl tracking-tight">
          Hi, I&apos;m Yannis.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 font-medium gap-16">
        <div className="">
          <h1 className="text-xl font-semibold md:text-2xl tracking-tight mb-8">
            Projects
          </h1>
          <ul className="front-page-list list-inside [&>li:not(:first-child)]:pt-3 [&>li:not(:last-child)]:pb-3">
            <li className="">
              <Link
                href="https://kaptive.ch"
                className="front-page-list-item flex flex-col gap-2"
              >
                <div className="font-semibold transition-colors underline decoration-1 decoration-foreground/50 hover:decoration-foreground">
                  <h2>Kaptive</h2>
                </div>
                <div>
                  Modern digital signage solution.{" "}
                  <span className="text-foreground/50">2025</span>
                </div>
              </Link>
            </li>
            <li className="">
              <Link
                href="/mrcs"
                className="front-page-list-item flex flex-col gap-2"
              >
                <div className="font-semibold transition-colors underline decoration-1 decoration-foreground/50 hover:decoration-foreground">
                  <h2>MRCS</h2>
                </div>
                <div>
                  Model railway control system powering the entire Kaeserberg
                  museum. <span className="text-foreground/50">2024</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        {/* <div className="col-start-1 row-start-3 md:col-start-1 md:row-start-2 xl:col-start-2 xl:row-start-1">
          <h1 className="text-xl font-semibold md:text-2xl tracking-tight mb-8">
            Stuff
          </h1>
          <ul className="front-page-list list-inside [&>li:not(:first-child)]:pt-3 [&>li:not(:last-child)]:pb-3">
            <li className="front-page-list-item flex flex-col gap-2">
              <Link
                href="/animations"
                className="font-semibold transition-colors underline decoration-1 decoration-foreground/50 hover:decoration-foreground"
              >
                <h2>animations</h2>
              </Link>
              <div>
                Collection of animations I made while learning more about web
                animations. <span className="text-foreground/50">2025</span>
              </div>
            </li>
          </ul>
        </div> */}

        <div className="flex flex-col gap-8 col-start-1 row-start-1 md:col-start-2 xl:col-start-3">
          <span className="text-xl font-semibold md:text-2xl tracking-tight">
            I live in Bern, Switzerland. Currently, I am building{" "}
            <Link
              href="https://kaptive.ch"
              target="_blank"
              className="font-semibold text-[#f06a22] underline decoration-[#f06a22]/50 hover:decoration-[#f06a22] transition-colors"
            >
              Kaptive
            </Link>
            .
          </span>
        </div>
      </div>
    </div>
  );
}
