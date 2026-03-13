
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";

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

  const handleSubmit = async(e) => {
    e.preventDefault();

    // const users = JSON.parse(localStorage.getItem("users")) || [];

    // const user = users.find(
    //   (u) =>
    //     u.email === formData.email &&
    //     u.password === formData.password
    // );

    // if (user) {
    //   localStorage.setItem("currentUser", JSON.stringify(user));
    //   alert("Login Successful!");
    //   Navigate("/",{replace:true});

    // } else {
    //   alert("Invalid email or password");
    // }

    try {
      const response=await fetch("https://api.escuelajs.co/api/v1/auth/login",{
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email:formData.email,
          password:formData.password
        })
      })

      const data =await response.json();
      console.log(data);
      if(response.ok && data.access_token){

        localStorage.setItem('token',data.access_token)

        alert("success")
        navigate("/",{replace:true});

        
      }else{
        alert("Invalid email or password");
        console.log(data.message);
        
      }

      

    } catch (error) {
      alert("error occured");
      console.log(error);
      
      
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

          <button className="bg-green-500 text-black font-semibold py-3 rounded hover:bg-green-400 transition">
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