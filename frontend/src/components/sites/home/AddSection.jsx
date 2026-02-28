import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GraphImg from "@/assets/images/graph.png";
import { fadeIn, staggerContainer } from "@/utils/framer-motion";

const AddSection = () => {
  return (
    <section className="section-padding-x overflow-hidden">
      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="relative bg-Primary lg:min-h-[440px] flex items-center lg:items-end overflow-hidden"
        style={{
          // Precise "top-left cut, bottom-right cut" polygon shape
          clipPath:
            "polygon(0% 15%, 15% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)",
        }}
      >
        <div className="container mx-auto px-6 lg:px-20 w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between lg:gap-8 min-h-[440px]">
            {/* Left Text Block */}
            <motion.div
              variants={fadeIn("right", 0.2)}
              className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:gap-8 lg:pb-20 py-10 lg:py-0"
            >
              <h2 className="font-clash-display text-[40px] lg:text-[56px] font-semibold text-white leading-[48px] lg:leading-[64px] tracking-tight">
                Start posting <br /> jobs today
              </h2>
              <p className="font-epilogue text-[18px] lg:text-[20px] text-white opacity-90">
                Start posting jobs for only $10.
              </p>
              <Link
                to="/signup"
                className="bg-white text-Primary font-epilogue font-bold px-10 py-5 rounded-[4px] hover:bg-gray-50 hover:scale-105 transition-all text-[18px] lg:text-[20px] shadow-lg shadow-black/10 inline-block w-full lg:w-auto"
              >
                Sign Up For Free
              </Link>
            </motion.div>

            {/* Right Dashboard Screenshot - Touches the bottom */}
            <motion.div
              variants={fadeIn("left", 0.4)}
              className="w-full lg:w-[55%] flex justify-center lg:justify-end items-end"
            >
              <div className="relative w-full max-w-[460px] lg:max-w-none flex items-end">
                <img
                  src={GraphImg}
                  alt="QuickHire Dashboard"
                  className="w-full h-auto object-contain lg:max-h-[380px] self-end"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AddSection;
