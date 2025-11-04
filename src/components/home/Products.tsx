import { FaChevronRight } from "react-icons/fa";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="pt-20 grid sm:grid-cols-2 md:grid-cols-3 gap-5 space-y-20 md:space-y-0">
      {[assets.headphone1, assets.speaker, assets.earbud1].map(
        (item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-end space-y-3 pb-5 h-40 bg-black/5 rounded-lg"
          >
            <img
              src={item}
              alt={`product-${index}`}
              className="absolute size-28 sm:size-35 -top-1/3 sm:-top-1/2 object-contain"
            />
            <h1 className="font-bold manrope">HEADPHONES</h1>
            <Link
              to={"/"}
              className=" flex items-center gap-1 text-xs font-bold text-black/50"
            >
              SHOP <FaChevronRight className="primary manrope" />
            </Link>
          </div>
        )
      )}
    </div>
  );
};

export default Products;
