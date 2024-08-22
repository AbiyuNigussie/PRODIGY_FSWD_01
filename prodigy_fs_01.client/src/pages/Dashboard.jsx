import React, { useState, useEffect } from "react";
import { getUserData, setAuthToken } from "../Services/apiService";
import { useAuth } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token, logout } = useAuth();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (token) {
          setAuthToken(token);
        } else {
          setAuthToken(null);
        }
        const data = await getUserData();
        setUserData(data);
      } catch (error) {
        console.error("Failed to fetch user data", error);
        setError("Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [token]);

  if (loading) {
    return <div className="text-center text-gray-400">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-400">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="container mx-auto">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          {/* Navigation */}
          <nav className="mb-4 text-gray-400">
            <Link to="/" className="text-blue-400 hover:underline">
              Home
            </Link>
            {" > "}
            <span className="text-gray-600">Dashboard</span>
          </nav>

          {/* Page Title */}
          <h1 className="text-3xl font-bold mb-4 text-white">
            Welcome, {userData?.username || "User"}!
          </h1>

          {/* User Information */}
          <p className="text-lg mb-4 text-gray-300">
            Email: {userData?.email || "Not available"}
          </p>
          <p className="text-lg mb-4 text-gray-300">
            Member since:{" "}
            {userData?.createdAt
              ? new Date(userData.createdAt).toLocaleDateString()
              : "Not available"}
          </p>

          {/* Logout Button */}
          <button
            onClick={logout}
            className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
