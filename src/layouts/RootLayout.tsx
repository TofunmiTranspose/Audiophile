import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const RootLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <div className="dark1">
      <Header sidebar={{ isOpen, toggleSidebar }} />
      <Sidebar sidebar={{ isOpen, toggleSidebar }} />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
