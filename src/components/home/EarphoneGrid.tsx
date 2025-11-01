import { assets } from "../../assets/assets";
import LinkCol from "./LinkCol";

const EarphoneGrid = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="flex items-center justify-center rounded-lg">
        <img src={assets.earbud} className="rounded-lg" />
      </div>
      <div className="bg-black/5 rounded-lg">
        <LinkCol detail={{ title: "YX1 EARPHONES", link: "" }} />
      </div>
    </div>
  );
};

export default EarphoneGrid;
