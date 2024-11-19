import Link from "next/link";

const MainPage = () => {
    return <>
      <div className="flex w-screen h-screen">
        <div className="w-1/2 relative overflow-hidden">
          <div className="md:px-8 lg:px-16 2xl:px-28 min-[2000px]:px-60 flex flex-col justify-center items-center absolute inset-0 bg-[url('/images/titleimg_basicmode.jpg')] bg-center bg-cover hover:scale-105 overflow-hidden transition-transform duration-500 ease-out">
            <div className="py-12 px-4 bg-white bg-opacity-30 backdrop-blur-md rounded-xl">
              <div className="flex justify-center flex-col md:pl-4 2xl:pl-12">
              <p className="md:text-lg xl:text-xl font-semibold text-gray-900">일반 사용자에게 적합한 맞춤형 부품 정보를 제공하는</p>
              <h2 className="mt-1 mb-6 font-extrabold text-4xl text-gray-900">AI 컴퓨터 사양 추천</h2>
              <p className="md:text-base xl:text-lg text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt debitis aspernatur nostrum eos magnam adipisci culpa saepe laudantium tempora, asperiores soluta porro dignissimos</p>
              <Link href='PcSpecsRecommendation'>
                <button type="button" className="mt-16 py-4 px-10 text-sm bg-gray-600 hover:bg-gray-900 hover:shadow-md hover:shadow-gray-600 rounded-full font-bold text-white opacity-80">추천받으러 가기</button>
              </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 relative overflow-hidden">
          <div className="md:px-8 lg:px-16 2xl:px-28 min-[2000px]:px-60 flex flex-col justify-center items-center absolute inset-0 bg-[url('/images/titleimg_promode.png')] bg-center bg-cover hover:scale-105 overflow-hidden transition-transform duration-500 ease-out" >
            <div className="py-12 px-4 bg-violet-300 bg-opacity-30 backdrop-blur-md rounded-xl">
              <div className="flex flex-col md:pr-4 2xl:pr-12 items-end">
                <p className="md:text-lg xl:text-xl font-semibold text-gray-900">보다 전문적인 Ai추천 결과를 원할 땐</p>
                <h2 className="mt-1 mb-6 font-extrabold text-end text-4xl text-gray-900">Pro 사용자 모드</h2>
                <p className="text-end md:text-base xl:text-lg text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt debitis aspernatur nostrum eos magnam adipisci culpa saepe laudantium tempora, asperiores soluta porro dignissimos</p>
                <Link href='PcSpecsRecommendationProMode'>
                  <button type="button" className="mt-16 py-4 px-10 text-sm bg-gray-900 hover:bg-gray-900 hover:shadow-md hover:shadow-gray-600 rounded-full font-bold text-white opacity-80">프로모드로 전환</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>;
};

export default MainPage;