import React from "react";
import { CheckCircle2 } from "lucide-react";

const JobDetailContent = ({ job }) => {
  return (
    <div className="lg:col-span-2 space-y-12">
      {/* Description */}
      <div className="space-y-6">
        <h2 className="text-[26px] font-bold text-[#25324B]">Description</h2>
        <p className="text-[#515B6F] text-[18px] leading-[1.8] whitespace-pre-wrap">
          {job.description}
        </p>
      </div>

      {/* Responsibilities/Requirements */}
      <div className="space-y-6">
        <h2 className="text-[26px] font-bold text-[#25324B]">Requirements</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#515B6F] text-[17px]">
          {[
            "Experience with modern web technologies.",
            "Strong problem-solving skills.",
            "Ability to work in a fast-paced environment.",
            "Excellent communication and teamwork.",
            "Passionate about learning new things.",
            "Attention to detail and quality focus.",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 bg-[#F8F9FB] p-4 border border-[#D6DDEB] rounded-lg"
            >
              <CheckCircle2
                size={18}
                className="text-Primary shrink-0 mt-0.5"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobDetailContent;
