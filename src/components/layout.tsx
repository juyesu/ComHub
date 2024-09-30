import type { ChildrenComponentsProps } from "@/types/type";

const RootLayout = ({ children }: ChildrenComponentsProps) => {
  return <>
    <header>
      <div className="flex justify-between items-center p-8 h-16 border">
        <h1>로고</h1>
        <nav>
          <ul className="flex gap-8">
            <li>Home</li>
            <li>Menu</li>
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
