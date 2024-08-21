import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      await login(username, password);
      navigate("/home");
    } catch (error) {
      alert("Invalid credentials");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="card w-96 bg-white shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-center text-2xl font-bold">Login</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="input input-bordered"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
          <div className="text-center mt-4">
            <a href="#" className="link link-hover text-sm">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
