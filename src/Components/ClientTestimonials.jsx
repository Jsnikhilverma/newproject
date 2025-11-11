import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// --- Testimonial Data ---
const testimonialsData = [
  {
    id: 1,
    name: "Jenny Wilson",
    location: "New York",
    quote:
      "Supply's dedicated team keeps our freight moving on time without hassle. Their clear quick solutions have made them our trusted partner.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    name: "Devon Lane",
    location: "UAE",
    quote:
      "Supply's dedicated team keeps our freight moving on time without hassle. Their clear quick solutions have made them our trusted partner.",
    image: "/client1.jpg",
  },
  {
    id: 3,
    name: "Devon Lane",
    location: "Australia",
    quote:
      "Supply's dedicated team keeps our freight moving on time without hassle. Their clear quick solutions have made them our trusted partner.",
    image: "/client2.jpg",
  },
  {
    id: 4,
    name: "Robert Fox",
    location: "Germany",
    quote:
      "Supply's dedicated team keeps our freight moving on time without hassle. Their clear quick solutions have made them our trusted partner.",
    image:
      "https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    name: "Jane Doe",
    location: "Canada",
    quote:
      "Supply's dedicated team keeps our freight moving on time without hassle. Their clear quick solutions have made them our trusted partner.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    name: "Emily Chen",
    location: "Japan",
    quote:
      "Supply's dedicated team keeps our freight moving on time without hassle. Their clear quick solutions have made them our trusted partner.",
    image: "/client3.jpg",
  },
];

// --- Testimonial Card ---
const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white p-4 rounded-xl shadow-lg flex-none w-[260px] sm:w-[300px] md:w-[320px] lg:w-[350px] xl:w-[400px] mr-4 relative h-[180px] flex flex-col justify-between">
    <div className="flex items-start mb-2">
      <div className="w-24 h-24 md:w-32 md:h-32 mr-4 mt-2 rounded-2xl overflow-hidden shrink-0">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col mt-2">
        <div className="text-yellow-500 text-base mb-1 flex">
          {"★".repeat(5)}
        </div>
        <p className="text-gray-700 text-sm line-clamp-4">
          {testimonial.quote}
        </p>
        <div className="flex justify-start text-xs pt-2">
          <span className="font-semibold text-gray-800">
            {testimonial.name}
          </span>
          <span className="text-gray-500 ml-2">{testimonial.location}</span>
        </div>
      </div>
    </div>
  </div>
);

// --- Main Component ---
const ClientTestimonials = () => {
  const [currentScrollGroup, setCurrentScrollGroup] = useState(0);
  const [scrollGroupSize, setScrollGroupSize] = useState(4); // default desktop
  const containerRef = useRef(null);

  // ✅ Handle responsive group size
  useEffect(() => {
    const updateGroupSize = () => {
      if (window.innerWidth < 768) {
        setScrollGroupSize(1); // mobile
      } else {
        setScrollGroupSize(4); // tablet & desktop
      }
    };

    updateGroupSize();
    window.addEventListener("resize", updateGroupSize);
    return () => window.removeEventListener("resize", updateGroupSize);
  }, []);

  // ✅ Auto-scroll every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScrollGroup((prevGroup) => {
        const totalGroups = Math.ceil(testimonialsData.length / scrollGroupSize);
        return (prevGroup + 1) % totalGroups;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [scrollGroupSize]);

  const getCarouselXOffset = () => {
    const APPROX_CARD_WIDTH_WITH_MARGIN = window.innerWidth < 768 ? 270 + 16 : 300 + 16;
    const scrollDistance =
      currentScrollGroup * scrollGroupSize * APPROX_CARD_WIDTH_WITH_MARGIN;
    return -scrollDistance;
  };

  return (
    <div className="bg-[#87A6C2] py-8 px-4 flex flex-col items-center overflow-hidden">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-serif font-bold text-gray-800 mb-1">
          Our Client<span className="text-[#F29D38]"> Say</span>
        </h1>
        <div className="flex justify-center">
          <div className="w-24 h-4 border-t-4 border-amber-500 rounded-t-full"></div>
        </div>
        <p className="text-gray-600 text-base mt-2">
          Education is the most powerful weapon you can use to change the world
        </p>
      </div>

      {/* Carousel */}
      <div ref={containerRef} className="w-full max-w-7xl mb-12 overflow-hidden relative">
        <motion.div
          className="flex flex-nowrap"
          animate={{ x: getCarouselXOffset() }}
          transition={{ type: "tween", duration: 0.8 }}
        >
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
          {/* Duplicate for seamless loop */}
          {testimonialsData
            .slice(0, scrollGroupSize)
            .map((testimonial, index) => (
              <TestimonialCard
                key={`dup-${index}`}
                testimonial={testimonial}
              />
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ClientTestimonials;
