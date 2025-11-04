import { Link } from "react-router-dom";

const Button = ({
  link,
  text = "SEE PRODUCT",
}: {
  link: string | (() => void);
  text?: string;
}) => {
  return (
    <Link
      onClick={
        typeof link === "function"
          ? () => {
              link();
            }
          : undefined
      }
      to={typeof link === "string" ? link : "#"}
      className="bg-[#d87d4a] hover:bg-[#fbaf85] text-white text-sm h-12 w-40 flex items-center justify-center font-semibold transition duration-300 ease cursor-pointer"
    >
      {text}
    </Link>
  );
};

export default Button;
