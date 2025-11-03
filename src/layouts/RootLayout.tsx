import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Cart from "../components/CartPage";

const RootLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <div className="dark1">
      <Header sidebar={{ isOpen, toggleSidebar }} show={{ show, setShow }} />
      <Sidebar sidebar={{ isOpen, toggleSidebar }} />
      <div>
        <Outlet />
      </div>
      <Footer />
      <Cart show={{ show, setShow }} />
    </div>
  );
};

export default RootLayout;
