import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

interface Part {
  id?: number; // Database results will have an ID
  type: string;
  manufacturer: string;
  name: string;
  about?: string; // Optional for database results
  price: string | number;
}

const CombinedResults = () => {
  const [dbResults, setDbResults] = useState<Part[]>([]);
  const [gptResults, setGptResults] = useState<Part[]>([]);
  const [loadingDb, setLoadingDb] = useState(true);
  const [loadingGpt, setLoadingGpt] = useState(false);
  const [errorDb, setErrorDb] = useState<string | null>(null);
  const [errorGpt, setErrorGpt] = useState<string | null>(null);
  const [viewGptResults, setViewGptResults] = useState(false);

  const router = useRouter();
  const { type, manufacturer, purpose, storage, cost } = router.query;

  // Fetch results from the database
  useEffect(() => {
    const fetchDbResults = async () => {
      try {
        if (type && manufacturer) {
          console.log("Query parameters received:", { type, manufacturer });
          const response = await axios.get("/api/filteredParts", {
            params: { type, manufacturer },
          });
          console.log("Database API response:", response.data);
          setDbResults(response.data);
          setErrorDb(null);
        }
      } catch (error) {
        console.error("Error fetching database results:", error);
        setErrorDb("Failed to fetch database results. Please try again.");
      } finally {
        setLoadingDb(false);
      }
    };

    fetchDbResults();
  }, [type, manufacturer]);

  // Fetch results from ChatGPT
  const fetchChatGPTResults = async () => {
    setLoadingGpt(true);
    try {
      const apiKey = ""; // Add your OpenAI API key here

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
                content: `다음 조건에 맞는 컴퓨터 부품을 추천하고, 결과는 조건에 따라 JSON 배열 형태로만 답변해 주세요. 조건1: [{유형: 'cpu', 제품명: 'i5-11400f', 제조사: 'intel', 가격: '약20만원'}, {유형: gpu, 제품명: ...}]형태의 JSON배열로 만들 것, 조건2: 부품 데이터만 배열 형태로 출력할 것. 추가 설명 없이 배열만 작성할 것., 조건3 : 컴퓨터 사용 용도 ${purpose}, 필요한 저장공간은 ${storage}, 희망하는 총 금액은 ${cost}(오차범위는 +-15만원까지)`,
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        console.error(`Error: ${response.status} ${response.statusText}`);
        throw new Error("API request failed");
      }

      const data = await response.json();
      const parsedData = JSON.parse(data.choices[0]?.message?.content || "[]");
      console.log("ChatGPT API response:", parsedData);
      setGptResults(parsedData);
      setErrorGpt(null);
      setViewGptResults(true);
    } catch (error) {
      console.error("Error fetching ChatGPT results:", error);
      setErrorGpt("Failed to fetch ChatGPT results. Please try again.");
    } finally {
      setLoadingGpt(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Combined Results</h1>

      {/* Database Results */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Database Results</h2>
        {loadingDb ? (
          <div className="text-center">Loading database results...</div>
        ) : errorDb ? (
          <div className="text-center text-red-500">{errorDb}</div>
        ) : dbResults.length === 0 ? (
          <div className="text-center text-gray-700">
            No results found in the database for your search.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {dbResults.map((part) => (
              <div
                key={part.id}
                className="bg-white rounded-lg shadow-md p-4 border border-gray-200"
              >
                <h2 className="text-xl font-semibold">{part.name}</h2>
                <p className="text-gray-700">
                  <span className="font-medium">Type:</span> {part.type}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Manufacturer:</span>{" "}
                  {part.manufacturer}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Details:</span>{" "}
                  {part.about || "N/A"}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Price:</span> {part.price}원
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ChatGPT Results */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">ChatGPT Results</h2>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
          onClick={fetchChatGPTResults}
          disabled={loadingGpt}
        >
          {loadingGpt ? "Loading..." : "Fetch GPT Recommendations"}
        </button>
        {errorGpt && (
          <div className="text-center text-red-500 mb-4">{errorGpt}</div>
        )}
        {viewGptResults && gptResults.length === 0 && (
          <div className="text-center text-gray-700">
            No recommendations found. Try again later.
          </div>
        )}
        {viewGptResults && gptResults.length > 0 && (
          <table className="w-full border border-collapse">
            <thead>
              <tr>
                <th className="p-3 text-center align-middle bg-sky-500">유형</th>
                <th className="p-2 text-center bg-sky-500">제품명</th>
                <th className="p-2 text-center align-middle bg-sky-500">
                  제조사
                </th>
                <th className="p-2 text-center align-middle bg-sky-500">가격</th>
              </tr>
            </thead>
            <tbody>
              {gptResults.map((item, index) => (
                <tr key={index}>
                  <td className="text-center bg-gray-100 py-3 align-middle">
                    {item.type}
                  </td>
                  <td className="text-center font-medium">{item.name}</td>
                  <td className="text-center">{item.manufacturer}</td>
                  <td className="text-center">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default CombinedResults;
