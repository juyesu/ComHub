import React, { useState } from "react";
import { useRouter } from "next/router";

const Survey = () => {
  const [preferences, setPreferences] = useState({
    type: "",
    manufacturer: "",
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <h1 className="text-3xl font-bold text-center mb-8">PC Part Survey</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-6 rounded shadow"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Type of Part:
          </label>
          <input
            type="text"
            name="type"
            value={preferences.type}
            onChange={handleChange}
            placeholder="e.g., CPU, GPU"
            className="w-full border-gray-300 rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Manufacturer:
          </label>
          <input
            type="text"
            name="manufacturer"
            value={preferences.manufacturer}
            onChange={handleChange}
            placeholder="e.g., Intel, AMD"
            className="w-full border-gray-300 rounded p-2"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Survey;
