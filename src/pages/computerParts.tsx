import React, { useEffect, useState } from "react";
import axios from "axios";

interface Part {
  id: number;
  type: string;
  manufacturer: string;
  name: string;
  about: string;
  price: string;
}

const computerParts = () => {
  const [parts, setParts] = useState<Part[]>([]);

  useEffect(() => {
    const fetchParts = async () => {
      try {
        const response = await axios.get("/api/parts");
        setParts(response.data);
      } catch (error) {
        console.error("Error fetching parts:", error);
      }
    };

    fetchParts();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">PC Parts List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {parts.map((part) => (
          <div
            key={part.id}
            className="bg-white rounded-lg shadow-md p-4 border border-gray-200"
          >
            <h2 className="text-xl font-semibold">{part.name}</h2>
            <p className="text-gray-700">
              <span className="font-medium">Type:</span> {part.type}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Manufacturer:</span> {part.manufacturer}
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

export default computerParts;
