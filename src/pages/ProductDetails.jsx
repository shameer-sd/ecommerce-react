import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetails = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    try {
      const res = await fetch(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <h2 className="text-center py-20 text-white bg-sky-950">
        Loading...
      </h2>
    );
  }

  return (
    <div className="bg-sky-950 text-white min-h-screen p-10">

      <button
        onClick={() => navigate(-1)}
        className="mb-6 bg-gray-800 px-4 py-2 rounded"
      >
        ← Back
      </button>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-96 object-cover rounded"
        />

        <div>

          <h1 className="text-3xl font-bold mb-4">
            {product.title}
          </h1>

          <p className="text-gray-300 mb-4">
            {product.description}
          </p>

          <h2 className="text-2xl text-green-400 font-bold mb-6">
            ${product.price}
          </h2>

          <button className="bg-green-500 text-black px-6 py-2 rounded font-semibold">
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;