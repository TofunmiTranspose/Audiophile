import { FaInstagram, FaTwitter } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const tab = useLocation();
  return (
    <div className="relative pb-32 sm:pb-25 md:pb-10 manrope dark1 py-8 sm:py-15 md:pl-25 md:pr-40 flex flex-col gap-5 justify-center items-center">
      <div className="w-9/10 md:w-full text-white flex flex-col sm:flex-row flex-wrap md:flex-nowrap justify-between gap-5 items-center">
        <h1 className="font-bold md:font-extrabold text-3xl md:text-2xl manrope flex items-center gap-5 sm:gap-8">
          <Link to={"/"}>audiophile</Link>
        </h1>
        <ul className="flex flex-col items-center sm:flex-row manrope font-semibold sm:font-bold text-sm gap-5 sm:gap-8 uppercase">
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
      </div>
      <div className=" grid md:grid-cols-[2fr_1fr] gap-25 w-9/10 md:w-full">
        <div className="text-white/50 text-center sm:text-left text-sm leading-loose">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </div>
        <div className="absolute right-0 w-full sm:right-[5%] bottom-8 md:static sm:ml-auto flex justify-center sm:justify-end items-center text-white gap-4">
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
      <p className="absolute left-0 w-full text-center sm:text-left sm:left-[5%] bottom-18 sm:bottom-8 md:static text-white/50 text-sm leading-loose self-start font-bold">
        Copyright {new Date().getFullYear()}. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
