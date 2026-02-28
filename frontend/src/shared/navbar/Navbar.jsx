import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Logo from "@/assets/images/Logo.png";
import Hamburger from "@/assets/images/icon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    opened: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { x: 20, opacity: 0 },
    opened: { x: 0, opacity: 1 },
  };

  return (
    <nav
      className={`fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="section-padding-x flex items-center justify-between">
        {/* Left side: Logo */}
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={Logo}
              alt="QuickHire"
              className="h-[36px] w-[152px] object-contain"
            />
          </Link>

          {/* Nav Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-8 font-epilogue font-medium text-[#515B6F]">
            <Link to="/jobs" className="hover:text-Primary transition-all">
              Find Jobs
            </Link>
            <Link to="/companies" className="hover:text-Primary transition-all">
              Browse Companies
            </Link>
          </div>
        </div>

        {/* Right side (Desktop: Auth, Mobile: Hamburger) */}
        <div className="flex items-center">
          {/* Desktop Auth */}
          <div className="hidden lg:flex items-center gap-2 font-epilogue border-l border-gray-100 pl-4 ml-4">
            <Link
              to="/login"
              className="text-Primary font-bold px-6 py-3 hover:opacity-80 transition-opacity"
            >
              Login
            </Link>
            <div className="w-[1px] h-8 bg-gray-100 mx-2"></div>
            <Link
              to="/signup"
              className="bg-Primary text-white px-8 py-3 rounded-[4px] hover:bg-[#3b36c4] shadow-lg shadow-[#4640de]/20 transition-all font-bold"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex items-center justify-center p-2 rounded-full border border-gray-100 shadow-sm bg-white hover:scale-105 transition-transform"
          >
            <img src={Hamburger} alt="Menu" className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Side Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1] lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="opened"
              exit="closed"
              className="fixed top-0 right-0 h-screen w-[280px] bg-white shadow-2xl z-[60] lg:hidden p-8 flex flex-col"
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X size={28} className="text-[#202430]" />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col gap-6 font-epilogue text-[18px] font-medium text-[#515B6F]">
                <motion.div variants={itemVariants}>
                  <Link
                    to="/jobs"
                    onClick={toggleMenu}
                    className="hover:text-Primary transition-all block py-2 border-b border-gray-50 text-[20px]"
                  >
                    Find Jobs
                  </Link>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Link
                    to="/companies"
                    onClick={toggleMenu}
                    className="hover:text-Primary transition-all block py-2 border-b border-gray-50 text-[20px]"
                  >
                    Browse Companies
                  </Link>
                </motion.div>
              </div>

              {/* Mobile Auth Buttons */}
              <div className="mt-auto flex flex-col gap-4 pt-8 border-t border-gray-100">
                <motion.div variants={itemVariants}>
                  <Link
                    to="/login"
                    onClick={toggleMenu}
                    className="text-Primary font-bold text-center block py-4 text-[20px]"
                  >
                    Login
                  </Link>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Link
                    to="/signup"
                    onClick={toggleMenu}
                    className="bg-Primary text-white text-center font-bold block py-4 rounded-[4px] shadow-lg shadow-[#4640de]/20"
                  >
                    Sign Up
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
