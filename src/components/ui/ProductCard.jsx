const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">

      <img
        src={product.images[0]}
        alt={product.title}
        className="h-40 w-full object-cover mb-4"
      />

      <h3 className="font-semibold text-lg mb-2">
        {product.title}
      </h3>

      <p className="text-green-600 font-bold mb-3">
        ${product.price}
      </p>

      <button className="bg-green-500 text-white px-4 py-2 rounded w-full">
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard