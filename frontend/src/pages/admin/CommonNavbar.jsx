import React from "react";
import { Link } from "react-router-dom";
import { Menu, Bell, User, Search } from "lucide-react";

const CommonNavbar = ({ open, setOpen }) => {
  return (
    <header className="h-[80px] bg-white border-b border-[#D6DDEB] px-8 flex items-center justify-between sticky top-0 z-[100] font-epilogue z-50">
      {/* Left - Mobile Menu Toggle */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setOpen(!open)}
          className="xl:hidden p-2 text-[#25324B] hover:bg-[#F8F9FB] rounded-lg transition-colors border border-[#D6DDEB] shadow-sm"
        >
          <Menu size={24} />
        </button>
        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#F8F9FB] border border-[#D6DDEB] rounded-lg w-[320px] shadow-sm focus-within:border-Primary transition-all">
          <Search size={18} className="text-[#7C8493]" />
          <input
            type="text"
            placeholder="Search for job, application..."
            className="bg-transparent border-none outline-none w-full text-[#25324B] text-sm"
          />
        </div>
      </div>

      {/* Right - Profile & Notifications */}
      <div className="flex items-center gap-6">
        {/* Post Job Button - Mobile Only or extra visibility */}
        {/* <Link
          to="/dashboard"
          className="hidden lg:flex items-center gap-2 bg-Primary text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-[#3b36c4] shadow-lg shadow-[#4640de]/20 transition-all"
        >
          Post a Job
        </Link> */}

        <button className="relative p-2 text-[#25324B] hover:bg-[#F8F9FB] rounded-lg transition-colors group">
          <Bell size={24} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-[#FF6550] rounded-full border-2 border-white group-hover:scale-110 transition-transform"></span>
        </button>

        <div className="h-10 w-[1px] bg-[#D6DDEB] mx-1"></div>

        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-full bg-Primary/10 flex items-center justify-center border-2 border-transparent group-hover:border-Primary transition-all">
            <User size={20} className="text-Primary" />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-bold text-[#25324B] leading-none text-sm group-hover:text-Primary transition-colors">
              Admin QuickHire
            </span>
            <span className="text-[#7C8493] text-xs font-medium mt-1 uppercase tracking-wider">
              Super Admin
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CommonNavbar;
