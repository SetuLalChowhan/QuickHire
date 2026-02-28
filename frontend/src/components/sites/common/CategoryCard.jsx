import React from "react";
import { ArrowRight } from "lucide-react";

const CategoryCard = ({ icon: Icon, title, jobs }) => {
  return (
    <div className="group cursor-pointer border border-[#D6DDEB] lg:p-8 p-4 transition-all duration-300 hover:bg-Primary hover:border-Primary">
      <div className="flex lg:flex-col lg:items-start items-center justify-between lg:gap-8 w-full">
        {/* Icon */}
        <div className="text-Primary group-hover:text-white transition-colors">
          <Icon strokeWidth={1.5} className="lg:size-12 size-10" />
        </div>

        {/* Text and Arrow for Desktop (hidden on mobile) */}
        <div className="hidden lg:flex flex-col gap-3">
          <h3 className="font-clash-display text-[24px] font-semibold text-[#25324B] group-hover:text-white transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-3">
            <p className="font-epilogue text-[18px] text-Secondary group-hover:text-white/80 transition-colors">
              {jobs} jobs available
            </p>
            <ArrowRight
              size={20}
              className="text-[#25324B] group-hover:text-white transition-colors"
            />
          </div>
        </div>

        {/* Mobile Layout Text */}
        <div className="lg:hidden flex-1 px-4">
          <h3 className="font-clash-display text-[20px] font-semibold text-[#25324B] group-hover:text-white transition-colors">
            {title}
          </h3>
          <p className="font-epilogue lg:text-[18px] font-normal text-Secondary group-hover:text-white/80 transition-colors">
            {jobs} jobs available
          </p>
        </div>

        {/* Mobile Arrow */}
        <div className="lg:hidden text-[#25324B] group-hover:text-white transition-colors">
          <ArrowRight size={24} />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
