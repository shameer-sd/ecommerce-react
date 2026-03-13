import { useEffect, useState } from "react"
import ProductCard from "../ui/ProductCard"
import { getFeaturedProducts } from "../../api"



const FeaturedProducts = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
        getFeaturedProducts()
        .then(data => setProducts(data))
  }, [])

  return (
    <section className="py-16 px-8 bg-sky-950 text-white">

      <h2 className="text-3xl font-bold text-center mb-10 text-green-500">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {products.map(product => (
          <ProductCard key={product.id} product={product}/>
        ))}

      </div>

    </section>
  )
}

export default FeaturedProducts