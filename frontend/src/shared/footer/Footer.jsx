import React from "react";
import FooterLogo from "@/assets/images/Logo2.png";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Dribbble } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#202430] text-white  ">
      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="section-padding-x lg:px-20 lg:pt-16 pt-8 lg:pb-8 pb-4"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Logo and Description */}
          <motion.div
            variants={fadeIn("up", 0.1)}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            <Link to="/" className="flex items-center gap-2">
              <img
                src={FooterLogo}
                alt="QuickHire"
                className="h-8 lg:h-10 object-contain"
              />
            </Link>
            <p className="text-[#D6DDEB] font-epilogue font-normal text-[16px] leading-relaxed max-w-[340px]">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </motion.div>

          {/* About Links */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <h4 className="font-epilogue text-[18px] font-bold">About</h4>
            <div className="flex flex-col gap-4">
              {[
                "Companies",
                "Pricing",
                "Terms",
                "Advice",
                "Privacy Policy",
              ].map((item) => (
                <Link
                  key={item}
                  to="#"
                  className="text-[#D6DDEB] hover:text-white transition-colors font-epilogue"
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Resources Links */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <h4 className="font-epilogue text-[18px] font-bold">Resources</h4>
            <div className="flex flex-col gap-4">
              {["Help Docs", "Guide", "Updates", "Contact Us"].map((item) => (
                <Link
                  key={item}
                  to="#"
                  className="text-[#D6DDEB] hover:text-white transition-colors font-epilogue"
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            <h4 className="font-epilogue text-[18px] font-bold">
              Get job notifications
            </h4>
            <p className="text-[#D6DDEB] font-epilogue text-[16px]">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-white px-4 py-3 text-[#202430] outline-none font-epilogue text-[16px]"
              />
              <button className="bg-[#4640DE] hover:bg-[#3b36c6] px-8 py-3 font-bold font-epilogue transition-all shrink-0">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          className="border-t border-[#34394A] pt-8 flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <p className="text-[#D6DDEB] font-epilogue opacity-50 text-[14px] lg:text-[16px]">
            2021 @ QuickHire. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[
              { icon: Facebook, link: "#" },
              { icon: Instagram, link: "#" },
              { icon: Dribbble, link: "#" },
              { icon: Linkedin, link: "#" },
              { icon: Twitter, link: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="size-10 rounded-full bg-[#34394A] transition-all hover:bg-[#4640DE] flex items-center justify-center group"
              >
                <social.icon
                  size={20}
                  className="text-white opacity-80 group-hover:opacity-100"
                />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
