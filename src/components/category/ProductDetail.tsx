import { useParams } from "react-router-dom";
import Product from "./Product";
import { store } from "../../data/products";

const ProductDetail = () => {
  const { product } = useParams();
  const productData = store.flatMap((item) =>
    item.data.find((i) => console.log(i.name) === product)
  )[0];
  console.log(product);

  if (!productData) {
    return <div className="text-white text-3xl">Product not found</div>;
  }

  return (
    <div>
      <Product data={productData} />
    </div>
  );
};

export default ProductDetail;
