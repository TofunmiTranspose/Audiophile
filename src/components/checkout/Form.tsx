import Input from "../../utils/Input";

const Form = () => {
  return (
    <div className="p-4 md:p-10 rounded-lg bg-white">
      <h1 className="text-xl font-bold mb-5">CHECKOUT</h1>
      <div className="space-y-10">
        <div className="space-y-2">
          <h2 className="primary font-bold text-sm tracking-wide">
            BILLING DETAILS
          </h2>
          <div className="grid md:grid-cols-2 gap-2 md:gap-4">
            <Input type="text" id="name" label="Name" placeholder="Transpose" />
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
            <Input type="text" id="zip" label="ZIP Code" placeholder="10001" />
            <Input type="text" id="city" label="City" placeholder="Lagos" />
            <Input
              type="text"
              id="country"
              label="Country"
              placeholder="Nigeria"
            />
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="primary font-bold text-sm tracking-wide">
            PAYMENT DETAILS
          </h2>
          <div className="grid md:grid-cols-2 gap-2 md:gap-4">
            <Input
              type="radio"
              id="payment"
              label="Payment Method"
              placeholder="e-Money"
              span={2}
            />
            <Input
              type="text"
              id="e-number"
              label="e-Money Number"
              placeholder="2585746478"
            />
            <Input
              type="text"
              id="e-pin"
              label="e-Money PIN"
              placeholder="6983"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
