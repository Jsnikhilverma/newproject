import React, { useState, useEffect, useRef } from "react";
import { FaTruck, FaPlane, FaGift } from "react-icons/fa";
import { GiDeliveryDrone, GiCargoShip } from "react-icons/gi";
import { FaTrainSubway, FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function FreightServices() {
  const services = [
    { icon: FaTruck, label: "Road Freight" },
    { icon: FaPlane, label: "Air Freight" },
    { icon: GiCargoShip, label: "Ocean Freight" },
    { icon: FaTrainSubway, label: "Train Freight" },
    { icon: GiDeliveryDrone, label: "Drone Freight" },
    { icon: FaGift, label: "Send Gift" },
  ];

  const marqueeContent = [...services, ...services];

  const images = [
    { src: "/home/Image-Box-Slider-1.jpg", title: "Outbound Logistics" },
    { src: "/home/Image-Box-Slider-2.jpg", title: "Ocean Transport" },
    { src: "/home/Image-Box-Slider-3.jpg", title: "Rail Transport" },
    { src: "/home/Image-Box-Slider-4.jpg", title: "Container Transport" },
    { src: "/home/Image-Box-Slider-5.jpg", title: "Reverse Logistics" },
    { src: "/home/Image-Box-Slider-6.jpg", title: "Distribution Logistics" },
    { src: "/home/Image-Box-Slider-7.jpg", title: "Inbound Logistics" },
    { src: "/home/Image-Box-Slider-8.jpg", title: "Warehousing" },
  ];

  const extendedImages = [...images, ...images.slice(0, 4)];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
    setIsTransitioning(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
    setIsTransitioning(true);
  };

  useEffect(() => {
    if (currentIndex < 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(images.length - 1);
      }, 700);
    } else if (currentIndex >= images.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 700);
    }
  }, [currentIndex]);

  return (
    <div className="w-full h-auto relative mt-12 md:mt-4 mb-8 mx-auto overflow-hidden">
      {/* ✅ Centered Header Section */}
      <header className="flex flex-col items-center justify-center text-center mb-8 mt-4 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          Freight{" "}
          <span className="relative inline-block text-[#FD6309]"> Management </span> Services
        </h2>
         <div className="flex justify-center">
          <div className="w-24 h-4 border-t-4 border-[#FD6309] rounded-t-full"></div>
        </div>
      </header>

      {/* ✅ Multi-image Infinite Slider */}
      <div className="relative max-w-7xl mx-auto w-full overflow-hidden px-4 sm:px-6">
        <div
          ref={sliderRef}
          className={`flex ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
          style={{
            transform: `translateX(-${currentIndex * (100 / 4)}%)`,
          }}
          onTransitionEnd={() => setIsTransitioning(true)}
        >
          {extendedImages.map((item, idx) => (
            <div key={idx} className="w-1/2 sm:w-1/3 md:w-1/4 flex-shrink-0 px-2">
              <div className="flex flex-col items-center  justify-center">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-68 h-48 sm:h-56 md:h-72 lg:h-96 object-cover  rounded-lg"
                />
                <h3 className="text-[#0B407A] text-base sm:text-xl font-bold mt-3 text-center">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Left Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#0B407A]/70 text-white p-2 sm:p-3 rounded-full hover:bg-[#0B407A] transition-all"
        >
          <FaArrowLeft size={18} />
        </button>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#0B407A]/70 text-white p-2 sm:p-3 rounded-full hover:bg-[#0B407A] transition-all"
        >
          <FaArrowRight size={18} />
        </button>
      </div>

      {/* ✅ Marquee Section Below */}
      <div className="relative z-20 overflow-hidden mt-18">
        <div className="flex whitespace-nowrap animate-marquee w-max">
          {marqueeContent.map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-6 sm:gap-8 mx-6 sm:mx-8 cursor-pointer group flex-shrink-0"
            >
              <service.icon
                className="w-8 sm:w-10 h-8 sm:h-10 text-[#0B407A] group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-[#FD6309] font-medium text-lg sm:text-xl tracking-wide whitespace-nowrap">
                {service.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind keyframes for marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
}
