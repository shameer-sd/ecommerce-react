import { useEffect, useState } from "react";
import ProductCard from "../components/ui/ProductCard";
import { getProducts } from "../api";


const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {

      const data = await getProducts()
      setProducts(data);
    } catch (error) {
      console.log("Error fetching products", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <h2 className="text-center text-xl py-20 bg-sky-950 text-white">
        Loading products...
      </h2>
    );
  }

  return (
    <section className="">

      <h1 className="text-3xl font-bold text-center p-2 bg-sky-950 text-white">
        All Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 bg-sky-950 text-white ">

        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}

      </div>

    </section>
  );
};

export default Product;