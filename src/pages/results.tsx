import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

interface Part {
  id: number;
  type: string;
  manufacturer: string;
  name: string;
  about: string;
  price: string;
}

const Results = () => {
  const [results, setResults] = useState<Part[]>([]);
  const router = useRouter();
  const { type, price } = router.query; // Survey 페이지에서 전달받은 값

  useEffect(() => {
    const fetchResults = async () => {
      try {
        if (type && price) { // 쿼리 값이 존재하는 경우에만 실행
          const response = await axios.get("/api/filteredParts", {
            params: { type, price },
          });
          setResults(response.data);
        }
      } catch (error) {
        console.error("Error fetching results:", error);
      }
    };

    fetchResults();
  }, [type, price]); // type 또는 price가 변경될 때마다 실행

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Survey Results</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {results.map((part) => (
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
              <span className="font-medium">Details:</span> {part.about}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Price:</span> {part.price}원
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
