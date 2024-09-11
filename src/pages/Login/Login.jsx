import { useState } from "react";
import { Link } from "react-router-dom";
// import * as login from "./Login.css"

const Login = () => {
  // State for storing email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State for handling errors
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    // Clear errors
    setError("");

    // Add logic for logging in (e.g., calling an API)
    console.log("Logging in with:", { email, password });

    // Clear form fields (optional)
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Link to="/home">
          <button type="submit">Login</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
