import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Form, Label, Input, Navbar, NavbarBrand } from "reactstrap";
import { useNavigate } from "react-router-dom";
import music from "../../Assests/music3.png";

const LoginArtist = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an HTTP POST request to the backend login route
      const response = await axios.post(
        "http://127.0.0.1:3000/api/artists/signin",
        {
          username: email,
          password,
        }
      );

      if (response.status === 200) {
        // Retrieve the token from the response data
        const { token } = response.data;

        // Store the token in localStorage
        localStorage.setItem("token", token);
        console.log("Token:", token);

        // Perform necessary actions
        navigate("/upload");
      } else {
        // Login failed, display error message or perform necessary actions
        console.log("Login failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* ... rest of your component */}
    </div>
  );
};

export default LoginArtist;
