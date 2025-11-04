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
  console.log(order);

  return (
    <div className="grid grid-cols-2 gap-20">
      <div
        className={`order-${
          order && order + 2
        } flex-1 items-center justify-center bg-black/4  rounded p-10`}
      >
        <img src={data.image} className=" max-h-90 mx-auto" />
      </div>
      <div className={`order-2 flex flex-col justify-center gap-5`}>
        <p className="secondary manrope text-sm font-bold tracking-[0.5em]">
          NEW PRODUCT
        </p>
        <h2 className="font-bold text-4xl uppercase leading-tight">
          <span>{data.name}</span> <br />{" "}
          <span>{data.type?.toUpperCase()}</span>{" "}
        </h2>
        <p className="text-base text-black/50 leading-relaxed">{data.text}</p>
        {product && data.price && <p className="font-bold">$ {data.price}</p>}
        <div className="flex items-center gap-5">
          {product && (
            <div className="bg-gray-100 rounded-sm grid grid-cols-3 place-items-center h-12">
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
          <Button link={`/${data.type}/${data.name.trim()}`} />
        </div>
      </div>
    </div>
  );
};

export default Product;
