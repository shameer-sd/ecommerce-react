const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black text-white">
      <h1 className="text-2xl font-bold text-green-500">Shameer Store</h1>

      <ul className="flex gap-6">
        <li className="cursor-pointer hover:text-green-400">Home</li>
        <li className="cursor-pointer hover:text-green-400">Products</li>
        <li className="cursor-pointer hover:text-green-400">Cart</li>
      </ul>
    </nav>
  )
}

export default Navbar