import React, { useState } from "react";
import "./Login.css";
import { getMockUser } from "../mockService"; // Import mock service

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email); // Basic email regex validation
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mockUser = getMockUser(); // Get mock user data
    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }
    setError(""); // Clear errors if everything is valid
    localStorage.setItem("user", JSON.stringify(mockUser)); // Store user data
    console.log("Login successful:", { email, password });

    // Redirect or handle login logic
    window.location.href = "/home"; // Redirect to home page after successful login
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Log in</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default Login;
