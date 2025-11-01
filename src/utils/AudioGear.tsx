import { assets } from "../assets/assets";

const AudioGear = () => {
  return (
    <div className="grid md:grid-cols-2 place-items-center md:gap-15">
      <div className="p-15 flex flex-col justify-center gap-6">
        <h2 className="text-4xl font-bold manrope uppercase leading-[2.8rem]">
          Bringing you the <br /> <span className="primary">best</span> audio
          gear
        </h2>
        <p className="text-black/60">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div>
        <img src={assets.man} className="rounded-lg" />
      </div>
    </div>
  );
};

export default AudioGear;
