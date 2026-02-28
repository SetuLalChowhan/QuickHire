import React from "react";

const Titles = ({
  title,
  description,
  className = "",
  titleClass = "",
  descClass = "",
}) => {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <h1
        className={`font-clash-display font-semibold leading-[1.1] text-[#202430] ${titleClass}`}
      >
        {title}
      </h1>
      {description && (
        <p
          className={`text-[#515B6F] font-epilogue leading-relaxed ${descClass}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default Titles;
