import type { ChildrenComponentsProps } from "@/types/type";
import Link from "next/link";
import Image from "next/image";

const RootLayout = ({ children }: ChildrenComponentsProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header>
        <div className="flex justify-between items-center py-8 md:px-32 2xl:px-96 min-[1800px]:px-[32rem] h-16 border">
          <Link href=".">
            <Image
              src="/ComhubLogo edit 2.png"
              alt="comhub logo"
              width={140}
              height={100}
            />
          </Link>
          <nav>
            <ul className="flex gap-8">
              <li>
                <Link href=".">Home</Link>
              </li>
              <li>Menu</li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/ComputerParts">ComputerParts</Link>
              </li>
              <li>
                <Link href="/surveyPage">Survey</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="flex justify-between items-center py-8 md:px-32 2xl:px-96 min-[1800px]:px-[32rem] h-16 border">
        {/* Left Section */}
        <p className="text-sm font-bold">
          © 2024 COMHUB - All Rights Reserved.
        </p>

        {/* Center Section */}
        <p className="text-sm font-bold">
          Contact us:{" "}
          <a
            href="mailto:comhubyuhan@gmail.com"
            className="underline hover:text-gray-400"
          >
            comhubyuhan@gmail.com
          </a>
        </p>

        {/* Right Section */}
        <p className="text-sm font-bold">
          Made by: 김호진, 김지혁, 정성문
        </p>
      </footer>
    </div>
  );
};

export default RootLayout;
