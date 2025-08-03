// ✅ /src/app/services/page.tsx

"use client";

import React, { useState } from "react";
import servicesData from "@/components/data/servicesData";
import ServiceCard from "@/components/ServiceCard";

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices = servicesData.filter((service) => {
    const matchesCategory =
      selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const uniqueCategories = [
    "All",
    ...Array.from(new Set(servicesData.map((service) => service.category))),
  ];

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        Explore Our Services
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 w-72"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        >
          {uniqueCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {uniqueCategories
        .filter((category) => category !== "All")
        .map((category) => {
          const servicesInCategory = filteredServices.filter(
            (service) => service.category === category
          );
          if (servicesInCategory.length === 0) return null;
          return (
            <div key={category} className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                {category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicesInCategory.map((service, index) => (
                  <ServiceCard key={index} service={service} />
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ServicesPage;
