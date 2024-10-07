import type { ChildrenComponentsProps } from "@/types/type";
import Link from 'next/link'

const RootLayout = ({ children }: ChildrenComponentsProps) => {
  return <>
    <header>
      <div className="flex justify-between items-center py-8 px-8 lg:px-96 h-16 border">
        <h1>로고</h1>
        <nav>
          <ul className="flex gap-8">
            <li>Home</li>
            <li><Link href='/Menu'>Menu</Link></li>
            <li>About</li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      {children}
    </main>
  </>;
};

export default RootLayout;
