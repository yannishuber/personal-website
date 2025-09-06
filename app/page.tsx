import Image from "next/image";
import icon from "./icon.svg";
import iconWhite from "./icon-white.svg";

export default async function Home() {
  return (
    <div className="font-sans min-h-screen p-8 pt-32 flex flex-col gap-16 max-w-7xl mx-auto">
      <div className="flex flex-col gap-8">
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
        <h3 className="font-semibold text-2xl md:text-3xl tracking-tight">
          Hi, I&apos;m Yannis.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 font-medium gap-16">
        <div>
          <h1 className="text-xl font-semibold md:text-2xl tracking-tight mb-8">
            Projects
          </h1>
          <ul className="list-inside [&>li:not(:first-child)]:mt-6">
            <li className="flex flex-col gap-2">
              <a
                href="https://vetra.ch"
                target="_blank"
                className="font-semibold hover:bg-zinc-300/25 px-1 py-0.5 rounded w-fit -ml-1"
              >
                <h2>vetra</h2>
              </a>
              <div>
                Interactive signage solution for museums and exhibitions.{" "}
                <span className="text-foreground/50">2025</span>
              </div>
            </li>
            <li className="flex flex-col gap-2">
              <h2 className="font-semibold hover:bg-zinc-300/25 px-1 py-0.5 rounded w-fit -ml-1">
                mrcs
              </h2>
              <div>
                Model railway control system powering the entire{" "}
                <a
                  href="https://www.kaeserberg.ch/en/"
                  className="hover:underline"
                >
                  Kaeserberg
                </a>{" "}
                museum. <span className="text-foreground/50">2024</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-8 col-start-1 row-start-1 md:col-start-2 xl:col-start-3">
          <span className="text-xl font-semibold md:text-2xl tracking-tight">
            I live in Bern, Switzerland. Currently, I am building{" "}
            <a
              href="https://vetra.ch"
              target="_blank"
              className="font-semibold text-[#f06a22] hover:underline"
            >
              vetra
            </a>
            .
          </span>
        </div>
      </div>
    </div>
  );
}
