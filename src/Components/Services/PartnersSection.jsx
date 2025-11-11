import React from "react";
import { PiGreaterThanBold } from "react-icons/pi";
import { GrLinkNext } from "react-icons/gr";

const PartnersSection = () => {
  return (
    <div className="w-full">
      {/* Top Banner Section */}
      <div
        className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] bg-cover bg-center flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: "url('/servicepic.png')",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Main Heading */}
        <h1 className="relative text-3xl sm:text-4xl md:text-5xl font-bold text-white z-10">
          Service
        </h1>

        {/* Breadcrumb */}
        <p className="relative mt-3 text-base sm:text-lg z-10 text-white flex items-center justify-center gap-2">
          <span className="text-blue-800 cursor-pointer hover:underline transition">
            Home
          </span>
          <PiGreaterThanBold className="text-white text-sm" />
          <span>Service</span>
        </p>
      </div>

      {/* Community Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side */}
          <div className="lg:w-[55%] text-center lg:text-left">
            <p className="text-sm sm:text-base font-semibold tracking-wider text-[#0356A2] uppercase mb-3 flex items-center justify-center lg:justify-start">
              <span className="inline-block w-3 h-3 rounded-full bg-[#FF7A00] mr-2"></span>
              OUR COMMUNITY
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug text-[#0356A2] mb-6">
              Join a{" "}
              <span className="text-[#FF7A00]">Growing Community</span> <br className="hidden sm:block" />
              of Business and Logistics Partners
            </h2>

            <p className="text-[#5f5f5f] text-base sm:text-lg mb-8">
              Join a dynamic community of business and logistics partners,
              optimizing supply chains and driving growth.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button className="flex items-center space-x-3 bg-[#0356A2] border border-[#0356A2] text-white hover:text-[#0356A2] px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold transition duration-300 shadow-lg hover:bg-white hover:shadow-xl hover:scale-105">
                Join Us
                <span className="border-2 border-white hover:border-[#0356A2] p-2 rounded-full flex items-center justify-center ml-2 sm:ml-4 transition">
                  <GrLinkNext className="text-sm font-none" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Side Stats */}
          <div className="lg:w-[40%] grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
            {/* Box Template */}
            {[
              { number: "25", text: "Years Of Industry Experience" },
              { number: "300+", text: "Employees for Your Success" },
              { number: "500+", text: "Satisfied Client Worldwide" },
              { number: "99%", text: "On-Time Delivery Rate" },
            ].map((box, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl text-center border border-gray-100 shadow-[4px_6px_12px_rgba(0,0,0,0.1)] hover:shadow-[4px_10px_20px_rgba(0,0,0,0.15)] transition"
              >
                <h3 className="text-4xl sm:text-4xl md:text-4xl xl:text-6xl font-extrabold text-[#0356A2] mb-2 sm:mb-3 drop-shadow-[4px_4px_3px_rgba(0,0,0,0.2)]">
                  {box.number}
                </h3>
                <p className="text-[#0356A2] font-semibold text-sm sm:text-base md:text-lg leading-snug">
                  {box.text.split("<br />")[0]}
                  <br className="hidden sm:block" />
                  {box.text.split("<br />")[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersSection;
