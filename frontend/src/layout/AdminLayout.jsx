import CommonNavbar from "@/pages/admin/CommonNavbar";
import SideBar from "@/pages/admin/SideBar";

import React, { useEffect, useState } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Briefcase,
  PlusCircle,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

const AdminLayout = () => {
  const [Open, setOpen] = useState(false);

  const sidebarData = [
    {
      id: 1,
      icon: <LayoutDashboard size={20} />,
      text: "Dashboard",
      path: "/dashboard",
      activePaths: ["/dashboard"],
      sublink: false,
    },
    // {
    //   id: 2,
    //   icon: <Briefcase size={20} />,
    //   text: "Manage Jobs",
    //   path: "/dashboard",
    //   activePaths: ["/dashboard/jobs"],
    //   sublink: false,
    // },
    // {
    //   id: 3,
    //   icon: <PlusCircle size={20} />,
    //   text: "Post a Job",
    //   path: "/dashboard",
    //   activePaths: ["/dashboard/post-job"],
    //   sublink: false,
    // },
    // {
    //   id: 4,
    //   icon: <Users size={20} />,
    //   text: "Applications",
    //   path: "/dashboard",
    //   activePaths: ["/dashboard/applications"],
    //   sublink: false,
    // },
    // {
    //   id: 5,
    //   icon: <Settings size={20} />,
    //   text: "Settings",
    //   path: "/dashboard",
    //   activePaths: ["/dashboard/settings"],
    //   sublink: false,
    // },
  ];

  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  return (
    <>
      <ScrollRestoration />
      <div className="flex h-screen bg-[#F8F9FB] overflow-hidden">
        {/* Sidebar stays fixed or slides on mobile */}
        <SideBar open={Open} setOpen={setOpen} sidebar={sidebarData} />

        <div className="flex-1 flex flex-col min-w-0">
          <CommonNavbar open={Open} setOpen={setOpen} />

          <main className="flex-1 overflow-y-auto custom-scrollbar">
            <div className="max-w-[1200px] mx-auto">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
