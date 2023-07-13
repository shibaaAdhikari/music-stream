import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Label, Input, Navbar, NavbarBrand } from "reactstrap";
import "./Login.css";
import Spotify from "../../Assests/spotify.png";
import LoginButton from "../../Components/LoginButton";
import { IoLogoFacebook } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineApple } from "react-icons/ai";

const Login = () => {
  // State variables for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Event handler for form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an HTTP POST request to the backend login route
      const response = await axios.post("http://127.0.0.1:3000/Login/login", {
        username: email,
        password,
      });

      // Handle the response based on the status
      if (response.status === 200) {
        // Login successful, perform necessary actions
        console.log("Login successful");
        // Redirect to the desired page or update the app state
      } else {
        // Login failed, display error message or perform necessary actions
        console.log("Login failed");
      }
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <Navbar className="" style={{ backgroundColor: "black" }}>
          <NavbarBrand href="/">
            <img alt="logo" style={{ width: "50%" }} src={Spotify} />
          </NavbarBrand>
        </Navbar>
      </div>

      <div
        className=" container bg-black d-flex mt-5 align-items-center justify-content-center"
        style={{ borderRadius: "15px", width: "40%", height: "90vh" }}
      >
        <div>
          <hr style={{ color: "white" }}></hr>
          <Form onSubmit={handleSubmit}>
            <Label for="exampleEmail" className="text-light">
              UserName
            </Label>
            <Input
              type="text"
              name="username"
              id="exampleEmail"
              placeholder="Email or Username"
              className="InputField"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Label for="examplePassword" className="text-light">
              Password
            </Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Password"
              className="InputField"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="d-flex flex-column mb-5">
              <Button
                className=" text-dark rounded-pill mb-5 mt-4 p-2"
                style={{ backgroundColor: "rgb(31,223,100)" }}
                type="submit"
              >
                Login
              </Button>
              <Label className="text-center text-light">
                Forgot your password
              </Label>
              <hr style={{ color: "white" }}></hr>
              <h6 className="text-center" style={{ color: "rgb(167,164,124)" }}>
                Don't have an account?{" "}
              </h6>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
