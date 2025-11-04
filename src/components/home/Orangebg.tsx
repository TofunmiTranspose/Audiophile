import { assets } from "../../assets/assets";
import Button1 from "../../utils/Button1";

const Orangebg = () => {
  return (
    <div className="relative bg-[#D87D4A] h-screen/2 grid  md:grid-cols-2 rounded-lg md:pt-10 p-1 gap-2 md:gap-5">
      <div className="flex w-[85vw] max-w-120 md:w-full h-[85vw] max-h-120 md:h-full justify-center items-center border border-white/50 rounded-full p-[2em] m-auto">
        <div className="border border-white/50 w-full h-full rounded-full flex items-center justify-center p-[1em]">
          <img
            src={assets.speaker}
            className="md:h-9/10 h-full w-8/10 p-5 m-auto self-end object-contain"
          />
        </div>
      </div>
      <div className="relative md:static -top-8 flex flex-col justify-center gap-5 md:gap-5 ">
        <h1 className="text-white text-center md:text-left font-semibold md:font-bold text-4xl md:text-5xl lg:text-7xl">
          ZX9 <br /> SPEAKER
        </h1>
        <p className="text-white/70 text-center md:text-left max-w-8/10 md:max-w-full mx-auto md:mx-none leading-loose">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <div className="w-full flex justify-center md:justify-start">
          <Button1 />
        </div>
      </div>
    </div>
  );
};

export default Orangebg;
