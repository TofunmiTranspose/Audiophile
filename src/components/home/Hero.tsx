import { assets } from "../../assets/assets";

const Hero = () => {
  return (
    <div className="relative overflow-hidden h-[90vh] dark1 grid grid-cols-2">
      <div className="text-white">
        <h3 className="opacity-50">NEW PRODUCT</h3>
        <h1 className="uppercase">XX99 Mark II Headphones</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button className="bg-[#d87d4a] hover:bg-[#fbaf85] h-12 w-40 flex items-center justify-center font-bold transition duration-300 ease cursor-pointer">
          SEE PRODUCT
        </button>
      </div>
      <div className="flex-1 justify-center items-center w-full h-full">
        <img
          src={assets.headphone}
          className="object-center object-cover h-full"
        />
      </div>
    </div>
  );
};

export default Hero;
