import type { ChildrenComponentsProps } from "@/types/type";
import Link from "next/link";

const RootLayout = ({ children }: ChildrenComponentsProps) => {
  return (
    <>
      <header>
        <div className="flex justify-between items-center py-8 px-8 2xl:px-[32rem] h-16 border">
          <h1>
            <Link href=".">logo</Link>
          </h1>
          <nav>
            <ul className="flex gap-8">
              <li>Home</li>
              <li>Menu</li>
              <li>
                <Link href="/about">About</Link>
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
