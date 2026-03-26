import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {

  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="border rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer bg-white text-black"
    >
      <img
        src={product.images[0]}
        alt={product.title}
        className="h-40 w-full object-cover mb-4"
      />

      <h3 className="font-semibold text-lg mb-2">
        {product.title}
      </h3>

      <p className="text-green-600 font-bold">
        ${product.price}
      </p>
    </div>
  );
};

export default ProductCard;