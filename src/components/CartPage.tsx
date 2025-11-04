import { use } from "react";
import { CartContext, type CartType } from "../context/Cart";
import { Link } from "react-router-dom";

const Cart = ({
  show,
}: {
  show: { show: boolean; setShow: (i: boolean) => void };
}) => {
  const { cart, setCart } = use(CartContext);
  const reset = () => setCart(null);
  console.log(cart);

  const handleDecrement = (me: CartType) => {
    if (me && me.quantity > 1) {
      setCart(
        (cart ?? []).map((item) =>
          item.name === me.name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else if (me && me.quantity === 1) {
      setCart((cart ?? []).filter((item) => item.name !== me.name));
    }
  };

  const handleIncrement = (me: CartType) => {
    if (me) {
      setCart(
        (cart ?? []).map((item) =>
          item.name === me.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    }
  };

  return (
    <div
      className={`${
        show.show ? " block" : "hidden"
      } fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-1000`}
    >
      <div className="absolute top-20 right-10 p-5 rounded bg-white w-80 space-y-3">
        <p
          onClick={() => show.setShow(false)}
          className="w-full text-right right-10 text-sm cursor-pointer font-bold -mt-2"
        >
          X
        </p>
        {cart && cart.length > 0 ? (
          <div className="space-y-3">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-sm">CART ({cart?.length ?? 0})</h2>
              <button
                onClick={reset}
                className="text-xs text-gray-400 hover:text-gray-200 cursor-pointer"
              >
                Remove all
              </button>
            </div>
            <div className="grid gap-3">
              {cart?.map((cart, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="bg-gray-100 p-1.5 rounded">
                      <img src={cart.image} className="size-9 object-contain" />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                      <p className="font-bold">{cart.name}</p>
                      <p className="text-gray-500 font-semibold text-xs">
                        $ {cart.price}
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-sm grid grid-cols-3 place-items-center h-8 gap-1">
                    <button
                      onClick={() => handleDecrement(cart)}
                      className="px-2 hover:bg-gray-200 h-full flex items-center justify-center font-semibold text-sm"
                    >
                      -
                    </button>{" "}
                    <p className="px-2 h-full flex items-center justify-center font-semibold text-xs">
                      {cart?.quantity ?? 0}
                    </p>
                    <button
                      onClick={() => handleIncrement(cart)}
                      className="px-2 hover:bg-gray-200 h-full flex items-center justify-center font-semibold text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between text-xs">
              <p className="text-gray-500">TOTAL</p>
              <p className="font-bold">
                ${" "}
                {(
                  cart?.reduce(
                    (sum, item) =>
                      sum + Number(item?.price ?? 0) * (item?.quantity ?? 1),
                    0
                  ) ?? 0
                ).toFixed(2)}
              </p>
            </div>
            <Link
              to={"/checkout"}
              className="bg-primary cursor-pointer mt-5 flex w-full items-center justify-center text-white text-xs font-semibold rounded h-8"
            >
              Checkout
            </Link>
          </div>
        ) : (
          <div className="py-10 flex justify-center items-center font-semibold">
            Cart is empty
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
