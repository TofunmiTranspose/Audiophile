import { FaChevronRight } from "react-icons/fa";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
      {[assets.headphone1, assets.speaker, assets.earbud1].map(
        (item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-end space-y-2 pb-5 h-40 bg-black/5 rounded"
          >
            <img
              src={item}
              alt={`product-${index}`}
              className="absolute size-35  -top-1/2 object-contain"
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
