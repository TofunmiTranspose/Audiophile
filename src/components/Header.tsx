import { IoCartOutline } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";

const Header = ({
  sidebar,
  show,
}: {
  sidebar: { isOpen: boolean; toggleSidebar: () => void };
  show: { show: boolean; setShow: (i: boolean) => void };
}) => {
  const tab = useLocation();

  return (
    <div className="w-full sticky top-0 z-99 bg-black flex items-center justify-center py-6">
      <div className="bg-black w-9/10 md:w-17/20 mx-auto text-white flex justify-between items-center">
        <h1 className="font-extrabold text-2xl manrope flex items-center gap-5 sm:gap-8">
          <LuMenu
            onClick={sidebar.toggleSidebar}
            size={28}
            className="md:hidden cursor-pointer"
          />
          <Link to={"/"}>audiophile</Link>
        </h1>
        <ul className="hidden md:flex manrope font-bold text-sm gap-8 uppercase">
          {["Home", "HEADPHONES", "SPEAKERS", "EARPHONES"].map((item) => (
            <li
              key={item}
              className={`
                ${
                  tab.pathname.slice(1, 100) === item.toLowerCase() ||
                  (tab.pathname === "/" && item.toLowerCase() === "home")
                    ? "text-[#d87d4a]"
                    : "text-white"
                }
                hover:text-[#d87d4a] transition ease-in-out duration-300`}
            >
              <Link
                to={
                  item.toLocaleLowerCase() === "home"
                    ? "/"
                    : item.toLocaleLowerCase()
                }
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <button onClick={() => show.setShow(true)} className="cursor-pointer">
          <IoCartOutline size={25} title="cart" />
        </button>
      </div>
    </div>
  );
};

export default Header;
