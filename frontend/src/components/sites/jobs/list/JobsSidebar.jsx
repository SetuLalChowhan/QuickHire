import React from "react";
import { Search, MapPin, X, LayoutGrid } from "lucide-react";

const JobsSidebar = ({
  searchInput,
  setSearchInput,
  locationInput,
  setLocationInput,
  categoryInput,
  setCategoryInput,
  handleSearch,
  clearFilters,
}) => {
  return (
    <aside className="w-full lg:w-[320px] shrink-0">
      <div className="bg-white lg:p-8 p-4 border border-[#D6DDEB] rounded-lg sticky top-[100px]">
        <div className="flex items-center justify-between mb-8 border-b border-[#D6DDEB] pb-4">
          <h3 className="text-[18px] font-bold text-[#25324B]">Filter Jobs</h3>
          <button
            onClick={clearFilters}
            className="text-Primary text-[14px] font-bold hover:underline flex items-center gap-1.5"
          >
            <X size={14} /> Clear All
          </button>
        </div>

        <div className="flex flex-col gap-8">
          <div className="space-y-4">
            <label className="text-[16px] font-bold text-[#25324B]">
              Keyword
            </label>
            <div className="relative group">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A8ADB7] group-focus-within:text-Primary transition-colors"
              />
              <input
                type="text"
                placeholder="Keyword..."
                className="w-full pl-12 pr-4 py-3.5 bg-[#F8F9FB] border border-[#D6DDEB] rounded outline-none text-[#202430] font-medium transition-all focus:border-Primary focus:bg-white"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-[16px] font-bold text-[#25324B]">
              Location
            </label>
            <div className="relative group">
              <MapPin
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A8ADB7] group-focus-within:text-Primary transition-colors"
              />
              <input
                type="text"
                placeholder="City, Country..."
                className="w-full pl-12 pr-4 py-3.5 bg-[#F8F9FB] border border-[#D6DDEB] rounded outline-none text-[#202430] font-medium transition-all focus:border-Primary focus:bg-white"
                value={locationInput}
                onChange={(e) => setLocationInput(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-[16px] font-bold text-[#25324B]">
              Category
            </label>
            <div className="relative group">
              <LayoutGrid
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A8ADB7] group-focus-within:text-Primary transition-colors"
              />
              <input
                type="text"
                placeholder="Category..."
                className="w-full pl-12 pr-4 py-3.5 bg-[#F8F9FB] border border-[#D6DDEB] rounded outline-none text-[#202430] font-medium transition-all focus:border-Primary focus:bg-white"
                value={categoryInput}
                onChange={(e) => setCategoryInput(e.target.value)}
              />
            </div>
          </div>

          <button
            onClick={() => handleSearch()}
            className="w-full bg-Primary text-white font-bold py-4 rounded hover:bg-[#3b36c4] shadow-lg shadow-Primary/20 transition-all text-[16px] mt-4"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </aside>
  );
};

export default JobsSidebar;
