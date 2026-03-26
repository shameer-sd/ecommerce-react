import React from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  const user = {
    name: localStorage.getItem("userName") || "Guest User",
    email: localStorage.getItem("userEmail") || "guest@example.com",
    avatar: "https://i.pravatar.cc/150?img=3",
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm">
        
        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <img
            src={user.avatar}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-blue-500"
          />

          {/* User Info */}
          <h2 className="mt-4 text-xl font-semibold text-gray-800">
            {user.name}
          </h2>
          <p className="text-gray-500">{user.email}</p>
        </div>

        {/* Divider */}
        <div className="my-6 border-t"></div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <button className="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-sky-900 transition">
            Edit Profile
          </button>

          <button
            onClick={handleLogout}
            className="w-full py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;