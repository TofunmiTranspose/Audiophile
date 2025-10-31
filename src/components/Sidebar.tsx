import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Sidebar = ({
  sidebar,
}: {
  sidebar: { isOpen: boolean; toggleSidebar: () => void };
}) => {
  return (
    <div
      className={`h-screen fixed top-0 left-0 dark1 w-64 border-r-2 border-[#d87d4a] text-white flex flex-col items-center pt-10 ${
        sidebar.isOpen ? "block" : "hidden"
      }`}
    >
      <IoMdCloseCircleOutline
        size={25}
        onClick={sidebar.toggleSidebar}
        className="absolute top-5 right-4 hover:text-[#d87d4a] cursor-pointer transition ease-in-out duration-300"
      />
      <ul className="flex flex-col pt-5 manrope font-bold text-sm gap-8 uppercase">
        {["Home", "HEADPHONES", "SPEAKERS", "EARPHONES"].map((item) => (
          <li
            key={item}
            className="text-white hover:text-[#d87d4a] transition ease-in-out duration-300"
          >
            <Link
              to={
                item.toLocaleLowerCase() === "home"
                  ? "/"
                  : item.toLocaleLowerCase()
              }
              onClick={sidebar.toggleSidebar}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
