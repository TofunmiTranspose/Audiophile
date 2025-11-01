import { assets } from "../../assets/assets";
import LinkCol from "./LinkCol";

const AfterOrange = () => {
  return (
    <div className="relative md:h-[24.5vw] md:bg-black/20 rounded-lg grid md:grid-cols-2 gap-10">
      <img
        src={assets.speaker2}
        className="md:absolute w-full h-full rounded-lg md:rounded-none"
      />
      <div className="z-2 p-4 md:p-0 bg-black/20 md:bg-transparent rounded-lg md:rounded-none">
        <LinkCol detail={{ title: "ZX7 SPEAKER", link: "" }} />
      </div>
    </div>
  );
};
export default AfterOrange;
