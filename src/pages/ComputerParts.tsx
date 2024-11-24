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

const kindManufacturerMap: { [key: string]: string[] } = {
  CPU: ["intel", "AMD"],
  GPU: ["NVIDIA", "AMD", "intel"],
  mainboard: ["ASRock", "ASUS", "BIOSTAR", "GIGABYTE", "MSI"],
  memory: ["AMD", "ASRock", "ASUS", "BIOSTAR"],
  SSD: ["ADATA", "COLORFUL", "SAMSUNG", "SK", "MICRON"],
};

const ComputerParts = () => {
  const [parts, setParts] = useState<Part[]>([]);
  const [filteredParts, setFilteredParts] = useState<Part[]>([]);
  const [kindFilter, setKindFilter] = useState<string>("");
  const [manufacturerFilter, setManufacturerFilter] = useState<string>("");
  const [availableManufacturers, setAvailableManufacturers] = useState<string[]>([]);

  const kinds = ["CPU", "GPU", "mainboard", "memory", "SSD"];

  useEffect(() => {
    const fetchParts = async () => {
      try {
        const response = await axios.get("/api/parts");
        setParts(response.data);
        setFilteredParts(response.data);
      } catch (error) {
        console.error("Error fetching parts:", error);
      }
    };

    fetchParts();
  }, []);

  useEffect(() => {
    if (kindFilter) {
      setAvailableManufacturers(kindManufacturerMap[kindFilter] || []);
      setManufacturerFilter("");
    } else {
      setAvailableManufacturers([]);
    }
  }, [kindFilter]);

  const handleFilter = () => {
    let filtered = parts;

    if (kindFilter) {
      filtered = filtered.filter((part) => part.type === kindFilter);
    }
    if (manufacturerFilter) {
      filtered = filtered.filter((part) => part.manufacturer === manufacturerFilter);
    }

    setFilteredParts(filtered);
  };

  return (
    <div className="p-6 bg-gradient-to-r from-gray-100 to-blue-50 min-h-screen md:px-28 2xl:px-96 min-[1800px]:px-[32rem]">
      <h1 className="text-4xl font-extrabold text-center text-black mb-12">
        부품 리스트
      </h1>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6 bg-white shadow-lg rounded-lg p-6">
        <div>
          <label htmlFor="kindFilter" className="block font-medium mb-1 text-gray-700">
            부품 종류:
          </label>
          <select
            id="kindFilter"
            value={kindFilter}
            onChange={(e) => setKindFilter(e.target.value)}
            className="p-3 border rounded-md w-full md:w-64 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
          >
            <option value="">All</option>
            {kinds.map((kind) => (
              <option key={kind} value={kind}>
                {kind}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="manufacturerFilter" className="block font-medium mb-1 text-gray-700">
            제조사:
          </label>
          <select
            id="manufacturerFilter"
            value={manufacturerFilter}
            onChange={(e) => setManufacturerFilter(e.target.value)}
            className="p-3 border rounded-md w-full md:w-64 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
            disabled={!kindFilter}
          >
            <option value="">All</option>
            {availableManufacturers.map((manufacturer) => (
              <option key={manufacturer} value={manufacturer}>
                {manufacturer}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleFilter}
          className="p-3 bg-black text-white font-semibold rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 transition duration-300 transform hover:scale-105"
        >
          Apply Filters
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredParts.map((part) => (
          <div
            key={part.id}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition duration-300 transform hover:scale-105"
          >
            <h2 className="text-2xl font-semibold text-black mb-4">{part.name}</h2>
            <div className="text-sm text-gray-700 space-y-2">
              <p>
                <span className="font-medium text-gray-800">부품 종류:</span> {part.type}
              </p>
              <p>
                <span className="font-medium text-gray-800">제조사:</span>{" "}
                {part.manufacturer}
              </p>
              <p>
                <span className="font-medium text-gray-800">설명: </span> {part.about}
              </p>
              <p>
                <span className="font-medium text-gray-800">Price:</span>{" "}
                <span className="text-black font-bold">{part.price}원</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComputerParts;
