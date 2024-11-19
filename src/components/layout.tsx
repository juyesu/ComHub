import type { ChildrenComponentsProps } from "@/types/type";
import Link from "next/link";
import Image from "next/image";

const RootLayout = ({ children }: ChildrenComponentsProps) => {
  return (
    <>
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
                <Link href="/computerParts">ComputerParts</Link>
              </li>
              <li>
                <Link href="/surveyPage">surveyPage</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default RootLayout;
