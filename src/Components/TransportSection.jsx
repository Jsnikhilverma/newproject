import React, { useState } from "react";

export default function TransportSection() {
  const tabs = [
    {
      id: "surface",
      label: "Surface Transport",
      image:
        "/aboutimg1.jpg",
      description1:
        "Our vision is to become a trusted global leader in logistics and transportation by setting new standards for quality, innovation, and customer satisfaction. We aspire to create a future where logistics is simplified through smart technology, strong networks, and a commitment to excellence — connecting businesses and people around the world with speed and reliability.",
      description2:
        "We provide end-to-end shipping solutions designed to ensure smooth and timely movement of goods across domestic and international routes. Our expertise in transshipment operations allows us to efficiently handle cargo transfers between vessels or transport modes, minimizing delays and maximizing reliability. In addition, we offer complete maintenance support for our fleet and logistics equipment, ensuring safety, efficiency, and uninterrupted service at every stage of the supply chain.",
    },
    {
      id: "air",
      label: "Air Freight",
      image:
        "/aboutimg2.jpg",
      description1:
        "Our vision is to become a trusted leader in air logistics, connecting global markets through innovation, reliability, and smart technology. We aim to simplify international air freight by offering seamless connectivity and exceptional service quality.",
      description2:
        "We specialize in delivering air freight solutions with speed and reliability. Our global network and experienced logistics teams ensure efficient cargo movement, minimal delays, and complete tracking visibility from origin to destination.",
    },
    {
      id: "sea",
      label: "Sea Shipment",
      image:
        "/aboutimg3.jpg",
      description1:
        "Our vision is to transform sea logistics with innovation and excellence, ensuring global trade flows efficiently through smart networks and sustainable operations.",
      description2:
        "We offer comprehensive sea freight solutions for all cargo types. Our expertise in port logistics, transshipment handling, and container management guarantees smooth, safe, and cost-effective sea transport services worldwide.",
    },
  ];

  const [activeTab, setActiveTab] = useState("surface");
  const activeData = tabs.find((tab) => tab.id === activeTab);

  const services = [
    "Warehousing",
    "Freight forwarding",
    "People Transport solutions",
    "Customs clearance",
    "Cargo solutions",
    "Storage",
    "Transportation",
  ];

  return (
    <div className="w-full bg-white py-10 px-4 md:px-12 lg:px-24">
      {/* Tabs */}
      <div className="flex flex-wrap gap-1 border-b border-gray-200 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 text-sm md:text-base font-semibold transition-all duration-200 ${
              activeTab === tab.id
                ? "bg-[#063567] text-white rounded-t-md"
                : "bg-gray-100 text-black hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="lg:w-2/3">
          <h2 className="text-[#063567] text-xl font-semibold mb-3">
            Our Vision
          </h2>
          <p className="text-gray-500 mb-6 leading-relaxed">
            {activeData.description1}
          </p>

          <h3 className="text-[#063567] text-lg font-semibold mb-3">
            Shipping Transshipments & Maintenance
          </h3>
          <p className="text-gray-500 leading-relaxed mb-8">
            {activeData.description2}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 text-[#063567] font-medium">
            {services.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-orange-500 font-bold">➤</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/3 flex justify-center">
          <img
            src={activeData.image}
            alt={activeData.label}
            className="w-full max-w-sm object-contain"
          />
        </div>
      </div>
    </div>
  );
}
