
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import {loginUser} from "../api"

const Login = () => {

  const navigate = useNavigate()


  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.placeholder.toLowerCase().replace(" ", "")]: e.target.value
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {

    const data = await loginUser(formData.email, formData.password)

    console.log(data)

    if (data.access_token) {

      localStorage.setItem("token", data.access_token)

      localStorage.setItem("userName", formData.email)
      navigate("/", { replace: true })

    } else {

      alert("Invalid email or password")

    }

  } catch (error) {

    alert("Error occurred")
    console.log(error)

  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-black">

      <div className="w-96 bg-gray-900 p-8 rounded-xl shadow-lg border border-green-500">

        <h2 className="text-2xl font-bold text-center text-green-500 mb-2">
          Welcome Back
        </h2>

        <p className="text-gray-400 text-center mb-6">
          Login to your account
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="email"
            value={formData.email}
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

          <button type="submit" className="bg-green-500 text-black font-semibold py-3 rounded hover:bg-green-400 transition">
            Login
          </button>

        </form>

        <p className="text-gray-400 text-sm text-center mt-5">
          Don't have an account?{" "}
          <Link to="/signup" className="text-green-500 font-semibold">
            Sign Up
          </Link>
        </p>

      </div>

    </div>
  );
};

export default Login;