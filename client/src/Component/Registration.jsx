import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/user/createuser", { name, email, password })
      .then((result) => {
        console.log(result);
        alert("Registration successful! Redirecting to login...");
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="form-box">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className="form-control mb-2"
          onChange={(e) => setName(e.target.value)}
        />
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
        <button type="submit" className="btn btn-success w-100">
          Register
        </button>
        <p>
          Already have an account
          <Link to="/login" className="btn">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};
