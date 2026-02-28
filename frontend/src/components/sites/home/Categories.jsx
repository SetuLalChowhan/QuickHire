import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Components
import CategoryCard from "@/components/sites/common/CategoryCard";
import SectionHeader from "@/components/sites/common/SectionHeader";

// Utilities & Data
import { categoriesData } from "@/utils/data";

const Categories = () => {
  return (
    <section className="section-padding-x">
      {/* Header */}
      <SectionHeader
        title="Explore by"
        blueText="category"
        linkText="Show all jobs"
        linkTo="/jobs"
      />

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-4">
        {categoriesData.map((cat, index) => (
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
