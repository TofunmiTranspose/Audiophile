import { use } from "react";
import { CartContext } from "../context/Cart";
import { useNavigate } from "react-router-dom";
import Input from "../utils/Input";

const Checkout = () => {
  const { setShow } = use(CartContext);
  const navigate = useNavigate();
  setShow(false);
  return (
    <div className="min-h-[90vh] bg-gray-100">
      <div className="w-17/20 mx-auto">
        <button onClick={() => navigate(-1)}>
          <p className="my-3 text-gray-700 font-semibold">Go back</p>
        </button>
        <div className="grid grid-cols-[2fr_1fr] gap-5">
          <div className="p-5 md:p-10 rounded-lg bg-white">
            <h1 className="text-xl font-bold mb-5">CHECKOUT</h1>
            <form className="space-y-10">
              <div className="space-y-2">
                <h2 className="primary font-bold text-sm tracking-wide">
                  BILLING DETAILS
                </h2>
                <div className="grid md:grid-cols-2 gap-2 md:gap-4">
                  <Input
                    type="text"
                    id="name"
                    label="Name"
                    placeholder="Transpose"
                  />
                  <Input
                    type="email"
                    id="email"
                    label="Email Address"
                    placeholder="alibaba@gmail.com"
                  />
                  <Input
                    type="tel"
                    id="phone"
                    label="Phone Number"
                    placeholder="+234 90 1312 3768"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="primary font-bold text-sm tracking-wide">
                  SHIPPING INFO
                </h2>
                <div className="grid md:grid-cols-2 gap-2 md:gap-4">
                  <Input
                    type="text"
                    id="address"
                    label="Address"
                    placeholder="1137 Light venue"
                    span={2}
                  />
                  <Input
                    type="text"
                    id="zip"
                    label="ZIP Code"
                    placeholder="10001"
                  />
                  <Input
                    type="text"
                    id="city"
                    label="City"
                    placeholder="Lagos"
                  />
                  <Input
                    type="text"
                    id="country"
                    label="Country"
                    placeholder="Nigeria"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
