import React, { useState } from "react";
import { Label } from "reactstrap";

const Artist = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Default role

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send signup data to your backend API using fetch or an HTTP library
    const response = await fetch("http://127.0.0.1:3000/api/accounts/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password, role }),
    });

    // Handle response
    if (response.ok) {
      const data = await response.json();

      // Console log the token and success message
      console.log("Token:", data.token);
      console.log("Message:", data.message);

      // Optionally, you can redirect the user to a different page here
      // or show a success message to the user on the frontend
    } else {
      // Handle the case where signup failed (e.g., username or email already taken)
      const errorData = await response.json();
      console.error(errorData);
    }
  };

  return (
    <div
    id="signup"
    className="container mt-5 px-5 bg-black"
    style={{
      boxShadow: "0 4px 6px  rgba(214, 150, 76, 0.859)",
      width: "30%",
      borderRadius: "10px",
      height: "60vh",
    }}
  >
    <h2 className="text-light text-center mt-5 mb-5 pt-5">Sign Up</h2>
    <form onSubmit={handleSubmit} className="text-light">
      <div className="form-group">
        <Label htmlFor="username">Username</Label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <Label htmlFor="email">What's your email?</Label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <Label htmlFor="password">Create a Password</Label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <Label htmlFor="userType">Are you a user or an artist?</Label>
        <select
          className="form-control"
          id="userType"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="user">User</option>
          <option value="artist">Artist</option>
        </select>
      </div>
      <button  className="signup-button mt-3 "
                style={{ backgroundColor: "rgb(217, 73, 25)", width: "25%" }}
                type="submit">Sign Up</button>
    </form>
  </div>
  );
};

export default Artist;
