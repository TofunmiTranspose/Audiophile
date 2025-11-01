import { Link } from "react-router-dom";

const Button2 = ({ link }: { link: string }) => {
  return (
    <Link
      to={link}
      className="border-2 h-12 w-40 flex items-center justify-center font-bold transition duration-300 ease cursor-pointer"
    >
      SEE PRODUCT
    </Link>
  );
};

export default Button2;
