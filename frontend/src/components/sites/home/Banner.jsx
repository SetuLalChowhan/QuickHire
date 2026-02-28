import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BannerImg from "@/assets/images/BannerImage.png";
import BannerImgWithoutAvatar from "@/assets/images/withoutAvatar.png";
import LineImg from "@/assets/images/line.png";
import { fadeIn, staggerContainer } from "@/utils/framer-motion";

const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchInput) params.set("search", searchInput);
    if (locationInput) params.set("location", locationInput);
    navigate(`/jobs?${params.toString()}`);
  };

  return (
    <section className="section-padding-x relative overflow-hidden bg-[#F8F8FD] h-auto lg:h-[794px] flex items-center pb-[80px] pt-[80px] lg:pb-0">
      {/* Responsive Background Images */}
      <div
        className="absolute inset-0 z-0 hidden lg:block"
        style={{
          backgroundImage: `url(${BannerImg})`,
          backgroundPosition: "right bottom",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div
        className="absolute inset-0 z-0 lg:hidden block"
        style={{
          backgroundImage: `url(${BannerImgWithoutAvatar})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="absolute top-0 right-0 w-full h-full opacity-[0.05] pointer-events-none z-0">
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full text-Primary stroke-current"
          fill="none"
          strokeWidth="2"
        >
          <path d="M100 0 L500 400 M200 0 L500 300 M300 0 L500 200 M400 0 L500 100" />
          <path d="M0 100 L400 500 M0 200 L300 500 M0 300 L200 500 M0 400 L100 500" />
        </svg>
      </div>

      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-10 w-full lg:w-[60%]"
      >
        <div className="flex flex-col gap-8 lg:gap-10">
          <motion.div variants={fadeIn("up", 0.2)}>
            <div className="relative inline-block">
              <h1 className="font-clash-display text-[48px] lg:text-[72px] font-semibold text-[#25324B] leading-[64px] lg:leading-[80px] tracking-tight">
                Discover <br /> more than <br />
                <span className="text-[#26A4FF]">5000+ Jobs</span>
              </h1>
              <img
                src={LineImg}
                alt="Highlight Underline"
                className="absolute -bottom-8 lg:-bottom-10 left-0 w-full max-w-[320px] lg:max-w-[450px]"
              />
            </div>
            <p className="font-epilogue text-[18px] lg:text-[20px] text-Secondary mt-12 lg:mt-14 max-w-[510px] leading-relaxed">
              Great platform for the job seeker that searching for new career
              heights and passionate about startups.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.form
            onSubmit={handleSearch}
            variants={fadeIn("up", 0.4)}
            className="flex flex-col lg:flex-row items-center bg-white p-5 lg:p-6 shadow-2xl shadow-[#E9EBFD]/80 gap-6 lg:gap-8 max-w-[852px] group"
          >
            {/* Keyword Input */}
            <div className="flex items-start gap-4 flex-1 w-full relative">
              <Search className="text-Primary shrink-0 mt-1" size={24} />
              <div className="flex flex-col w-full gap-2">
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="w-full outline-none font-epilogue text-[16px] text-[#202430] placeholder:text-[#A8ADB7] bg-transparent"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <div className="h-[1px] w-full bg-[#D6DDEB] group-focus-within:bg-Primary transition-colors"></div>
              </div>
            </div>

            {/* Location Input */}
            <div className="flex items-start gap-4 flex-1 w-full relative">
              <MapPin className="text-Primary shrink-0 mt-1" size={24} />
              <div className="flex flex-col w-full gap-2">
                <input
                  type="text"
                  placeholder="Location..."
                  className="w-full outline-none font-epilogue text-[16px] text-[#202430] placeholder:text-[#A8ADB7] bg-transparent"
                  value={locationInput}
                  onChange={(e) => setLocationInput(e.target.value)}
                />
                <div className="h-[1px] w-full bg-[#D6DDEB] group-focus-within:bg-Primary transition-colors"></div>
              </div>
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="bg-Primary text-white font-epilogue font-bold px-10 py-5 whitespace-nowrap hover:bg-[#3b36c4] shadow-lg shadow-Primary/20 transition-all rounded-none w-full lg:w-auto text-[16px]"
            >
              Search my job
            </button>
          </motion.form>

          {/* Popular Tags */}
          <motion.p
            variants={fadeIn("up", 0.6)}
            className="font-epilogue text-[14px] lg:text-[16px] text-[#202430] mt-2"
          >
            <span className="text-[#202430] opacity-60">Popular : </span>
            <span className="font-medium opacity-80 flex-wrap inline-flex gap-2">
              <button
                onClick={() => {
                  setSearchInput("UI Designer");
                }}
                className="hover:text-Primary transition-colors"
              >
                UI Designer,
              </button>
              <button
                onClick={() => {
                  setSearchInput("UX Researcher");
                }}
                className="hover:text-Primary transition-colors"
              >
                UX Researcher,
              </button>
              <button
                onClick={() => {
                  setSearchInput("Android");
                }}
                className="hover:text-Primary transition-colors"
              >
                Android,
              </button>
              <button
                onClick={() => {
                  setSearchInput("Admin");
                }}
                className="hover:text-Primary transition-colors"
              >
                Admin
              </button>
            </span>
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
