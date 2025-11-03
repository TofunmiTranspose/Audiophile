import { useParams } from "react-router-dom";
import Button from "../../utils/Button";

const Product = ({
  order = 1,
  data,
}: {
  order?: number;
  data: {
    image: string;
    name: string;
    text: string;
    price?: string;
    type: string;
  };
}) => {
  console.log(useParams());

  return (
    <div className="grid grid-cols-2 gap-20">
      <div
        className={`order-${
          order + 1
        } flex-1 items-center justify-center bg-black/4  rounded p-10`}
      >
        <img src={data.image} className=" max-h-90 mx-auto" />
      </div>
      <div className="order-1 flex flex-col justify-center gap-5">
        <p className="secondary manrope text-sm font-bold tracking-[0.5em]">
          NEW PRODUCT
        </p>
        <h2 className="font-bold text-4xl uppercase leading-tight">
          <span>{data.name}</span> <br />{" "}
          <span>{data.type?.toUpperCase()}</span>{" "}
        </h2>
        <p className="text-base text-black/50 leading-relaxed">{data.text}</p>
        {data.price && <p className="font-bold">$ {data.price}</p>}
        <Button link={`/${data.type}/${data.name.trim()}`} />
      </div>
    </div>
  );
};

export default Product;
