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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { type, manufacturer } = router.query;

  useEffect(() => {
    const fetchResults = async () => {
      try {
        if (type && manufacturer) {
          console.log("Query parameters received:", { type, manufacturer });
          const response = await axios.get("/api/filteredParts", {
            params: { type, manufacturer },
          });
          console.log("API response:", response.data);
          setResults(response.data);
          setError(null);
        }
      } catch (error) {
        console.error("Error fetching results:", error);
        setError("Failed to fetch results. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [type, manufacturer]);

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-8">{error}</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Survey Results</h1>
      {results.length === 0 ? (
        <div className="text-center text-gray-700">
          No parts found for your search. Try adjusting the type or changing the
          manufacturer.
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Results;
