import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Calendar,
  Headset,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import { TbPhoneCall } from "react-icons/tb";
import { IoIosPeople } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

export default function Navbar() {
  const [isShippingOpen, setIsShippingOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth hover with delay
  let dropdownTimer;
  const handleMouseEnter = () => {
    clearTimeout(dropdownTimer);
    setIsShippingOpen(true);
  };
  const handleMouseLeave = () => {
    dropdownTimer = setTimeout(() => setIsShippingOpen(false), 150);
  };

  return (
    <div
      className={`w-full font-sans z-50 fixed top-0 left-0 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Top Bar - Hidden on mobile, visible on tablet and up */}
      <div className="bg-[#0356A2] text-white text-sm py-2 hidden md:block">
        <div className="container mx-auto px-4 xl:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex items-center mb-2 lg:mb-0">
              <IoIosPeople className="w-5 h-5 mr-2" />
              <span className="text-xs font-medium">
                Member of The V-POWER LOGISTICS
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6 text-xs">
              <div className="flex items-center gap-2">
                <Calendar className="w-3 h-3" />
                <span className="whitespace-nowrap">MON-FRI: 05:00 PM – 02:00 AM</span>
              </div>
              <div className="flex items-center gap-2">
                <TbPhoneCall className="w-3 h-3" />
                <span>Hotline: +91 9310023990</span>
              </div>
              <div className="flex items-center gap-2">
                <Headset className="w-3 h-3" />
                <span className="hidden xl:inline">Support: contact@vpower-logistics.com</span>
                <span className="xl:hidden">Support</span>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-4 h-4 cursor-pointer hover:text-blue-200 transition-colors" />
                <a href="https://www.linkedin.com/company/v-power-logistics/?originalSubdomain=in" className="target-blank"><Linkedin className="w-4 h-4 cursor-pointer hover:text-blue-200 transition-colors" /></a>
                <Twitter className="w-4 h-4 cursor-pointer hover:text-blue-200 transition-colors" />
                <Youtube className="w-4 h-4 cursor-pointer hover:text-blue-200 transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white relative">
        <div className="bg-[#0356A2] nav-clip-right w-full h-full absolute top-0 left-0"></div>

        <div className="container mx-auto px-4 xl:px-6 relative z-10">
          <div className="flex items-center justify-between py-3 lg:py-0">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/vpower_logo.png"
                alt="V Power Logistics Logo"
                className="w-24 h-10 lg:w-56 lg:h-12 xl:w-60 xl:h-14 object-contain"
              />
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 absolute left-1/2 transform -translate-x-1/2">
              <a
                href="/"
                className="text-gray-800 hover:text-[#0356A2] font-medium transition-colors duration-200 py-6"
              >
                Home
              </a>
              <a
                href="/aboutus"
                className="text-gray-800 hover:text-[#0356A2] font-medium transition-colors duration-200 py-6"
              >
                About
              </a>

              {/* Shipping Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1 text-gray-800 hover:text-[#0356A2] font-medium transition-colors duration-200 py-6">
                  Shipping
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isShippingOpen ? 'rotate-180' : ''}`} />
                </button>

                {isShippingOpen && (
                  <div
                    className="absolute top-full left-0 mt-0 w-64 bg-white shadow-xl rounded-lg z-50 border border-gray-100"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <a
                      href="/shippingselector"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0356A2] hover:text-white transition-colors duration-200 border-b border-gray-100 last:border-b-0 first:rounded-t-lg last:rounded-b-lg"
                    >
                      Ship Quick & Simple
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#0356A2] hover:text-white transition-colors duration-200 border-b border-gray-100 last:border-b-0 first:rounded-t-lg last:rounded-b-lg"
                    >
                      Ship All Features
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#0356A2] hover:text-white transition-colors duration-200 border-b border-gray-100 last:border-b-0 first:rounded-t-lg last:rounded-b-lg"
                    >
                      Get Transit Times & Rate
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#0356A2] hover:text-white transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                    >
                      Packaging & Shipping Supplies
                    </a>
                  </div>
                )}
              </div>

              <a
                href="/services"
                className="text-gray-800 hover:text-[#0356A2] font-medium transition-colors duration-200 py-6"
              >
                Service
              </a>
              <a
                href="/contactus"
                className="text-gray-800 hover:text-[#0356A2] font-medium transition-colors duration-200 py-6"
              >
                Contact
              </a>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 lg:gap-6 relative z-20">
              {/* Phone icon - Hidden on mobile, visible on tablet and up */}
              <div className="hidden xl:flex absolute top-1/2 -left-20 lg:-left-18 border border-[#0356A2] transform -translate-y-1/2 bg-white text-[#0356A2] rounded-full p-2 shadow-md cursor-pointer hover:bg-[#0356A2] hover:text-white transition-colors duration-300">
                <TbPhoneCall className="w-4 h-4" />
              </div>

              <a href="/login" className="hidden sm:block">
                <button className="px-4 py-2 lg:px-5 lg:py-2.5 bg-white border border-white text-[#0356A2] rounded-full text-sm font-medium shadow-sm hover:bg-[#0356A2] hover:text-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                  Login
                </button>
              </a>

              <button className="hidden sm:flex group px-4 py-2 lg:px-5 lg:py-2.5 bg-white border border-white text-[#0356A2] rounded-full text-sm font-medium items-center gap-2 shadow-sm transition-all duration-300 hover:bg-[#0356A2] hover:text-white hover:shadow-lg transform hover:-translate-y-0.5">
                Get a Quote
                <FaArrowRight className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* Mobile CTA - Only login button */}
              <a href="/login" className="sm:hidden">
                <button className="px-3 ml-32 py-1.5 bg-white border border-[#0356A2] text-[#0356A2] rounded-full text-xs font-medium shadow-sm">
                  Login
                </button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-800 z-20 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-200 py-4 z-50 max-h-[80vh] overflow-y-auto">
              <div className="container mx-auto px-4">
                <nav className="flex flex-col">
                  <a
                    href="/"
                    className="text-gray-800 hover:text-[#0356A2] font-medium py-3 px-4 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </a>
                  <a
                    href="/aboutus"
                    className="text-gray-800 hover:text-[#0356A2] font-medium py-3 px-4 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </a>

                  {/* Shipping Mobile Dropdown */}
                  <div className="border-b border-gray-100">
                    <button
                      onClick={() => setIsShippingOpen(!isShippingOpen)}
                      className="flex items-center justify-between w-full text-gray-800 hover:text-[#0356A2] font-medium py-3 px-4 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    >
                      Shipping
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isShippingOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isShippingOpen && (
                      <div className="ml-4 mt-1 mb-2 flex flex-col gap-1">
                        <a
                          href="/shippingselector"
                          className="text-gray-600 hover:text-[#0356A2] py-2 px-4 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Ship Quick & Simple
                        </a>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-[#0356A2] py-2 px-4 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Ship All Features
                        </a>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-[#0356A2] py-2 px-4 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Get Transit Times & Rate
                        </a>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-[#0356A2] py-2 px-4 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Packaging & Shipping Supplies
                        </a>
                      </div>
                    )}
                  </div>

                  <a
                    href="/services"
                    className="text-gray-800 hover:text-[#0356A2] font-medium py-3 px-4 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Service
                  </a>
                  <a
                    href="/contactus"
                    className="text-gray-800 hover:text-[#0356A2] font-medium py-3 px-4 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </a>
                </nav>

                {/* Mobile Contact Info */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex flex-col gap-3 text-sm text-gray-600">
                    <div className="flex items-center gap-3">
                      <TbPhoneCall className="w-4 h-4 text-[#0356A2]" />
                      <span>+91 9310023990</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Headset className="w-4 h-4 text-[#0356A2]" />
                      <span>contact@vpower-logistics.com</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mt-6">
                    <a href="/login" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                      <button className="w-full px-6 py-3 border-2 border-[#0356A2] text-[#0356A2] rounded-full font-medium hover:bg-[#0356A2] hover:text-white transition-colors duration-300">
                        Login
                      </button>
                    </a>
                    <button 
                      className="w-full px-6 py-3 bg-[#0356A2] text-white rounded-full font-medium hover:bg-blue-800 flex items-center justify-center gap-2 transition-colors duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Get a Quote
                      <FaArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Social Icons in Mobile Menu */}
                  <div className="flex items-center justify-center gap-4 mt-6 pt-4 border-t border-gray-200">
                    <Instagram className="w-5 h-5 cursor-pointer text-gray-600 hover:text-[#0356A2] transition-colors" />
                    <a href="https://www.linkedin.com/company/v-power-logistics/?originalSubdomain=in" className="target-blank"><Linkedin className="w-5 h-5 cursor-pointer text-gray-600 hover:text-[#0356A2] transition-colors" /></a>
                    <Twitter className="w-5 h-5 cursor-pointer text-gray-600 hover:text-[#0356A2] transition-colors" />
                    <Youtube className="w-5 h-5 cursor-pointer text-gray-600 hover:text-[#0356A2] transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .nav-clip-right {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 75% 100%, 68% 0);
        }
        
        @media (max-width: 1024px) {
          .nav-clip-right {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 60% 100%, 50% 0);
          }
        }
        
        @media (max-width: 768px) {
          .nav-clip-right {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 40% 100%, 30% 0);
          }
        }
      `}</style>
    </div>
  );
}