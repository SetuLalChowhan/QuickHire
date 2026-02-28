import React from "react";
import { Building2, MapPin, Briefcase } from "lucide-react";

const JobDetailHeader = ({ job }) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-8 border-b border-[#D6DDEB] pb-12">
      <div className="w-20 h-20 bg-Primary/5 text-Primary rounded-xl flex items-center justify-center overflow-hidden shrink-0 border border-Primary/10 shadow-sm">
        {job.image ? (
          <img
            src={`${import.meta.env.VITE_IMG_URL}${job.image}`}
            alt={job.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <Briefcase size={32} />
        )}
      </div>
      <div className="flex-1 space-y-3">
        <h1 className="text-[32px] lg:text-[44px] font-bold text-[#25324B] leading-tight">
          {job.title}
        </h1>
        <div className="flex flex-wrap items-center gap-6 text-[16px] text-[#515B6F] font-medium">
          <div className="flex items-center gap-2">
            <Building2 size={20} className="text-Primary opacity-70" />
            {job.company}
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={20} className="text-Primary opacity-70" />
            {job.location}
          </div>
          <div className="flex items-center gap-2 bg-[#56CDAD]/10 text-[#56CDAD] px-3 py-1 text-[14px] font-bold">
            <Briefcase size={16} />
            Full-Time
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailHeader;
