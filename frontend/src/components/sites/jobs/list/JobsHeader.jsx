import React from "react";
import { Search, MapPin } from "lucide-react";
import HeaderBg from "@/assets/images/withoutAvatar.png";

const JobsHeader = ({
  searchInput,
  setSearchInput,
  locationInput,
  setLocationInput,
  handleSearch,
}) => {
  return (
    <div className="relative h-auto py-16 lg:py-24 bg-Primary/5 flex items-center mb-12">
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url(${HeaderBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="section-padding-x relative z-10 w-full max-w-[1440px] mx-auto">
        <div className="max-w-[800px] mb-12">
          <h1 className="text-[42px] lg:text-[64px] font-bold text-[#25324B] leading-tight">
            Find your <span className="text-Primary">Dream Job</span>
          </h1>
          <p className="text-[#515B6F] text-[18px] lg:text-[20px] mt-6 leading-relaxed">
            Explore thousands of job opportunities from top companies and
            startups worldwide.
          </p>
        </div>

        <form
          onSubmit={handleSearch}
          className="flex flex-col lg:flex-row items-stretch lg:items-center bg-white p-3 shadow-2xl shadow-Primary/5 border border-[#D6DDEB] gap-4 lg:gap-0"
        >
          <div className="flex items-center gap-3 px-6 lg:border-r border-[#D6DDEB] flex-1">
            <Search className="text-Primary" size={24} />
            <input
              type="text"
              placeholder="Job title or keyword"
              className="w-full h-12 outline-none text-[#202430] placeholder:text-[#A8ADB7] text-[16px] font-medium bg-transparent"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-3 px-6 flex-1">
            <MapPin className="text-Primary" size={24} />
            <input
              type="text"
              placeholder="Location"
              className="w-full h-12 outline-none text-[#202430] placeholder:text-[#A8ADB7] text-[16px] font-medium bg-transparent"
              value={locationInput}
              onChange={(e) => setLocationInput(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-Primary text-white font-bold px-12 py-5 hover:bg-[#3b36c4] transition-all text-[16px] shadow-lg shadow-Primary/20"
          >
            Search Jobs
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobsHeader;
