import type { ChildrenComponentsProps } from "@/types/type";
import Link from "next/link";
import Image from "next/image";

const RootLayout = ({ children }: ChildrenComponentsProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="flex justify-between items-center py-8 md:px-32 2xl:px-96 min-[1800px]:px-[32rem] h-16">
          <Link href="/">
            <Image
              src="/ComhubLogo edit 2.png"
              alt="comhub logo"
              width={140}
              height={100}
            />
          </Link>
          <nav>
            <ul className="flex gap-8 text-sm font-medium text-gray-700">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/ComputerParts">ComputerParts</Link>
              </li>
              
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

 {/* Footer */}
<footer className="border-t">
  <div className="flex flex-col items-center py-8 text-sm space-y-4">
    {/* 첫 번째 줄 */}
    <p className="text-gray-500">
      © 2024 COMHUB - All Rights Reserved.
    </p>

    {/* 두 번째 줄 */}
    <p className="text-gray-500">
      Contact us:{" "}
      <a
        href="mailto:comhubyuhan@gmail.com"
        className="underline hover:text-gray-700"
      >
        comhubyuhan@gmail.com
      </a>
    </p>

    {/* 세 번째 줄 */}
    <p className="font-bold text-black">
      Made by: 김호진, 김지혁, 정성문
    </p>
  </div>
</footer>

    </div>
  );
};

export default RootLayout;
