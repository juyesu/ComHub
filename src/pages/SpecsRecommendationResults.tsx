import { useState, useEffect } from "react"
import { useRouter } from "next/router"

type SpecsClassType = {
  유형: string
  제품명: string
  제조사: string
  가격: number
}

const SpecsRecommendationResults = () => {
  const router = useRouter()
  const { purpose, storage, cost } = router.query
  const [responseData, setResponseData] = useState()
  const [loading, setLoading] = useState(false)
  const [viewTable, setViewTable] = useState(false)

  const fetchChatGPTResponse = async () => {
    setLoading(true)
    try {
      const apiKey = ""

      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-4",
            messages: [
              {
                role: "user",
                content: `다음 조건에 맞는 컴퓨터 부품을 추천하고, 결과는 조건에 따라 JSON 배열 형태로만 답변해 주세요. 조건1: [{유형: 'cpu', 제품명: 'i5-11400f', 제조사: 'intel', 가격: '약20만원'}, {유형: gpu, 제품명: ...}]형태의 JSON배열로 만들 것, 조건2: 부품 데이터만 배열 형태로 출력할 것. 추가 설명 없이 배열만 작성할 것., 조건3 : 컴퓨터 사용 용도 ${purpose}, 필요한 저장공간은 ${storage}, 희망하는 총 금액은 ${cost}만원(오차범위는 +-15만원까지)`,
              },
            ],
          }),
        }
      )

      if (!response.ok) {
        console.error(`Error: ${response.status} ${response.statusText}`)
        throw new Error("API request failed")
      }

      const data = await response.json()
      console.log(data.choices[0]?.message?.content)
      setResponseData(data.choices[0]?.message?.content || "No response")
    } catch (error) {
      console.error("Error fetching ChatGPT response:", error)
    } finally {
      setLoading(false)
      setViewTable(true)
    }
  }

  useEffect(() => {
    fetchChatGPTResponse()
  }, [])

  return (
    <div className="flex flex-col p-8 md:px-28 2xl:px-96 min-[1800px]:px-[32rem]">
      {/* <button
        className="bg-gray-300 py-4 px-10 rounded-full bg-sky-300 hover:bg-sky-500 font-semibold text-white"
        onClick={fetchChatGPTResponse}
        disabled={loading}
      >
        {loading ? "Loading..." : "추천결과 확인"}
      </button> */}
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-70 z-50">
          <div className="spinner-border" />
          <p className="mt-8">
            결과를 생성 중입니다. <br /> 잠시만 기다려주세요
          </p>
        </div>
      )}
      {viewTable && (
        <table className="mt-12 w-full border border-collapse">
          <thead>
            <tr>
              <th
                scope="col"
                className="p-3 text-center align-middle bg-blue-500"
              >
                유형
              </th>
              <th scope="col" className="p-2 text-center bg-blue-500">
                제품명
              </th>
              <th
                scope="col"
                className="p-2 text-center align-middle bg-blue-500"
              >
                제조사
              </th>
              <th
                scope="col"
                className="p-2 text-center align-middle bg-blue-500"
              >
                가격
              </th>
            </tr>
          </thead>
          <tbody>
            {responseData &&
              typeof responseData === "string" &&
              JSON.parse(responseData).map(
                (item: SpecsClassType, index: number) => (
                  <tr key={index}>
                    <td className="text-center bg-gray-100 py-3 align-middle">
                      {item.유형}
                    </td>
                    <td className="text-center font-medium">{item.제품명}</td>
                    <td className="text-center">{item.제조사}</td>
                    <td className="text-center">{item.가격}</td>
                  </tr>
                )
              )}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default SpecsRecommendationResults
