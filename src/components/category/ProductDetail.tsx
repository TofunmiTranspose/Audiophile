import { useParams, useNavigate } from "react-router-dom";
import Product from "./Product";
import { store } from "../../data/products";
import AudioGear from "../../utils/AudioGear";
import Products from "../home/Products";
import { useEffect } from "react";

const ProductDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const { product } = useParams();
  const productData = store.find((i) => i.name === product);

  if (!productData) {
    return <div className="text-white text-3xl">Product not found</div>;
  }

  return (
    <div className="bg-white py-5 md:p-10">
      <button onClick={() => navigate(-1)}>
        <p className="mb-3 font-semibold cursor-pointer ml-4 md:ml-0 text-sm md:text-base">
          Go back
        </p>
      </button>
      <div className="space-y-20 w-9/10 md:w-full mx-auto">
        <Product data={productData} />
        <Products />
        <AudioGear />
      </div>
    </div>
  );
};

export default ProductDetail;
