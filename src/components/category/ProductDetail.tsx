import { useParams, useNavigate } from "react-router-dom";
import Product from "./Product";
import { store } from "../../data/products";
import AudioGear from "../../utils/AudioGear";
import Products from "../home/Products";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { product } = useParams();
  const productData = store.find((i) => i.name === product);

  if (!productData) {
    return <div className="text-white text-3xl">Product not found</div>;
  }

  return (
    <div className="bg-white p-10">
      <button onClick={() => navigate(-1)}>
        <p className="mb-3 font-semibold cursor-pointer">Go back</p>
      </button>
      <div className="space-y-20">
        <Product data={productData} />
        <Products />
        <AudioGear />
      </div>
    </div>
  );
};

export default ProductDetail;
