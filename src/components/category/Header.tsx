import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation().pathname;
  return (
    <div className="bg-black">
      <hr className="w-17/20 mx-auto border rounded-full text-white/30" />
      <h2 className="flex justify-center w-full p-10 manrope text-white font-bold bg-black text-2xl">
        {location.toUpperCase().slice(1, 100)}
      </h2>
    </div>
  );
};

export default Header;
