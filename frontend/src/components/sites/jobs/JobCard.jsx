import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Briefcase, Building2 } from "lucide-react";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white p-6 border border-[#D6DDEB] hover:shadow-xl transition-all duration-300 group font-epilogue">
      <div className="flex items-start justify-between mb-6">
        <div className="w-14 h-14 bg-Primary/5 text-Primary rounded flex items-center justify-center overflow-hidden shrink-0">
          {job.image ? (
            <img
              src={`${import.meta.env.VITE_IMG_URL}${job.image}`}
              alt={job.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <Briefcase size={24} />
          )}
        </div>
        <span className="px-4 py-1 text-[14px] font-semibold text-Primary bg-Primary/10">
          {job.category}
        </span>
      </div>

      <div className="flex flex-col gap-2 mb-6">
        <h3 className="text-[20px] font-bold text-[#25324B] group-hover:text-Primary transition-colors line-clamp-1">
          {job.title}
        </h3>
        <div className="flex items-center gap-2 text-[#515B6F]">
          <Building2 size={16} className="opacity-60" />
          <span className="text-[16px]">{job.company}</span>
        </div>
      </div>

      <p className="text-[#7C8493] text-[16px] leading-relaxed line-clamp-2 mb-6 h-[48px]">
        {job.description}
      </p>

      <div className="flex flex-wrap items-center gap-4 text-[14px] text-[#515B6F] font-medium border-t border-[#D6DDEB] pt-6 group-hover:border-Primary/20 transition-colors">
        <div className="flex items-center gap-1.5 bg-[#F8F9FB] px-3 py-1.5 rounded">
          <MapPin size={16} className="text-[#202430] opacity-60" />
          {job.location}
        </div>
        <Link
          to={`/jobs/${job._id}`}
          className="ml-auto text-Primary font-bold hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
