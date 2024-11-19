import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";

export type SpecsType = {
  gender: string
  purpose: string
  storage: string
  cost: number
}

const PcSpecsRecommendation = () => {
  const router = useRouter()
  const methods = useForm<SpecsType>();

  const onSubmit: SubmitHandler<SpecsType> = (data) => {
    router.push({
      pathname: '/SpecsRecommendationResults',
      query: data
    });  
  };
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <div className="h-full p-8 md:px-28 2xl:px-96 min-[1800px]:px-[32rem] bg-gray-100">
        <h1 className="mt-8 font-bold text-3xl text-gray-600">
          AI 컴퓨터 사양추천
        </h1>
        <hr className="my-6 border-solid border border-gray-600" />
        <ol className="mt-16 mb-24 mx-4">
          <li className="my-12">
            <p className="my-4 text-lg">1. PC의 주된 사용 용도는 무엇인가요?</p>
            <input
              type="checkbox"
              id="game"
              className="ml-2"
              value="game"
              {...methods.register("purpose")}
            />
            <label htmlFor="game" className="mx-2">
              게임
            </label>
            <input
              type="checkbox"
              id="development"
              className="ml-2"
              value="development"
              {...methods.register("purpose")}
            />
            <label htmlFor="development" className="mx-2">
              개발
            </label>
            <input
              type="checkbox"
              id="design"
              className="ml-2"
              value="design"
              {...methods.register("purpose")}
            />
            <label htmlFor="design" className="mx-2">
              디자인
            </label>
            <input
              type="checkbox"
              id="cad"
              className="ml-2"
              value="cad"
              {...methods.register("purpose")}
            />
            <label htmlFor="cad" className="mx-2">
              CAD
            </label>
            <input type="checkbox" id="office" className="ml-2" />
            <label htmlFor="office" className="mx-2">
              사무
            </label>
            <input
              type="checkbox"
              id="etc"
              className="ml-2"
              value="etc"
              {...methods.register("purpose")}
            />
            <label htmlFor="etc" className="mx-2">
              기타
            </label>
          </li>

          <li className="my-12">
            <p className="my-4 text-lg">
              2. 필요한 저장공간은 어느정도 인가요?
            </p>
            <input
              type="checkbox"
              id="256gb_or_less"
              className="ml-2"
              value="256gb_or_less"
              {...methods.register("storage")}
            />
            <label htmlFor="down_to_256gb" className="mx-2">
              256GB 이하
            </label>
            <input
              type="checkbox"
              id="512gb"
              className="ml-2"
              value="512gb"
              {...methods.register("storage")}
            />
            <label htmlFor="512gb" className="mx-2">
              512GB
            </label>
            <input
              type="checkbox"
              id="1tb"
              className="ml-2"
              value="1tb"
              {...methods.register("storage")}
            />
            <label htmlFor="1tb" className="mx-2">
              1TB
            </label>
            <input
              type="checkbox"
              id="2tb"
              className="ml-2"
              value="2tb"
              {...methods.register("storage")}
            />
            <label htmlFor="2tb" className="mx-2">
              2TB
            </label>
            <input
              type="checkbox"
              id="3tb_or_more"
              className="ml-2"
              value="3tb_or_more"
              {...methods.register("storage")}
            />
            <label htmlFor="up_to_3tb" className="mx-2">
              3TB 이상
            </label>
          </li>

          <li className="my-12">
            <p className="mt-4 text-lg">3. 희망하는 가격대는 얼마인가요?</p>
            <p className="mb-4 ml-1 text-sm text-rose-500">
              * 희망 사양 수준과 가격대가 일치하지 않을 경우 추천 결과에 오차가
              발생할 수 있습니다.
            </p>
            <div className="flex items-center">
              <input type="text" className="p-1 w-16 text-center border" {...methods.register('cost')} />
              <p className="ml-2">만원</p>
            </div>
          </li>

          <li className="my-12">
            <p className="mt-4 text-lg">4. 희망하는 케이스 색상이 있나요?</p>
            <p className="mb-4 ml-1 text-sm text-rose-500">
              * 블랙또는 화이트 이외의 색상을 선택시 검색 결과가 줄어들 수
              있습니다.
            </p>

            <input type="checkbox" id="case_black" className="ml-2" />
            <label htmlFor="case_black" className="mx-2">
              블랙
            </label>
            <input type="checkbox" id="case_white" className="ml-2" />
            <label htmlFor="case_white" className="mx-2">
              화이트
            </label>
            <input type="checkbox" id="case_another" className="ml-2" />
            <label htmlFor="case_another" className="mx-2">
              이외의 색상
            </label>
          </li>
        </ol>

        <div className="flex flex-row">
          {/* <Link href="specsRecommendationResults"> */}
            <button type="submit" className="mx-4 flex flex-col items-center font-bold bg-sky-400 hover:bg-sky-600 py-3 px-8 rounded text-white text-lg">
              <span className="font-normal text-sm">chat GPT-4 AI기반의</span>
              추천결과 확인하기
            </button>
          {/* </Link> */}
          <button className="mx-4 flex flex-col justify-center items-center font-bold bg-gray-300 hover:cursor-no-drop py-3 px-8 rounded text-white text-lg">
            Pro모드로 업그레이드
          </button>
        </div>
      </div>
    </form>
  );
};

export default PcSpecsRecommendation;
