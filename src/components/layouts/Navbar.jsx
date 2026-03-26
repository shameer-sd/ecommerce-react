import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));


  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/product?title=${search}`);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("userName");

    setIsLoggedIn(!!token);
    setUserName(storedUser || "");

  }, []);

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-sky-950 text-white">

      <h1 className="text-2xl font-bold text-green-500">
        <Link to="/">FakeStore</Link>
      </h1>
      <form onSubmit={handleSearch} className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-1 rounded text-black outline-none"
        />
        <button
          type="submit"
          className="px-3 py-1 bg-green-500 text-black rounded hover:bg-green-400"
        >
          Search
        </button>
      </form>

      <ul className="flex gap-6 items-center">

        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "text-green-500 font-semibold underline" : ""}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/product" className={({ isActive }) => isActive ? "text-green-500 font-semibold underline" : ""}>
            Products
          </NavLink>
        </li>

        <li>
          <NavLink to="/cart" className={({ isActive }) => isActive ? "text-green-500 font-semibold underline" : ""}>
            Cart
          </NavLink>
        </li>

        {isLoggedIn ? (
          <>
            <li>
              <Link
                to="/profile"
                className="px-4 py-1 border border-green-500 rounded hover:bg-green-500 hover:text-black treansition"
              >
                Profile
              </Link>
            </li>

          </>
        ) : (
          <>
            <li>
              <Link
                to="/login"
                className="px-4 py-1 border border-green-500 rounded hover:bg-green-500 hover:text-black transition"
              >
                Login
              </Link>
            </li>
          </>
        )}




      </ul>
    </nav>
  );
};

export default Navbar;
