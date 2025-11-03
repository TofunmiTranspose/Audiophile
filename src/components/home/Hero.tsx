import { assets } from "../../assets/assets";
import Button from "../../utils/Button";

const Hero = () => {
  return (
    <div className="relative overflow-hidde h-[90vh] dark1 grid md:grid-cols-2">
      <div className=" text-white z-1 flex flex-col gap-2 items-center md:items-start justify-center px-10 pb-10">
        <h3 className="opacity-50">NEW PRODUCT</h3>
        <h1 className="uppercase text-2xl sm:text-3xl md:text-5xl font-bold">
          XX99 Mark II Headphones
        </h1>
        <p className="text-center md:text-left">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button link="/headphones" />
      </div>
      <div className="overflow-hidden absolute md:static z-0 flex md:p-5 justify-center items-center w-full my-auto h-full w-full bg-[#0e0e0e] md:bg-transparent">
        <img
          src={assets.headphone}
          className="object-center brightness-70 md:brightness-100 object-contain w-full h-full"
        />
      </div>
    </div>
  );
};

export default Hero;
