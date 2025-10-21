import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Predefined credentials for testing
 const predefinedEmail = "naveensabbavarapu111@gmail.com";
const predefinedPassword = "Naveen9686.";

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4Zjc2NGEyYzE4ZmM4ZTI3OTQ2YWVkYiIsImVtYWlsIjoibmF2ZWVuc2FiYmF2YXJhcHUxMTFAZ21haWwuY29tIiwiaWF0IjoxNzYxMDQ4MTA5LCJleHAiOjE3NjExMzQ1MDl9.yN2nSAtp5xAEj2WjcS99ZrS_7IFB9ZLy7ALQyHCrnOw";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === predefinedEmail && password === predefinedPassword) {
      localStorage.setItem("token", token); // store token
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #6a11cb, #2575fc)",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Job Board Login</h1>
      {error && <p style={{ color: "yellow" }}>{error}</p>}
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" }}
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: "10px", borderRadius: "6px", border: "none" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: "10px", borderRadius: "6px", border: "none" }}
        />
        <button
          type="submit"
          style={{
            padding: "12px 20px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#ff6a00",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
