import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider"; // Import your AuthProvider

const Home = () => {
  const navigate = useNavigate();
  const { token } = useAuth(); // Access token from AuthProvider

  const handleLogin = () => {
    navigate("/login");
  };

  const handleDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="hero min-h-screen bg-gray-900">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://picsum.photos/400?random=1"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Fancy graphic"
        />
        <div>
          <h1 className="text-5xl font-bold text-white">
            Welcome to the Authentication Demo!
          </h1>
          <p className="py-6 text-gray-300">
            Experience a secure and seamless login process. Your journey to
            authentication starts here.
          </p>
          <button
            onClick={handleLogin}
            className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white"
          >
            Get Started
          </button>
          {token && (
            <button
              onClick={handleDashboard}
              className="btn btn-secondary bg-green-600 hover:bg-green-700 text-white mt-4 ml-4"
            >
              Go to Dashboard
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
