import { assets } from "../../assets/assets";
import Button2 from "../../utils/Button2";

const AfterOrange = () => {
  return (
    <div
      className="h-[24.5vw] bg-black/20 bg-no-repeat bg-center bg-contain rounded-lg grid grid-cols-2 p-15"
      style={{
        backgroundImage: `url(${assets.speaker2})`,
      }}
    >
      <div className="flex flex-col gap-5 justify-center pl-10">
        <h2 className="font-bold manrope text-3xl">ZX7 SPEAKER</h2>
        <Button2 />
      </div>
    </div>
  );
};
export default AfterOrange;
