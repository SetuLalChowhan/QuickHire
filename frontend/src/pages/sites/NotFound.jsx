import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import Logo from "@/assets/images/Logo.png";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FB] flex flex-col items-center justify-center p-6 text-center">
      {/* Branding */}
      <Link to="/" className="mb-12">
        <img src={Logo} alt="QuickHire" className="h-10 object-contain" />
      </Link>

      {/* 404 Content */}
      <div className="max-w-[600px] w-full">
        <h1 className="font-clash-display text-[120px] md:text-[180px] font-bold text-Primary leading-none opacity-20">
          404
        </h1>
        <div className="-mt-12 md:-mt-20">
          <h2 className="font-clash-display text-[32px] md:text-[48px] font-bold text-[#25324B]">
            Oops! Page Not Found
          </h2>
          <p className="font-epilogue text-[#7C8493] text-lg mt-4 max-w-[480px] mx-auto">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Link
            to="/"
            className="flex items-center gap-2 bg-Primary text-white px-8 py-4 rounded-lg font-bold font-epilogue hover:bg-[#3b36c4] shadow-lg shadow-[#4640de]/20 transition-all w-full sm:w-auto"
          >
            <Home size={20} />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-white text-[#25324B] border border-[#D6DDEB] px-8 py-4 rounded-lg font-bold font-epilogue hover:bg-[#F8F9FB] transition-all w-full sm:w-auto"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>
      </div>

      {/* Illustration Subtext */}
      <div className="mt-20 opacity-40">
        <p className="font-epilogue text-sm text-[#7C8493]">
          &copy; 2026 QuickHire. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
