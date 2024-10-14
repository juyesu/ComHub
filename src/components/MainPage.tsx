import Link from "next/link";

const MainPage = () => {
    return <>
      <div className="flex w-screen h-screen">
        <div className="flex flex-col justify-center items-center w-1/2 bg-[url('/images/titleimg_basicmode.jpg')] bg-center bg-cover">
          <div className="flex flex-col 2xl:pl-32 w-2/3">
            <p className="text-xl font-semibold text-gray-900">일반 사용자에게 적합한 맞춤형 부품 정보를 제공하는</p>
            <h2 className="mt-1 mb-6 font-extrabold text-4xl text-gray-900">AI 컴퓨터 사양 추천</h2>
            <p className="text-lg text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt debitis aspernatur nostrum eos magnam adipisci culpa saepe laudantium tempora, asperiores soluta porro dignissimos</p>
            <Link href='PcSpecsRecommendation'>
              <button type="button" className="mt-16 py-4 px-10 text-sm bg-gray-600 rounded-full font-bold text-white opacity-80">추천받으러 가기</button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-1/2 bg-[url('/images/titleimg_promode.png')] bg-center bg-cover" >
          <div className="flex flex-col 2xl:pr-32 items-end w-2/3">
            <p className="text-xl font-semibold text-gray-100">보다 전문적인 Ai추천 결과를 원할 땐</p>
            <h2 className="mt-1 mb-6 font-extrabold text-end text-4xl text-gray-100">Pro 사용자 모드</h2>
            <p className="text-end text-lg text-gray-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt debitis aspernatur nostrum eos magnam adipisci culpa saepe laudantium tempora, asperiores soluta porro dignissimos</p>
            <Link href='PcSpecsRecommendation'>
              <button type="button" className="mt-16 py-4 px-10 text-sm bg-gray-100 rounded-full font-bold text-gray-900 opacity-80">프로모드로 전환</button>
            </Link>
          </div>
        </div>
      </div>
    </>;
};

export default MainPage;