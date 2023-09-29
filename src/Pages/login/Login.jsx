import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Label, Input, Navbar, NavbarBrand } from "reactstrap";
import { useNavigate } from "react-router-dom";
// import { usernameAtom } from "../../Components/Recoil/Store";
// import { useSetRecoilState } from "recoil";
import "./Login.css";
import music from "../../Assests/music3.png";

const Login = () => {
  // State variables for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const setUsername = useSetRecoilState(usernameAtom);

  // Event handler for form submit
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // Make an HTTP POST request to the backend login route
  //     const response = await axios.post("http://127.0.0.1:3000/Login/login", {
  //       username: email,
  //       password,
  //     });

  //     // Handle the response based on the status
  //     if (response.status === 200) {
  //       // Login successful, perform necessary actions
  //       localStorage.setItem("username", email);
  //       console.log(response);
  //       navigate("/");
  //       // Redirect to the desired page or update the app state
  //     } else {
  //       // Login failed, display error message or perform necessary actions
  //       console.log("Login failed");
  //     }
  //   } catch (error) {
  //     // Handle any errors that occurred during the request
  //     console.error(error);
  //   }
  // };

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
        // Check if the logged-in user is an admin
        if (email === "admin") {
          // Admin login, navigate to the admin route
          navigate("/audioUpload");
        } else {
          // Regular user login, navigate to the default route
          navigate("/");
        }
  
        // Store the username in local storage or app state as needed
        localStorage.setItem("username", email);
        console.log(response);
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
            <img alt="logo" style={{ width: "20%" }} src={music} />
          </NavbarBrand>
        </Navbar>
      </div>

      <div
        className=" container bg-black d-flex mt-5 align-items-center justify-content-center"
        style={{
          borderRadius: "15px",
          width: "30%",
          height: "60vh",
          boxShadow: "0 4px 6px  rgba(214, 150, 76, 0.859)",
        }}
      >
        <div>
          <h1 className="pt-5 text-center text-light mb-5 mt-5">Login Page</h1>
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
                style={{ backgroundColor: "rgb(217, 73, 25)" }}
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
