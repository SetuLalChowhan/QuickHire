import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const LatestJobCard = ({ logo, title, company, location, tags }) => {
  return (
    <div className="bg-white p-6 border border-[#D6DDEB] hover:shadow-lg transition-all duration-300 group cursor-pointer h-full">
      <div className="flex items-start gap-4 mb-4">
        <div className="size-12 rounded flex items-center justify-center shrink-0">
          <img
            src={logo}
            alt={company}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-epilogue text-lg font-bold text-[#25324B] group-hover:text-Primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-[#7C8493] font-epilogue text-[14px]">
            <span>{company}</span>
            <span className="size-1 rounded-full bg-[#7C8493] opacity-30" />
            <span>{location}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag, index) => {
          let styles = "bg-gray-100 text-gray-600";
          if (tag === "Full-Time") {
            styles =
              "bg-[#56CDAD]/10 text-[#56CDAD] border border-[#56CDAD]/20";
          } else if (tag === "Marketing") {
            styles =
              "bg-[#FFB836]/10 text-[#FFB836] border border-[#FFB836]/20";
          } else if (tag === "Design") {
            styles =
              "bg-[#4640DE]/10 text-[#4640DE] border border-[#4640DE]/20";
          } else if (tag === "Developer") {
            styles =
              "bg-[#FF6550]/10 text-[#FF6550] border border-[#FF6550]/20";
          } else if (tag === "Management") {
            styles =
              "bg-[#26A4FF]/10 text-[#26A4FF] border border-[#26A4FF]/20";
          }

          return (
            <span
              key={index}
              className={`${styles} px-3 py-1 rounded-full text-[12px] font-semibold font-epilogue`}
            >
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default LatestJobCard;
