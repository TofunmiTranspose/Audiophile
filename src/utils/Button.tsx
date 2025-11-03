import { Link } from "react-router-dom";

const Button = ({ link }: { link: string }) => {
  return (
    <Link
      to={link}
      className="bg-[#d87d4a] hover:bg-[#fbaf85] text-white h-12 w-40 flex items-center justify-center font-bold transition duration-300 ease cursor-pointer"
    >
      SEE PRODUCT
    </Link>
  );
};

export default Button;
