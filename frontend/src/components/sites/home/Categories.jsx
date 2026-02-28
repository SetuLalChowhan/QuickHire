import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Palette,
  TrendingUp,
  Megaphone,
  Wallet,
  Monitor,
  Code,
  Briefcase,
  Users,
} from "lucide-react";

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

const Categories = () => {
  const categories = [
    { icon: Palette, title: "Design", jobs: 235 },
    { icon: TrendingUp, title: "Sales", jobs: 756 },
    { icon: Megaphone, title: "Marketing", jobs: 140 },
    { icon: Wallet, title: "Finance", jobs: 325 },
    { icon: Monitor, title: "Technology", jobs: 436 },
    { icon: Code, title: "Engineering", jobs: 542 },
    { icon: Briefcase, title: "Business", jobs: 211 },
    { icon: Users, title: "Human Resource", jobs: 346 },
  ];

  return (
    <section className="section-padding-x">
      {/* Header */}
      <div className="flex items-end justify-between mb-12">
        <h2 className="font-clash-display text-[32px] lg:text-[48px] font-semibold text-[#25324B]">
          Explore by <span className="text-[#26A4FF]">category</span>
        </h2>
        <Link
          to="/jobs"
          className="hidden lg:flex items-center gap-2 text-Primary font-semibold font-epilogue hover:gap-4 transition-all"
        >
          Show all jobs <ArrowRight size={20} />
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-4">
        {categories.map((cat, index) => (
          <CategoryCard key={index} {...cat} />
        ))}
      </div>

      {/* Mobile Footer Link */}
      <div className="lg:hidden mt-10">
        <Link
          to="/jobs"
          className="flex items-center gap-2 text-Primary font-bold font-epilogue"
        >
          Show all jobs <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
};

export default Categories;
