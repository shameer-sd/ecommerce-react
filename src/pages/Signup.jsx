

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {

  const navigate=useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.placeholder.toLowerCase().replace(" ", "")]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmpassword) {
      alert("Passwords do not match");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    users.push({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      confimPass : formData.confirmpassword,
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup Successful!");

    navigate("/login")

    // setFormData({
    //   name: "shameer",
    //   email: "muhammedshameer999@gmail.com",
    //   phone: "9544617877",
    //   password: "12345678",
    //   confirmpassword: "12345678",
    // });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">

      <div className="w-96 bg-gray-900 p-8 rounded-xl shadow-lg border border-green-500">

        <h2 className="text-2xl font-bold text-center text-green-500 mb-2">
          Create Account
        </h2>

        <p className="text-gray-400 text-center mb-6">
          Join Shameer Store
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-500"
          />

          <input
            type="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-500"
          />

          <input
            type="tel"
            placeholder="phone"
            value={formData.phone}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-500"
          />

          <input
            type="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-500"
          />

          <input
            type="password"
            placeholder="confirmpassword"
            value={formData.confirmpassword}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-500"
          />

          <button type="submit" className="bg-green-500 text-black font-semibold py-3 rounded hover:bg-green-400 transition">
            Sign Up
          </button>

        </form>

        <p className="text-gray-400 text-sm text-center mt-5">
          Already have an account?{" "}
          <Link to="/login" className="text-green-500 font-semibold">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
};

export default Signup;