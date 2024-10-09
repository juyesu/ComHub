import Link from "next/link";

const MainPage = () => {
    return <>
      <div className="flex items-center h-[32rem] px-8 2xl:px-[30rem] py-16 bg-[url('/images/title.jpg')]">
        <div className="w-1/2">
          <h1 className="mb-4 font-semibold text-4xl text-white">AI 컴퓨터 사양 추천</h1>
          <p className="text-white text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt debitis aspernatur nostrum eos magnam adipisci culpa saepe laudantium tempora, asperiores soluta porro dignissimos</p>
          <Link href='PcSpecsRecommendation'>
            <button type="button" className="mt-12 py-4 px-8 text-sm bg-slate-200 rounded-full opacity-80">추천받으러 가기</button>
          </Link>
          <div></div>
        </div>
      </div>
    </>;
};

export default MainPage;