import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/user/login", {
        email,
        password,
      });

      alert(response.data.message);

      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.error("Error:", error.response.data.message);
      alert(error.response.data.message);
    }
  };

  return (
    <div className="form-box">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          className="form-control mb-2"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control mb-2"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-primary w-100">
          <Link to="/HomePage" className="btn btn-primary">
            Login
          </Link>
        </button>
      </form>
    </div>
  );
};
