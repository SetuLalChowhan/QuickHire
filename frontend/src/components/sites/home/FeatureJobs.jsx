import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Shared Components
import SectionHeader from "@/components/sites/common/SectionHeader";
import JobCard from "@/components/sites/common/JobCard";

// Utilities & Data
import { featuredJobsData } from "@/utils/data";
import { fadeIn, staggerContainer } from "@/utils/framer-motion";

const FeatureJobs = () => {
  return (
    <section className="section-padding-x">
      <SectionHeader
        title="Featured"
        blueText="jobs"
        linkText="Show all jobs"
        linkTo="/jobs"
      />

      {/* Desktop Grid */}
      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="hidden lg:grid grid-cols-4 gap-8"
      >
        {featuredJobsData.map((job, index) => (
          <motion.div key={index} variants={fadeIn("up", 0.1 * index)}>
            <JobCard {...job} />
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile Swiper Slider */}
      <div className="lg:hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={1.2}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2.2,
            },
          }}
          className="job-swiper pb-10"
        >
          {featuredJobsData.map((job, index) => (
            <SwiperSlide key={index}>
              <JobCard {...job} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile Footer Link */}
      <div className="lg:hidden mt-4">
        <Link
          to="/jobs"
          className="flex items-center gap-2 text-Primary font-bold font-epilogue"
        >
          Show all jobs <ArrowRight size={22} />
        </Link>
      </div>

      <style jsx global>{`
        .job-swiper .swiper-pagination-bullet {
          background: #4640de;
          opacity: 0.2;
        }
        .job-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default FeatureJobs;
