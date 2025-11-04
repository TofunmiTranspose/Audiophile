import { use, useState, type FormEvent } from "react";
import { CartContext } from "../context/Cart";
import { useNavigate } from "react-router-dom";
import Form from "./checkout/Form";
import Summary from "./checkout/Summary";
import { FaCheck } from "react-icons/fa";

const Checkout = () => {
  const { setShow, cart } = use(CartContext);
  setShow(false);
  const navigate = useNavigate();
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setModal(true);
    console.log(modal);
  };
  const [modal, setModal] = useState(false);
  const total = Number(
    cart?.reduce(
      (sum, item) => sum + Number(item?.price ?? 0) * (item?.quantity ?? 1),
      0
    ) ?? (0).toFixed(2)
  );
  const shipping = (Number(total) / 10).toFixed(2);
  const vat = (Number(total) * 0.13).toFixed(2);
  const grandTotal = Number(vat) + Number(total) + Number(shipping);

  return (
    <div className="min-h-[90vh] bg-gray-100 py-5">
      <div className="w-9/10 sm:w-17/20 mx-auto">
        <button onClick={() => navigate(-1)}>
          <p className="mb-3 text-gray-700 font-semibold cursor-pointer">
            Go back
          </p>
        </button>
        <form onSubmit={submit} className="grid md:grid-cols-[2fr_1fr] gap-5">
          <Form />
          <Summary cart={cart} />
        </form>
      </div>
      <div
        className={`${
          modal ? "fixed top-0 left-0 z-10" : "hidden"
        } inset-0 bg-black/50 flex justify-center items-center`}
      >
        <div className="bg-white rounded w-md p-5 space-y-5">
          <div className="flex items-center justify-center text-white h-10 w-10 rounded-full bg-primary">
            <FaCheck />
          </div>
          <h1 className="font-bold text-lg mt-5">THANK YOU FOR YOUR ORDER</h1>
          <p className="text-gray-500 mt-2 text-sm">
            You will receive an email confirmation shortly.
          </p>

          <div className="grid grid-cols-2 rounded-lg">
            <div className="bg-gray-100 p-5 rounded-tl-lg rounded-bl-lg flex flex-col items-center gap-2">
              <div className="flex items-center justify-between  w-full">
                <div className="flex items-center gap-2">
                  <img
                    src={cart ? cart![0].image : ""}
                    className="size-7 object-contain"
                  />
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-bold text-xs">{cart && cart![0].name}</p>
                    <p className="text-gray-500 font-semibold text-xs">
                      $ {cart![0].price}
                    </p>
                  </div>
                </div>
                <p className="font-bold text-gray-500 text-sm">
                  x{cart![0].quantity}
                </p>
              </div>
              {cart && cart!.length > 1 && (
                <p className="border-gray-400 border-t p-1 text-gray-500 font-semibold text-xs text-center w-full">
                  and {cart!.length - 1} other item(s)
                </p>
              )}
            </div>
            <div className="bg-black p-5 rounded-tr-lg rounded-br-lg flex flex-col gap-1 justify-center text-gray-700 font-semibold">
              <p className="text-gray-400 font-semibold text-sm">GRAND TOTAL</p>
              <p className="text-white font-bold text-sm">$ {grandTotal}</p>
            </div>
          </div>

          <button
            onClick={() => {
              setModal(false);
              navigate("/");
            }}
            className="bg-primary h-10 text-white text-xs w-full font-semibold tracking-wider cursor-pointer"
          >
            BACK TO HOME
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
