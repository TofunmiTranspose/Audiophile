import type { CartType } from "../../context/Cart";

const Summary = ({ cart }: { cart: CartType[] | null }) => {
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
    <div className="">
      <div className="p-5 rounded-lg bg-white space-y-5">
        <h2 className="font-bold text-lg">SUMMARY</h2>

        <div className="grid gap-3">
          {cart?.map((cart, i) => (
            <div key={i} className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="bg-gray-100 p-2 rounded-md">
                  <img src={cart.image} className="size-9 object-contain" />
                </div>
                <div className="flex flex-col justify-center gap-1">
                  <p className="font-bold text-sm">{cart.name}</p>
                  <p className="text-gray-500 font-semibold text-xs">
                    $ {cart.price}
                  </p>
                </div>
              </div>
              <p className="p-2 text-gray-700 font-semibold">
                x{cart.quantity}
              </p>
            </div>
          ))}
        </div>

        <div className="calc flex flex-col gap-2">
          <div className="flex items-center justify-between text-sm">
            <p className="text-gray-500 font-semibold">TOTAL</p>
            <p className="font-bold">$ {total}</p>
          </div>

          <div className="flex items-center justify-between text-sm">
            <p className="text-gray-500 font-semibold">SHIPPING</p>
            <p className="font-bold">$ {shipping}</p>
          </div>

          <div className="flex items-center justify-between text-sm">
            <p className="text-gray-500 font-semibold">VAT (INCLUDED)</p>
            <p className="font-bold">$ {vat}</p>
          </div>

          <div className="flex items-center justify-between text-sm mt-2">
            <p className="text-gray-500 font-semibold">GRAND TOTAL</p>
            <p className="font-bold primary">$ {grandTotal}</p>
          </div>
        </div>

        <button
          type="submit"
          className="bg-primary h-10 text-white text-xs w-full font-semibold tracking-wider cursor-pointer"
        >
          CONTINUE & PAY
        </button>
      </div>
    </div>
  );
};

export default Summary;
