import { useEffect } from "react";
import Category from "../Category";
import Header from "../category/Header";
import { data } from "./data";

const Headphones = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <Header />
      <Category data={data} />
    </div>
  );
};

export default Headphones;
