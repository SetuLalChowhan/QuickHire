import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/framer-motion";

/**
 * Common Section Header for Home Page
 * @param {string} title - The main title text
 * @param {string} blueText - The text that should be highlighted in blue
 * @param {string} linkText - The text for the right-side link
 * @param {string} linkTo - The destination for the link
 * @param {boolean} hideMobileLink - Whether to hide the link on mobile (defaults to true)
 */
const SectionHeader = ({
  title,
  blueText,
  linkText,
  linkTo,
  hideMobileLink = true,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex lg:flex-row flex-col lg:items-end justify-between mb-10 gap-4"
    >
      <h2 className="font-clash-display text-[32px] lg:text-[48px] font-semibold text-[#25324B] leading-tight">
        {title} <span className="text-[#26A4FF]">{blueText}</span>
      </h2>

      {linkText && linkTo && (
        <Link
          to={linkTo}
          className={`${hideMobileLink ? "hidden lg:flex" : "flex"} items-center gap-2 text-Primary font-semibold font-epilogue hover:gap-4 transition-all group lg:mb-2 text-[18px]`}
        >
          {linkText}{" "}
          <ArrowRight
            size={22}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      )}
    </motion.div>
  );
};

export default SectionHeader;
