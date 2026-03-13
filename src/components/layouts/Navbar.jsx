import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-sky-950 text-white">

      <h1 className="text-2xl font-bold text-green-500">
       <Link to="/">FakeStore</Link>
      </h1>

      <ul className="flex gap-6 items-center">

        <li className="cursor-pointer hover:text-green-400">
          <NavLink to="/" className={({ isActive}) => isActive? "text-green-500 font-semibold underline" : ""}>Home</NavLink>
        </li>

        <li className="cursor-pointer hover:text-green-400">
          <NavLink to="/product" className={({ isActive }) => isActive ? "text-green-500 font-semibold underline" : "" } > Products </NavLink>
        </li>

        <li className="cursor-pointer hover:text-green-400">
          <NavLink to="/cart" className={({ isActive })=> isActive ? "text-green-500 font -semibold underline" : ""}>Cart</NavLink>
        </li>

        <li>
          <Link
            to="/login"
            className="px-4 py-1 border border-green-500 rounded hover:bg-green-500 hover:text-black transition"
          >
            Login
          </Link>
        </li>

        <li>
          <Link
            to="/signup"
            className="px-4 py-1 bg-green-500 rounded text-black hover:bg-green-400 transition"
          >
            Sign Up
          </Link>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
