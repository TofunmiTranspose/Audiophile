import { assets } from "../../assets/assets";
import LinkCol from "./LinkCol";

const AfterOrange = () => {
  return (
    <div className="relative h-40 md:h-[24.5vw] md:bg-black/20 rounded-lg grid grid-cols-2 md:gap-10">
      <img
        src={assets.speaker2}
        className="absolute w-full h-full object-cover"
      />
      <div className="order- z-2 p-4 md:p-0 bg-transparent mr-auto">
        <LinkCol detail={{ title: "ZX7 SPEAKER", link: "" }} />
      </div>
    </div>
  );
};
export default AfterOrange;
