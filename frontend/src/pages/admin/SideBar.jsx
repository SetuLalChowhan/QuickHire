import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ChevronDown,
  LogOut,
  LayoutDashboard,
  Briefcase,
  PlusCircle,
  Users,
  Settings,
} from "lucide-react";
import Logo from "@/assets/images/Logo.png";
import { useDispatch } from "react-redux";
import { clearAuth } from "@/redux/slices/authSlice";
import { toast } from "react-toastify";

const SideBar = ({ sidebar, open, setOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeParentIndex, setActiveParentIndex] = useState(null);

  const handleLogout = () => {
    dispatch(clearAuth());
    toast.success("Logged out successfully");
    navigate("/login");
  };

  useEffect(() => {
    sidebar.forEach((item, index) => {
      if (item.sublink) {
        const activeSub = item.sublink.find(
          (sub) => sub.path === location.pathname,
        );
        if (activeSub) {
          setActiveParentIndex(index);
        }
      }
    });
  }, [location.pathname, sidebar]);

  const isActive = (paths) => {
    if (!paths) return false;
    const pathArray = Array.isArray(paths) ? paths : [paths];
    return pathArray.includes(location.pathname);
  };

  const isParentActive = (item) => {
    if (!item.sublink) return isActive(item.activePaths);
    return item.sublink.some((sub) => isActive(sub.path));
  };

  const toggleSubmenu = (index) => {
    setActiveParentIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300 ease-in-out ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        } xl:hidden z-[110]`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed xl:static inset-y-0 left-0 h-full w-[280px] bg-white border-r border-[#D6DDEB] flex flex-col transition-transform duration-300 ease-in-out z-[120] ${
          open ? "translate-x-0" : "-translate-x-full xl:translate-x-0"
        }`}
      >
        {/* Logo Section */}
        <div className="p-8 pb-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} alt="QuickHire" className="h-8 object-contain" />
            {/* <span className="font-clash-display text-xl font-bold tracking-tight text-[#25324B]">
              QuickHire
            </span> */}
          </Link>
        </div>

        {/* Navigation Section */}
        <nav className="flex-1 px-4 py-6 overflow-y-auto">
          <div className="flex flex-col gap-2">
            {sidebar?.map((item, index) => {
              const active = isParentActive(item);
              return !item?.sublink ? (
                <Link
                  key={index}
                  to={item?.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-epilogue font-semibold transition-all duration-200 ${
                    active
                      ? "bg-Primary text-white shadow-lg shadow-[#4640de]/20"
                      : "text-[#7C8493] hover:bg-[#F8F9FB] hover:text-Primary"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <span className={active ? "text-white" : "text-[#7C8493]"}>
                    {item?.icon}
                  </span>
                  {item?.text}
                </Link>
              ) : (
                <div className="relative" key={index}>
                  <button
                    className={`flex items-center justify-between px-4 py-3 cursor-pointer w-full rounded-lg font-epilogue font-semibold transition-all duration-200 ${
                      active
                        ? "bg-Primary/10 text-Primary border border-Primary/20"
                        : "text-[#7C8493] hover:bg-[#F8F9FB] hover:text-Primary"
                    }`}
                    onClick={() => toggleSubmenu(index)}
                  >
                    <div className="flex items-center gap-3">
                      <span>{item?.icon}</span>
                      {item?.text}
                    </div>
                    <ChevronDown
                      size={18}
                      className={`transform transition-transform duration-300 ${
                        activeParentIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      activeParentIndex === index
                        ? "max-h-[300px] mt-2 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {item?.sublink?.map((sub, i) => (
                      <Link
                        key={i}
                        to={sub.path}
                        className={`flex items-center gap-3 pl-12 py-2 pr-4 text-[14px] font-epilogue font-medium transition-colors ${
                          isActive(sub.path)
                            ? "text-Primary"
                            : "text-[#7C8493] hover:text-Primary"
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        {sub.text}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </nav>

        {/* Bottom Section - Logout */}
        <div className="p-4 border-t border-[#D6DDEB]">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-[#FF6550] font-epilogue font-bold hover:bg-[#FF6550]/10 transition-all"
          >
            <LogOut size={20} />
            Log Out
          </button>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
