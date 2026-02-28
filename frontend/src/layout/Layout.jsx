import Footer from "@/shared/footer/Footer";
import Navbar from "@/shared/navbar/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { useUserProfile } from "@/hooks/fetchUserProfile";

const Layout = () => {
  useUserProfile();
  return (
    <div className=" max-w-[1440px] mx-auto">
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
