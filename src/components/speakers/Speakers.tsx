import Category from "../Category";
import Header from "../category/Header";
import { data } from "./data";

const Headphones = () => {
  return (
    <div className="">
      <Header />
      <Category data={data} />
    </div>
  );
};

export default Headphones;
