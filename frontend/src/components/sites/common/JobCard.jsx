import React from "react";

const JobCard = ({
  logo,
  title,
  company,
  location,
  type,
  description,
  tags,
}) => {
  return (
    <div className="border border-[#D6DDEB] p-6 lg:p-8 flex flex-col gap-6 bg-white h-full hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start justify-between">
        <div className="">
          <img src={logo} alt={company} className="size-12 object-contain" />
        </div>
        <span className="border border-Primary text-Primary px-4 py-1.5 font-epilogue font-semibold text-[14px]">
          {type}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-epilogue text-lg font-semibold text-[#25324B] line-clamp-1">
          {title}
        </h3>
        <div className="flex items-center gap-2 text-Secondary font-epilogue text-[16px]  font-normal">
          <span>{company}</span>
          <span className="size-1 rounded-full bg-Secondary opacity-30 shrink-0" />
          <span className="line-clamp-1 text-[#7C8493]">{location}</span>
        </div>
      </div>

      <p className="text-[#515B6F] font-epilogue text-[14px] lg:text-[16px] line-clamp-2 leading-relaxed opacity-80">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag, index) => {
          let bgColor = "bg-opacity-10";
          let textColor = "";

          if (tag === "Marketing") {
            bgColor = "bg-[#FFB836]/10 border-[#FFB836]/20 border";
            textColor = "text-[#FFB836]";
          } else if (tag === "Design") {
            bgColor = "bg-[#56CDAD]/10 border-[#56CDAD]/20 border";
            textColor = "text-[#56CDAD]";
          } else if (tag === "Business") {
            bgColor = "bg-[#4640DE]/10 border-[#4640DE]/20 border";
            textColor = "text-[#4640DE]";
          } else if (tag === "Technology") {
            bgColor = "bg-[#FF6550]/10 border-[#FF6550]/20 border";
            textColor = "text-[#FF6550]";
          }

          return (
            <span
              key={index}
              className={`${bgColor} ${textColor} px-4 py-1.5 rounded-full font-epilogue font-semibold text-[12px] lg:text-[14px]`}
            >
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default JobCard;
