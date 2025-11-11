import React, { useRef, useState, useEffect, useCallback } from "react";
import { FaArrowRight } from "react-icons/fa";

const teamMembers = [

  { id: 1, name: "Fernadizz Wave", imageUrl: "/team1.jpg" }, 
  { id: 2, name: "Fernadizz Wave", imageUrl: "/team2.jpg" }, 
  { id: 3, name: "Fernadizz Wave", imageUrl: "/team3.jpg" }, 
  { id: 4, name: "Fernadizz Wave", imageUrl: "/team4.jpg" },
  { id: 5, name: "Fernadizz Wave", imageUrl: "/team1.jpg" },
  { id: 6, name: "Fernadizz Wave", imageUrl: "/team2.jpg" },
  { id: 7, name: "Fernadizz Wave", imageUrl: "/team3.jpg" },
  { id: 8, name: "Fernadizz Wave", imageUrl: "/team4.jpg" },
];


const ShareIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

// Arrow Icon

// Card Component
const TeamCard = ({ member }) => (
  // Card width logic: full width on mobile, 1/2 on small/tablet, 1/4 on large screens (showing 4 cards)
  <div className="relative flex-shrink-0 cursor-default w-full sm:w-1/2 lg:w-1/4 xl:w-1/4 p-4 snap-center transition-all duration-300">
    <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-gray-100">
      {/* Team Member Image - Height reduced from h-96 to h-80 */}
      <img
        src={member.imageUrl}
        alt={member.name}
        className="w-full h-80 object-cover object-center"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/400x500/6B7280/FFFFFF?text=Image+Error";
        }}
      />

      {/* Share Button (Top Right) */}
      <button
        className="absolute top-4 right-4 p-2 bg-white backdrop-blur-sm text-black rounded-full transition hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-white/80"
        aria-label="Share profile"
        onClick={() => console.log(`Sharing ${member.name}`)}
      >
        <ShareIcon className="w-5 h-5" />
      </button>

      {/* Bottom Overlay Text and Arrow Button */}
      <div className="absolute inset-x-0 bottom-0 p-4 flex cursor-pointer justify-between items-center bg-[#066466]/50 backdrop-blur-none rounded-2xl text-white transition-all duration-300">
        <span className="text-lg font-semibold tracking-wider">
          {member.name}
        </span>
        <button
          className="p-3 bg-yellow-100 border-4 cursor-pointer border-[#FD6309] text-gray-900 rounded-full shadow-lg hover:bg-yellow-400 transition transform hover:scale-105"
          aria-label={`View profile for ${member.name}`}
          onClick={() => console.log(`Viewing ${member.name}`)}
        > <FaArrowRight className="text-[#FD6309]"/></button>
        
      </div>
    </div>
  </div>
);

// Main Application Component
export default function MeetOurTeam() {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // Auto-play pause state

  // Determines how many cards fit in one "slide" for navigation purposes
  const cardsPerSlide = 4;
  const totalSlides = Math.ceil(teamMembers.length / cardsPerSlide);

  // Handles the sliding action based on button/dot clicks
  const handleSlide = useCallback(
    (newIndex) => {
      if (!carouselRef.current) return;

      // Keep index within bounds for manual interaction
      const safeIndex = Math.max(0, Math.min(totalSlides - 1, newIndex));
      setCurrentIndex(safeIndex);

      // PAUSE auto-play on manual interaction for better UX
      setIsPaused(true);

      // Find the width of a single card element
      const cardElement = carouselRef.current.querySelector(".snap-center");
      const cardWidth = cardElement ? cardElement.offsetWidth : 0;

      // Calculate the scroll position based on the slide index and card width
      const scrollPosition = safeIndex * cardsPerSlide * cardWidth;

      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    },
    [totalSlides]
  );

  // === useEffect for Auto-Play every 2 seconds ===
  useEffect(() => {
    if (totalSlides <= 1) return; // Don't run interval if there's only one slide

    const interval = setInterval(() => {
      if (!isPaused) {
        // Use functional update to get the latest state of currentIndex
        setCurrentIndex((prevIndex) => {
          // Calculate the next index, wrapping around using modulo
          const nextIndex = (prevIndex + 1) % totalSlides;

          if (carouselRef.current) {
            const cardElement =
              carouselRef.current.querySelector(".snap-center");
            const cardWidth = cardElement ? cardElement.offsetWidth : 0;

            // Calculate scroll position for the next slide (4 cards)
            const scrollPosition = nextIndex * cardsPerSlide * cardWidth;

            carouselRef.current.scrollTo({
              left: scrollPosition,
              behavior: "smooth",
            });
          }
          return nextIndex; // Update state for the next render
        });
      }
    }, 2000); // 2 seconds delay as requested

    // Cleanup function to clear the interval when the component unmounts or dependencies change
    return () => clearInterval(interval);
  }, [isPaused, totalSlides, cardsPerSlide]); // Dependencies: isPaused controls the loop

  // Recalibrate the scroll position if the window is resized (which changes card width)
  useEffect(() => {
    const handleResize = () => {
      // We need to re-scroll to the current index after resize to maintain position
      if (carouselRef.current) {
        const cardElement = carouselRef.current.querySelector(".snap-center");
        const cardWidth = cardElement ? cardElement.offsetWidth : 0;
        const scrollPosition = currentIndex * cardsPerSlide * cardWidth;

        // Use instant scroll for resize
        carouselRef.current.scrollTo({
          left: scrollPosition,
          behavior: "instant",
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex, cardsPerSlide]);

  const goPrev = () => handleSlide(currentIndex - 1);
  const goNext = () => handleSlide(currentIndex + 1);

  return (
    <div className=" bg-white font-['Inter'] mb-10 flex flex-col items-center py-12 px-4 sm:px-8">
      {/* Custom CSS to hide the scrollbar (as it's controlled by dots/buttons) */}
      <style jsx="true">{`
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>

      {/* Header Section */}
      <header className="text-center mt-12 mb-12 max-w-xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">
          Meets{" "}
          <span className="relative inline-block text-[#FD6309]">Our</span> Team
        </h2>
        <div className="flex justify-center">
          <div className="w-24 h-4 border-t-4 border-[#FD6309] rounded-t-full"></div>
        </div>
        <p className="text-gray-600 text-sm sm:text-base">
          Education is the most powerful weapon you can use to change the world
        </p>
      </header>

      {/* Hidden Navigation Arrows (visible on large screens to trigger slide function) */}

      {/* Cards Container (The main scrolling area) */}
      <div
        className="relative w-full max-w-7xl"
        // Pause auto-play when the user hovers over the carousel container
        onMouseEnter={() => setIsPaused(true)}
        // Resume auto-play when the user stops hovering
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={carouselRef}
          // Tailwind classes for horizontal scroll, hiding scrollbar, and snap scrolling
          className="flex overflow-x-scroll hide-scrollbar snap-x snap-mandatory transition-all duration-300 ease-in-out cursor-grab active:cursor-grabbing"
          // Allow dragging on touch devices
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="mt-8 flex space-x-3">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlide(index)}
            onMouseDown={() => setIsPaused(true)}
            className="relative w-3 h-3 rounded-full bg-gray-300 overflow-hidden focus:outline-none"
            aria-label={`Go to slide ${index + 1}`}
          >
            <span
              className={`absolute inset-0 rounded-full bg-[#066466] transition-all duration-500 ${
                currentIndex === index
                  ? "scale-100 opacity-100"
                  : "scale-0 opacity-0"
              }`}
            ></span>
          </button>
        ))}
      </div>

      {/* Floating Chat/Support Icon (Aesthetic element from the original design) */}
    </div>
  );
}
