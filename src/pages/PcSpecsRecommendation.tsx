import React, { useState } from "react"
import Link from "next/link"

const minPrice = 400000
const maxPrice = 2000000

const PcSpecsRecommendation = () => {
  const [price, setPrice] = useState(1200000)

  const formatPrice = (value: number) => {
    return (value / 10000).toLocaleString() + '만원'
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
  };

  const priceRatio = ((price - minPrice) / (maxPrice - minPrice)) * 100

  return (
    <div className="h-full p-8 lg:mx-[30rem] bg-gray-100">
      <h1 className="mt-8 font-bold text-3xl text-gray-600">AI 컴퓨터 사양추천</h1>
      <hr className="my-6 border-solid border border-gray-600" />
      <ol className="mt-16 mb-24 mx-4">
        <li className="my-12">
          <p className="my-4 text-lg">1. 사용자의 성별은 무엇인가요?</p>
          <input type="checkbox" id='male' className="ml-2" />
          <label htmlFor="male" className="mx-2">남성</label>
          <input type="checkbox" id='female' className="ml-2" />
          <label htmlFor="female" className="mx-2">여성</label>
        </li>

        <li className="my-12">
          <p className="my-4 text-lg">2. PC의 주된 사용 용도는 무엇인가요?</p>
          <input type="checkbox" id='game' className="ml-2" />
          <label htmlFor="game" className="mx-2">게임</label>
          <input type="checkbox" id='development' className="ml-2" />
          <label htmlFor="development" className="mx-2">개발</label>
          <input type="checkbox" id='design' className="ml-2" />
          <label htmlFor="design" className="mx-2">디자인</label>
          <input type="checkbox" id='cad' className="ml-2" />
          <label htmlFor="cad" className="mx-2">CAD</label>
          <input type="checkbox" id='office' className="ml-2" />
          <label htmlFor="office" className="mx-2">사무</label>
          <input type="checkbox" id='etc' className="ml-2" />
          <label htmlFor="etc" className="mx-2">기타</label>
        </li>

        <li className="my-12">
          <p className="my-4 text-lg">3. 필요한 저장공간은 어느정도 인가요?</p>
          <input type="checkbox" id='down_to_256gb' className="ml-2" />
          <label htmlFor="down_to_256gb" className="mx-2">256GB 이하</label>
          <input type="checkbox" id='512gb' className="ml-2" />
          <label htmlFor="512gb" className="mx-2">512GB</label>
          <input type="checkbox" id='1tb' className="ml-2" />
          <label htmlFor="1tb" className="mx-2">1TB</label>
          <input type="checkbox" id='2tb' className="ml-2" />
          <label htmlFor="2tb" className="mx-2">2TB</label>
          <input type="checkbox" id='up_to_3tb' className="ml-2" />
          <label htmlFor="up_to_3tb" className="mx-2">3TB 이상</label>
        </li>

        <li className="my-12">
          <p className="mt-4 text-lg">4. 희망하는 가격대는 얼마인가요?</p>
          <p className="mb-4 ml-1 text-sm text-rose-500">* 희망 사양 수준과 가격대가 일치하지 않을 경우 추천 결과에 오차가 발생할 수 있습니다.</p>
          <div className="flex justify-between mb-2 w-1/2">
            <span className="text-gray-600">40만원</span>
            <span id="priceOutput" className="text-gray-800 font-semibold">120만원</span>
            <span className="text-gray-600">200만원</span>
          </div>

          <input
            type="range"
            min="400000"
            max="2000000"
            value={price}
            onChange={handlePriceChange}
            className="range-slider"
            style={{
              '--value': `${priceRatio}%`
            } as React.CSSProperties}
          />
        </li>

        <li className="my-12">
          <p className="mt-4 text-lg">5. 희망하는 케이스 색상이 있나요?</p>
          <p className="mb-4 ml-1 text-sm text-rose-500">* 블랙또는 화이트 이외의 색상을 선택시 검색 결과가 줄어들 수 있습니다.</p>
          
          <input type="checkbox" id='case_black' className="ml-2" />
          <label htmlFor="case_black" className="mx-2">블랙</label>
          <input type="checkbox" id='case_white' className="ml-2" />
          <label htmlFor="case_white" className="mx-2">화이트</label>
          <input type="checkbox" id='case_another' className="ml-2" />
          <label htmlFor="case_another" className="mx-2">이외의 색상</label>
        </li>
      </ol>

      <div className="flex flex-row">
        <Link href='specsRecommendationResults'>
          <button className="mx-4 flex flex-col items-center font-bold bg-sky-400 hover:bg-sky-600 py-3 px-8 rounded text-white text-lg">
            <span className="font-normal text-sm">chat GPT-4 AI기반의</span>
              추천결과 확인하기
          </button>
        </Link>
        <button className="mx-4 flex flex-col justify-center items-center font-bold bg-gray-300 hover:cursor-no-drop py-3 px-8 rounded text-white text-lg">
          Pro모드로 업그레이드
        </button>
      </div>
      
    </div>
  );
};

export default PcSpecsRecommendation;
