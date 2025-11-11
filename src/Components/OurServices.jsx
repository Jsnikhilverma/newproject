import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GoArrowUpRight } from "react-icons/go";

// Data for the service cards (unchanged)
const services = [
      {
    title: "Express Freight And Cargo Services",
    description:
      "Fast secure delivery for urgent cargo across domistic and international routes.",
    image: 'bg-[url("/s1.jpg")]',
    alt: "Warehouse interior",
  },
  {
    title: "End-to-End Supply Chain Solutions",
    description:
      "Comprehensive logistics support from sourcing to final delivery.",
    image: 'bg-[url("/servicepic.png")]',
    alt: "Various transport vehicles",
  },
  {
    title: "Ocean Freight",
    description:
      "Secure global cargo transport via sea routes with cost efficiency.",
    image: 'bg-[url("/s8.jpg")]',
    alt: "Container ship at sea",
  },
  {
    title: "Express Freight & Cargo Services",
    description:
      "Need it there fast? Our express freight solutions ensure your goods arrive on time.",
    image: 'bg-[url("/s9.jpg")]',
    alt: "Airplane taking off",
  },
  {
    title: "Rail Cargo Delivery Services",
    description:
      "Seamless integration with warehousing and last-mile delivery.",
    image: 'bg-[url("/s2.jpg")]',
    alt: "Train on tracks at night",
  },
  {
    title: "Road Freight",
    description:
      "Fast, reliable road freight delivery across cities and industrial zones.",
    image: 'bg-[url("/s1.jpg")]',
    alt: "Trucks on a highway",
  },

//   {
//     title: "Customs Brokerage",
//     description:
//       "Expert handling of all import and export documentation and compliance.",
//     image: "bg-indigo-700",
//     alt: "Customs document icon",
//   },
//   {
//     title: "Supply Chain Consulting",
//     description:
//       "Optimizing your logistics process for maximum efficiency and cost savings.",
//     image: "bg-red-700",
//     alt: "Consulting graph",
//   },
];

// Helper component for the individual service card (UPDATED 'Learn More' Button Alignment)
const ServiceCard = ({ service }) => (
  <div
    className="
      flex-shrink-0 w-64 h-[18rem] // 🛑 UPDATED: Card width reduced to w-64 (256px)
      bg-white rounded-xl shadow-lg
      overflow-hidden transform transition duration-300 hover:shadow-2xl
      mb-4 mr-4
    "
  >
    {/* Image Container (60% height) */}
    <div className="p-3 h-[60%] flex items-center justify-center bg-white">
      <div
        className={`
          ${service.image} w-full h-full 
          bg-cover bg-center rounded-lg 
          border-b-2 border-transparent 
        `}
        role="img"
        aria-label={service.alt}
      >
        {/* Visual representation of the image is here */}
      </div>
    </div>

    {/* Content Area (40% height) */}
    <div className="p-1 h-[40%] flex flex-col justify-between">
      <div>
        <h3 className="text-xs font-bold text-gray-800 mb-1">
          {service.title}
        </h3>{" "}
        {/* Title size slightly reduced */}
        <p className="text-xs text-gray-600">{service.description}</p>
      </div>
      <button
        className="
          flex items-center text-sm font-semibold text-black hover:text-white hover:bg-[#FD6309]
          transition duration-150 mt-1 self-center border border-[#FD6309] rounded-lg p-1 mb-2
        "
      >
        Learn More
        <GoArrowUpRight />
      </button>
    </div>
  </div>
);

// Main component (UPDATED: Container width adjusted for smaller cards)
const OurServices = () => {
  const scrollRef = useRef(null);

  // Scroll handler function (unchanged)
  const scroll = (direction) => {
    if (scrollRef.current) {
      // Scroll amount adjusted for smoother movement with smaller cards
      const scrollAmount = 280;
      const currentScroll = scrollRef.current.scrollLeft;

      if (direction === "left") {
        scrollRef.current.scroll({
          left: currentScroll - scrollAmount,
          behavior: "smooth",
        });
      } else if (direction === "right") {
        scrollRef.current.scroll({
          left: currentScroll + scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <section className="bg-[#87A6C2] p-10 h-[580px] flex flex-col justify-center items-center font-sans">
        {/* Title and Description Section */}
        <div className="text-center mb-12 mt-2 max-w-2xl">
          <h2 className="text-5xl text-white mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-[#FD6309]">
              Services
            </span>
          </h2>
          {/* NEW: Adjusted curved line for a more subtle arc */}
          <div className="flex justify-center">
            <div className="w-24 h-4 border-t-4 border-[#FD6309] rounded-t-full"></div>
          </div>
          <p className="text-lg text-white/90">
            Transportation is the most powerful weapon you can use to change the
            world
          </p>
        </div>

        {/* Cards and Navigation Container (UPDATED WIDTH) */}
        <div className="relative w-full max-w-[1300px]">
          {" "}
          {/* Adjusted max-width (1200px) to maintain 4.5 card view */}
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className="
              absolute left-[-2rem] top-1/2 transform -translate-y-1/2 z-10
              p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition
              hidden md:block 
            "
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="
              absolute right-[-2rem] top-1/2 transform -translate-y-1/2 z-10
              p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition
              hidden md:block 
            "
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
          {/* Scrollable Cards Area */}
          <div
            ref={scrollRef}
            className="
              flex space-x-8 overflow-x-auto
              p-4 
              hide-scrollbar
            "
          >
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom CSS to reliably hide the scrollbar (unchanged) */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* For Chrome, Safari, and Opera */
        }
        .hide-scrollbar {
          -ms-overflow-style: none; /* For IE and Edge */
          scrollbar-width: none; /* For Firefox */
        }
      `}</style>
    </>
  );
};

export default OurServices;
