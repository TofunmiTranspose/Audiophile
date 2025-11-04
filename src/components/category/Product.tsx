import { use } from "react";
import Button from "../../utils/Button";
import { CartContext } from "../../context/Cart";
import { useParams } from "react-router-dom";

const Product = ({
  order,
  data,
}: {
  order?: number;
  data: {
    image: string;
    name: string;
    text: string;
    price?: string;
    type: string;
  };
}) => {
  const { product } = useParams();
  const { cart, setCart } = use(CartContext);
  const me = cart?.find((cart) => cart.name === data.name);

  const handleIncrement = () => {
    if (me) {
      setCart(
        (cart ?? []).map((item) =>
          item.name === data.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([
        ...(cart ?? []),
        { image: data.image, name: data.name, price: data.price, quantity: 1 },
      ]);
    }
  };

  const handleDecrement = () => {
    if (me && me.quantity > 1) {
      setCart(
        (cart ?? []).map((item) =>
          item.name === data.name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else if (me && me.quantity === 1) {
      setCart((cart ?? []).filter((item) => item.name !== data.name));
    }
  };
  console.log(product);

  return (
    <div className="grid sm:grid-cols-2 gap-5 md:gap-20">
      <div
        className={`${
          order === 0 ? `` : `${product === undefined ? "sm:order-3" : ""}`
        } flex-1 items-center justify-center bg-black/4  rounded p-5 md:p-10`}
      >
        <img src={data.image} className="max-h-50 md:max-h-90 mx-auto" />
      </div>
      <div className={`order-2 flex flex-col justify-center gap-4 md:gap-5`}>
        <p
          className={`primary ${
            product === undefined ? "text-center" : " text-left"
          } sm:text-left text-sm font-bold tracking-[0.5em]`}
        >
          NEW PRODUCT
        </p>
        <h2
          className={`font-bold text-3xl md:text-4xl  ${
            product === undefined ? "text-center" : " text-left"
          } sm:text-left uppercase leading-tight`}
        >
          <span>{data.name}</span> <br />{" "}
          <span>{data.type?.toUpperCase()}</span>{" "}
        </h2>
        <p
          className={`${
            product === undefined ? "text-center" : " text-left"
          } sm:text-left text-base md:text-base text-black/50 leading-relaxed`}
        >
          {data.text}
        </p>
        {product && data.price && <p className="font-bold">$ {data.price}</p>}
        <div className="flex items-center gap-5">
          {product && (
            <div className="bg-gray-100 grid grid-cols-3 place-items-center h-12 w-full max-w-[130px]">
              <button
                onClick={handleDecrement}
                className="px-3.5 hover:bg-gray-200 h-full flex items-center justify-center font-semibold"
              >
                -
              </button>{" "}
              <p className="px-3.5 h-full flex items-center justify-center font-semibold text-sm">
                {me?.quantity ?? 0}
              </p>
              <button
                onClick={handleIncrement}
                className="px-3.5 hover:bg-gray-200 h-full flex items-center justify-center font-semibold"
              >
                +
              </button>
            </div>
          )}
          <div
            className={`w-full flex  ${
              product === undefined
                ? "justify-center sm:justify-start"
                : " justify-start"
            }`}
          >
            <Button
              text={product === undefined ? "SEE PRODUCT" : "ADD TO CART"}
              link={
                product === undefined
                  ? `/${data.type}/${data.name.trim()}`
                  : handleIncrement
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
