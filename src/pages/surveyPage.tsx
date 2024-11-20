import React, { useState } from "react";
import { useRouter } from "next/router";

const Survey = () => {
  const [preferences, setPreferences] = useState({
    useCase: "",
    storage: "",
    price: "",
    cpuManufacturer: "",
    gpuManufacturer: "",
    motherboardManufacturer: "",
    memoryManufacturer: "",
    storageManufacturer: "",
    monitorPreference: "",
    software1: "",
    software2: "",
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setPreferences({ ...preferences, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    router.push({
      pathname: "/results",
      query: preferences,
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold text-center mb-8">
          Pro모드: AI 컴퓨터 사양 추천
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 질문 1: 사용 용도 */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              1. PC의 주 사용 용도는 무엇인가요?
            </label>
            <div className="space-y-2">
              {["작업", "게임", "다미언", "CAD", "사무", "기타"].map((option) => (
                <div key={option}>
                  <input
                    type="radio"
                    id={option}
                    name="useCase"
                    value={option}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))}
            </div>
          </div>

          {/* 질문 2: 저장 공간 */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              2. 보관할 저장공간은 어느 정도인가요?
            </label>
            <div className="space-y-2">
              {["256GB 이하", "512GB", "1TB", "2TB", "3TB 이상"].map((option) => (
                <div key={option}>
                  <input
                    type="radio"
                    id={option}
                    name="storage"
                    value={option}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))}
            </div>
          </div>

          {/* 질문 3: 희망 가격 */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              3. 희망하는 가격대는 얼마인가요? (단위: 원)
            </label>
            <input
              type="number"
              name="price"
              value={preferences.price}
              onChange={handleChange}
              placeholder="예: 500000"
              className="w-full border-gray-300 rounded p-2"
            />
          </div>

          {/* 질문 4: 제조사 선택 */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              4. 희망하는 부품 제조사가 있나요? (복수 선택 가능)
            </label>
            <div className="space-y-4">
              <div>
                <label className="block mb-1">CPU 제조사:</label>
                <select
                  name="cpuManufacturer"
                  value={preferences.cpuManufacturer}
                  onChange={handleChange}
                  className="w-full border-gray-300 rounded p-2"
                >
                  <option value="">선택 안 함</option>
                  <option value="Intel">Intel</option>
                  <option value="AMD">AMD</option>
                </select>
              </div>
              <div>
                <label className="block mb-1">GPU 제조사:</label>
                <select
                  name="gpuManufacturer"
                  value={preferences.gpuManufacturer}
                  onChange={handleChange}
                  className="w-full border-gray-300 rounded p-2"
                >
                  <option value="">선택 안 함</option>
                  <option value="NVIDIA">NVIDIA</option>
                  <option value="AMD">AMD</option>
                </select>
              </div>
            </div>
          </div>

          {/* 질문 5: 소프트웨어 */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              5. 사용 중인 소프트웨어를 입력하세요 (복수 가능)
            </label>
            <div className="space-y-2">
              <input
                type="text"
                name="software1"
                value={preferences.software1}
                onChange={handleChange}
                placeholder="소프트웨어 1"
                className="w-full border-gray-300 rounded p-2"
              />
              <input
                type="text"
                name="software2"
                value={preferences.software2}
                onChange={handleChange}
                placeholder="소프트웨어 2"
                className="w-full border-gray-300 rounded p-2"
              />
            </div>
          </div>

          {/* 제출 버튼 */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded font-medium"
          >
            제출하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default Survey;
