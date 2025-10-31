import { FaInstagram, FaTwitter } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="manrope dark1 py-15 pl-25 pr-40 flex flex-col gap-5 justify-center items-center">
      <div className="w-full text-white flex justify-between items-center">
        <h1 className="font-extrabold text-2xl manrope flex items-center gap-5 sm:gap-8">
          <Link to={"/"}>audiophile</Link>
        </h1>
        <ul className="hidden md:flex manrope font-bold text-sm gap-8 uppercase">
          {["Home", "HEADPHONES", "SPEAKERS", "EARPHONES"].map((item) => (
            <li
              key={item}
              className="hover:text-[#d87d4a] transition ease-in-out duration-300"
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
      </div>
      <div className="grid grid-cols-2 gap-25 w-full">
        <div className="text-white/50 text-sm leading-loose">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </div>
        <div className="ml-auto flex items-center text-white gap-4">
          <a href="#">
            <ImFacebook2 size={24} />
          </a>
          <a href="#">
            <FaTwitter size={24} />
          </a>
          <a href="#">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
      <p className="text-white/50 text-sm leading-loose self-start font-bold">
        Copyright {new Date().getFullYear()}. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
