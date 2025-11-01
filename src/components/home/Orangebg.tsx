import { assets } from "../../assets/assets";
import Button1 from "../../utils/Button1";

const Orangebg = () => {
  return (
    <div className="bg-[#D87D4A] h-screen/2 grid grid-cols-2 rounded-lg pt-10">
      <div className="flex justify-center">
        <img src={assets.speaker} className="h-9/10 self-end " />
      </div>
      <div className="flex flex-col justify-center gap-5">
        <h1 className="text-white font-bold text-2xl md:text-7xl">
          ZX9 <br /> SPEAKER
        </h1>
        <p className="text-white/70 leading-loose">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button1 />
      </div>
    </div>
  );
};

export default Orangebg;
