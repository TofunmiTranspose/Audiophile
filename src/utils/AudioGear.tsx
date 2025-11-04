import { assets } from "../assets/assets";

const AudioGear = () => {
  return (
    <div className="grid lg:grid-cols-2 place-items-center lg:gap-15">
      <div className="order-2 lg:order-1 py-10 lg:p-15 flex flex-col justify-center gap-6">
        <h2 className="text-3xl sm:text-4xl md:text-3xl xl:text-4xl text-center md:text-left font-bold manrope uppercase leading-[2.5rem] md:leading-[2.8rem]">
          Bringing you the <br /> <span className="primary">best</span> audio
          gear
        </h2>
        <p className="text-gray-500 text-center sm:text-left">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="order-1 overflow-hidden rounded-lg max-h-100 xl:max-h-120 3xl:max-h-150 w-full">
        <img
          src={assets.man}
          className="rounded-lg scale-130 md:scale-100 w-full h-full"
        />
      </div>
    </div>
  );
};

export default AudioGear;
