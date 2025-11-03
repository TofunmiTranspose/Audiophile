import { Link, useParams } from "react-router-dom";
import Product from "./Product";
import { store } from "../../data/products";

const ProductDetail = () => {
  const { product } = useParams();
  const productData = store.find((i) => i.name === product);

  if (!productData) {
    return <div className="text-white text-3xl">Product not found</div>;
  }

  return (
    <div className="bg-white p-10">
      <Link to={"-1"}>
        <p className="mb-3 font-semibold">back</p>
      </Link>
      <Product data={productData} />
    </div>
  );
};

export default ProductDetail;
