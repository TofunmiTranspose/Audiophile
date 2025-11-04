import { useEffect } from "react";
import AudioGear from "../utils/AudioGear";
import AfterOrange from "./home/AfterOrange";
import EarphoneGrid from "./home/EarphoneGrid";
import Hero from "./home/Hero";
import Orangebg from "./home/Orangebg";
import Products from "./home/Products";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <Hero />
      <div className="bg-white pt-10 pb-20">
        <div className="w-9/10 sm:w-17/20 space-y-10 mx-auto">
          <Products />
          <Orangebg />
          <AfterOrange />
          <EarphoneGrid />
          <AudioGear />
        </div>
      </div>
    </div>
  );
};

export default Home;
