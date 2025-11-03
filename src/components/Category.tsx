import AudioGear from "../utils/AudioGear";
import Product from "./category/Product";
import Products from "./home/Products";

const Category = ({
  data,
}: {
  data: {
    image: string;
    name: string;
    text: string;
  }[];
}) => {
  return (
    <div className="bg-white flex justify-center py-20">
      <div className="w-17/20 space-y-20">
        {data &&
          data.map((item, index) => (
            <Product key={index} order={index % 2} data={item} />
          ))}
        <Products />
        <AudioGear />
      </div>
    </div>
  );
};

export default Category;
