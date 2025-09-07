import Link from "next/link";
import AnimatedInitials from "@/components/animated-svg";
import "./page.css"

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
            <li className="front-page-list-item flex flex-col gap-2">
              <Link
                href="/vetra"
                className="font-semibold hover:bg-foreground/15 px-1 py-0.5 rounded w-fit -ml-1 transition-colors"
              >
                <h2>vetra</h2>
              </Link>
              <div>
                Interactive signage solution for museums and exhibitions.{" "}
                <span className="text-foreground/50">2025</span>
              </div>
            </li>
            <li className="front-page-list-item flex flex-col gap-2">
              <Link
                href="/mrcs"
                className="font-semibold hover:bg-foreground/15 px-1 py-0.5 rounded w-fit -ml-1 transition-colors"
              >
                <h2>mrcs</h2>
              </Link>
              <div>
                Model railway control system powering the entire{" "}
                <Link
                  href="https://www.kaeserberg.ch/en/"
                  className="underline decoration-foreground/50 hover:decoration-foreground transition-colors"
                >
                  Kaeserberg
                </Link>{" "}
                museum. <span className="text-foreground/50">2024</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="col-start-1 row-start-3 md:col-start-1 md:row-start-2 xl:col-start-2 xl:row-start-1">
          <h1 className="text-xl font-semibold md:text-2xl tracking-tight mb-8">
            Stuff
          </h1>
          <ul className="front-page-list list-inside [&>li:not(:first-child)]:pt-3 [&>li:not(:last-child)]:pb-3">
            <li className="front-page-list-item flex flex-col gap-2">
              <Link
                href="/animations"
                className="font-semibold hover:bg-foreground/15 px-1 py-0.5 rounded w-fit -ml-1 transition-colors"
              >
                <h2>animations</h2>
              </Link>
              <div>
                Collection of animations I made while learning more about web
                animations. <span className="text-foreground/50">2025</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-8 col-start-1 row-start-1 md:col-start-2 xl:col-start-3">
          <span className="text-xl font-semibold md:text-2xl tracking-tight">
            I live in Bern, Switzerland. Currently, I am building{" "}
            <Link
              href="https://vetra.ch"
              target="_blank"
              className="font-semibold text-[#f06a22] underline decoration-[#f06a22]/50 hover:decoration-[#f06a22] transition-colors"
            >
              vetra
            </Link>
            .
          </span>
        </div>
      </div>
    </div>
  );
}
