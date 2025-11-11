import React from "react";
import { PiGreaterThanBold } from "react-icons/pi";

// Removed: import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// The Fa icons have been replaced with inline SVGs below to resolve the dependency error.

// Primary color matching the design for accents
const primaryBlue = "#0356A2";

// Icon components using inline SVG (replacing Fa icons)
const PhoneIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-4.62-4.62A19.79 19.79 0 0 1 2 4.18a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2.18 17 17 0 0 0 .81 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 17 17 0 0 0 2.81.81 2 2 0 0 1 2.18 2Z" />
  </svg>
);

const MailIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const MapPinIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ContactUs = () => {
  // Function to simulate sending a message (no actual API call)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted. This is a simulation.");
    // Replace with actual form submission logic
    alert("Message sent successfully!");
  };

  // Utility to handle alert replacement
  const alert = (message) => {
    // In a real application, replace this with a custom modal component
    console.log(`Notification: ${message}`);
    // Simple DOM manipulation for a temporary non-blocking message box
    const msgBox = document.createElement("div");
    msgBox.textContent = message;
    msgBox.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${primaryBlue};
      color: white;
      padding: 15px 25px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      z-index: 1000;
      font-family: 'Inter', sans-serif;
    `;
    document.body.appendChild(msgBox);
    setTimeout(() => document.body.removeChild(msgBox), 3000);
  };

  return (
    <div className="bg-[#DFE6EC] w-full font-sans">
      {/* Header/Banner Section - Keeping original structure as it was not in the design image */}
      <div
        className="relative h-[60vh] bg-cover bg-center flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/contactus.png')",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Main Heading */}
        <h1 className="relative text-4xl md:text-5xl font-bold text-white z-10">
          Contact Us
        </h1>

        {/* Breadcrumb */}
        <p className="relative mt-2 text-lg z-10 text-white flex items-center gap-2">
          <span className="text-blue-300 cursor-pointer hover:underline transition">
            Home
          </span>
          <PiGreaterThanBold className="text-white text-sm" />
          <span>Contact Us</span>
        </p>
      </div>

      {/* Contact Section: Form and Info Cards */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-[55%_42%] gap-10">
        {/* Left Side - Form Card */}
        <div className="bg-white rounded-xl shadow-lg shadow-[#0356A2] border border-gray-100 p-8 lg:p-10">
          <p className="text-sm uppercase text-[#1F4E79]  mb-2">
            → Send Us Email ←
          </p>
          <h2 className="text-4xl font-medium mb-2 text-gray-800">
            Feel Free to Write
          </h2>
          <p className="text-gray-800 mb-8">
            Fill out the form below or schedule a meeting with us at your
            convenience.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name.."
                  // Style changes to match image: light gray bg, subtle focus ring
                  className="w-full border border-gray-300 rounded-sm px-4 py-3 bg-gray-50 text-gray-800 placeholder-gray-500 focus:ring-1 focus:ring-gray-700 outline-none transition duration-150"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email.."
                  // Style changes to match image: light gray bg, subtle focus ring
                  className="w-full border border-gray-300 rounded-sm px-4 py-3 bg-gray-50 text-gray-800 placeholder-gray-500 focus:ring-1 focus:ring-gray-700 outline-none transition duration-150"
                />
              </div>
            </div>

            {/* Country + Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Country
                </label>
                <select
                  // Style changes to match image: light gray bg, subtle focus ring
                  className="w-full border border-gray-300 rounded-sm px-4 py-3 bg-gray-50 text-gray-700 focus:ring-1 focus:ring-gray-700 outline-none transition duration-150"
                >
                  <option className="text-gray-500">
                    Select the country..
                  </option>
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>Canada</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Number
                </label>
                <div
                  // Combined input container styling
                  className="flex items-center border border-gray-300 rounded-sm bg-gray-50 text-gray-800 focus-within:ring-1 focus-within:ring-gray-700 transition duration-150"
                >
                  {/* Flag and Code - Styled to look integrated */}
                  <div className="flex items-center pl-4 pr-3 py-3 border-r border-gray-300 flex-shrink-0">
                    <img
                      src="https://flagcdn.com/w20/in.png"
                      alt="India"
                      className="w-5 h-auto mr-2 rounded-sm"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://placehold.co/20x15/cccccc/333333?text=IN";
                      }}
                    />
                    <span className="text-gray-700 text-sm font-medium">
                      +91
                    </span>
                  </div>

                  <input
                    type="tel"
                    placeholder="Phone Num.."
                    className="w-full outline-none bg-transparent px-3 py-3"
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Enter a Message.."
                // Style changes to match image: slightly darker gray bg for textarea
                className="w-full border border-gray-300 rounded-sm px-4 py-3 bg-gray-100 text-gray-800 placeholder-gray-500 focus:ring-1 focus:ring-gray-700 outline-none transition duration-150"
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-2">
              <button
                type="submit"
                // Button style matches image: subtle border, blue accent text, hover effect
                className={`px-6 py-3 border text-black rounded-lg border-[#0356A2] font-medium hover:bg-[#0356A2] hover:text-white transition duration-300 shadow-sm`}
              >
                Send Message
              </button>
              <button
                type="reset"
                // Reset button style: subtle border, dark text, light hover
                className="px-6 py-3 border border-[#0356A2] text-black rounded-lg font-medium hover:bg-[#0356A2] hover:text-white transition duration-300 shadow-sm"
              >
                Reset
              </button>
            </div>
          </form>
        </div>

        {/* Right Side - Company Info Card */}
        <div className="bg-white rounded-xl shadow-lg shadow-[#0356A2] border border-gray-100 p-8 lg:p-10">
          <p className="text-sm uppercase text-[#1F4E79] mb-2">
            → Need Any Help? ←
          </p>
          <h2 className="text-4xl font-medium mb-2 text-gray-800">
            Get in touch with us
          </h2>
          <p className="text-gray-800 mb-10 text-center">
            Cloud computing is a model for delivering on-demand computing
            resources over the internet. It can benefit your resources.
          </p>

          <div className="space-y-8">
            {/* Phone Info */}
            <div className="flex items-start gap-4">
              {/* Icon Style: large icon container with shadow */}
              <div
                className={`bg-[${primaryBlue}] text-white p-4 rounded-xl shadow-lg flex-shrink-0`}
                style={{ backgroundColor: primaryBlue }}
              >
                <PhoneIcon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-lg text-gray-800 font-semibold mb-1">
                  Have any questions ?
                </p>
                <p className="text-gray-600">Free +91 9310023990</p>
              </div>
            </div>

            {/* Email Info */}
            <div className="flex items-start gap-4">
              {/* Icon Style: large icon container with shadow */}
              <div
                className={`bg-[${primaryBlue}] text-white p-4 rounded-xl shadow-lg flex-shrink-0`}
                style={{ backgroundColor: primaryBlue }}
              >
                <MailIcon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-lg text-gray-800 font-semibold mb-1">
                  Write Email
                </p>
                <p className="text-gray-600">contact@vpower-logistics.com</p>
              </div>
            </div>

            {/* Address Info */}
            <div className="flex items-start gap-4">
              {/* Icon Style: large icon container with shadow */}
              <div
                className={`bg-[${primaryBlue}] text-white p-4 rounded-xl shadow-lg flex-shrink-0`}
                style={{ backgroundColor: primaryBlue }}
              >
                <MapPinIcon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-lg text-gray-800 font-semibold mb-1">
                  Visit anytime
                </p>
                <p className="text-blue-400 font-light text-base mb-1">India</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  C-14, Udyog Vihar Phase V, Sector 19, V Power Logistics,
                  Gurugram, Haryana, India 122008
                </p>
                <p className="text-blue-400 font-light text-base mt-3 mb-1">
                  Usa
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  100 N HOWARD ST STE R, SPOKANE WA, 99201
                  <br />
                  53 Frontage Rd, 1st Floor, Hampton, New Jersey 08827
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- START OF REVISED MAP SECTION --- */}
      <div className="h-[700px] py-12  max-w-8xl px-4 sm:px-6 lg:px-8 relative">
        {/* Map Container - The entire map area */}
        <div className="h-full w-full rounded-xl overflow-hidden shadow-xl bg-white">
          {/* Company Location Heading (Matching the image style) */}
          <div className="p-4 ml-12 mt-6 mb-6">
            <h2 className="text-3xl font-Pridi text-gray-800">
              Company location
            </h2>
          </div>

          {/* Image of the Map (The screenshot you provided) */}
          {/* Note: In a real app, this would be an actual interactive map component */}
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.732252508543!2d77.08016877531693!3d28.49450907574417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d193a0b9ceeb3%3A0xa56ed23f5c4aef10!2s14%2C%20Phase%20V%2C%20Udyog%20Vihar%2C%20Sector%2019%2C%20Gurugram%2C%20Haryana%20122016!5e0!3m2!1sen!2sin!4v1730978968505!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/* --- END OF REVISED MAP SECTION --- */}
    </div>
  );
};

export default ContactUs;
