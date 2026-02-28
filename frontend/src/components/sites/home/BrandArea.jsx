import React from "react";
import Brand1 from "@/assets/images/brands/b1.png";
import Brand2 from "@/assets/images/brands/b2.png";
import Brand3 from "@/assets/images/brands/b3.png";
import Brand4 from "@/assets/images/brands/b4.png";
import Brand5 from "@/assets/images/brands/b5.png";
import Marquee from "react-fast-marquee";

const BrandArea = () => {
  const brands = [Brand1, Brand2, Brand3, Brand4, Brand5];

  return (
    <div>
      <div className="flex flex-col gap-8 section-padding-x">
        <p className="font-epilogue text-[18px] text-Secondary opacity-70">
          Companies we helped grow
        </p>
        <div className="w-full">
          <Marquee speed={40} gradient={false} pauseOnHover={true}>
            <div className="flex items-center gap-16 lg:gap-32 pr-16 lg:pr-32">
              {brands.map((brand, index) => (
                <img
                  key={index}
                  src={brand}
                  alt={`Brand ${index + 1}`}
                  className="h-10 w-[153px] grayscale opacity-70 transition-all duration-300 object-contain"
                />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default BrandArea;
