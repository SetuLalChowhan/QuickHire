import React from "react";

const StatsCard = ({ label, value, color }) => {
  return (
    <div className="p-8 bg-white rounded-xl border border-[#D6DDEB] shadow-sm">
      <h3 className="text-[#7C8493] font-semibold text-lg">{label}</h3>
      <p className={`text-4xl font-bold mt-4 ${color.split(" ")[0]}`}>
        {value}
      </p>
    </div>
  );
};

export default StatsCard;
