import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const FooterLink = ({ href, children }) => (
  <li>
    <a
      href={href}
      className="text-white hover:text-white transition-colors duration-200 text-sm relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#Fd6309] transition-all duration-200 group-hover:w-full"></span>
    </a>
  </li>
);

const FooterSectionTitle = ({ children }) => (
  <h4 className="text-lg font-semibold text-[#Fd6309] mb-4">{children}</h4>
);

const Footer = () => {
  return (
    <footer className="relative bg-[#0356A2] text-white pt-6 pb-6 overflow-hidden">
      {/* === LEFT Background Image === */}
      <img
        src="/footerfreight.png"
        alt="Left background"
        className="absolute left-2 sm:left-10 md:left-16 top-80 md:top-40 sm:bottom-16 md:-bottom-10 w-[400px] sm:w-[200px] md:w-[500px] opacity-20 pointer-events-none select-none"
      />

      {/* === RIGHT Background Image === */}
      <img
        src="/footership.png"
        alt="Right background"
        className="absolute right-0 bottom-56 sm:bottom-4 w-[400px] sm:w-[300px] md:w-[500px] opacity-20 pointer-events-none select-none"
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 border-b border-white border-dashed pb-6">
          <div className="col-span-1 md:col-span-1 ">
            <div className="flex items-center justify-center md:justify-between bg-amber-50 py-4 px-3 rounded-md">
              <img
                src="/vpower_logo.png"
                alt="V Power Logistics Logo"
                className="w-40 sm:w-48 md:w-48 h-10 object-contain"
              />
            </div>

            <div className="mt-3 space-y-3 text-white w-full sm:w-64 md:w-56 lg:w-72">
              <div className="text-sm">
                <p className="flex items-start mb-1">
                  <FaMapMarkerAlt className="w-4 h-4 mr-2 mt-1 text-[#Fd6309]" />
                  <span className="text-[#Fd6309] font-semibold">India</span>
                </p>
                <p className="ml-6">
                  C-14, Udyog Vihar Phase V, Sector 19, V Power Logistics, Gurugram, Haryana 122008
                </p>
              </div>
              <div className="text-sm">
                <p className="flex items-start mb-1">
                  <FaMapMarkerAlt className="w-4 h-4 mr-2 mt-1 text-[#Fd6309]" />
                  <span className="text-[#Fd6309] font-semibold">USA</span>
                </p>
                <p className="ml-6">100 N HOWARD ST E R, SPOKANE WA, 99201</p>
                <p className="ml-6 mt-1">53 Frontage Rd, 1st Floor, Hampton, New Jersey 08827</p>
              </div>

              {/* Email */}
              <div className="flex items-center text-sm flex-wrap">
                <FaEnvelope className="w-4 h-4 mr-2 text-[#Fd6309]" />
                <a href="mailto:Ourstudio@hellc.com" className="hover:text-white relative group break-all">
                  Ourstudio@hellc.com
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#Fd6309] transition-all duration-200 group-hover:w-full"></span>
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center text-sm">
                <FaPhoneAlt className="w-4 h-4 mr-2 text-[#Fd6309]" />
                <a href="tel:+13866883295" className="hover:text-white relative group">
                  +1 386-688-3295
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#Fd6309] transition-all duration-200 group-hover:w-full"></span>
                </a>
              </div>
            </div>
          </div>

          {/* === Service Column === */}
          <div className="mt-8 sm:mt-10 md:mt-12 md:ml-28 w-full sm:w-64 md:w-56">
            <FooterSectionTitle>Service</FooterSectionTitle>
            <ul className="space-y-2">
              <FooterLink href="#">Air Freight</FooterLink>
              <FooterLink href="#">Road Freight</FooterLink>
              <FooterLink href="#">Warehouse</FooterLink>
              <FooterLink href="#">FLT/LTL</FooterLink>
              <FooterLink href="#">Customer Clearance</FooterLink>
              <FooterLink href="#">International Courier</FooterLink>
            </ul>
          </div>

          {/* === Company Column === */}
          <div className="mt-8 sm:mt-10 md:mt-12 md:ml-18">
            <FooterSectionTitle>Company</FooterSectionTitle>
            <ul className="space-y-2">
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Service</FooterLink>
              <FooterLink href="#">Career</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
            </ul>
          </div>

          {/* === Social Media Column === */}
          <div className="mt-8 sm:mt-10 md:mt-12">
            <FooterSectionTitle>Our Social Media</FooterSectionTitle>
            <ul className="space-y-2">
              <FooterLink href="#">Dribbble</FooterLink>
              <FooterLink href="#">LinkedIn</FooterLink>
              <FooterLink href="#">Youtube</FooterLink>
              <FooterLink href="#">Instagram</FooterLink>
              <FooterLink href="#">Facebook</FooterLink>
              <FooterLink href="#">Twitter</FooterLink>
            </ul>
          </div>

          {/* === Newsletter Column === */}
          <div className="mt-8 sm:mt-10 md:mt-12">
            <FooterSectionTitle>Join a Newsletter</FooterSectionTitle>
            <form>
              <label htmlFor="email" className="sr-only">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                className="w-full p-3 mb-3 bg-white text-sm text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-24 sm:w-28 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-200 relative group"
              >
                Send
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#Fd6309] transition-all duration-200 group-hover:w-full"></span>
              </button>
            </form>
          </div>
        </div>

        {/* === Bottom Bar === */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 text-xs text-white text-center sm:text-left">
          <p className="mb-2 sm:mb-0">© V POWER LOGISTICS 2025 | ALL RIGHTS RESERVED</p>
          <p>
            <a href="#" className="hover:text-white mr-4 relative group">
              PRIVACY POLICY
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#Fd6309] transition-all duration-200 group-hover:w-full"></span>
            </a>
            /
            <a href="#" className="hover:text-white ml-4 relative group">
              TERMS & CONDITION
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#Fd6309] transition-all duration-200 group-hover:w-full"></span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
