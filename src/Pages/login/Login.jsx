import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Form, Label, Input, Navbar, NavbarBrand } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import music from "../../Assests/music3.png";
import { useUserContext } from "./UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // State to store the selected role
  const navigate = useNavigate();
  const [error, setError] = useState(""); // State for error messages
  const { setUserRole } = useUserContext();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post(
  //       "http://127.0.0.1:3000/api/accounts/signin",
  //       {
  //         username: email,
  //         password,
  //         role,
  //       }
  //     );

  //     if (response.status === 200) {
  //       const userData = response.data;
  //       const userId = userData.id;

  //       localStorage.setItem("username", email);

  //       if (email === "admin") {
  //         navigate("/audioUpload");
  //       } else {
  //         navigate("/");
  //       }
  //       setError("");
  //     } else {
  //       const errorMessage =
  //         response.data.message ||
  //         "Login failed. Please check your credentials.";
  //       setError(errorMessage);
  //     }

  //   } catch (error) {
  //     console.error(error);
  //     setError("Login failed. Please check your credentials.");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/api/accounts/signin",
        {
          username: email,
          password,
          role,
        }
      );
  
      if (response.status === 200) {
        const userData = response.data;
        const userId = userData.id;
  
        localStorage.setItem("username", email);
        setUserRole(role);
        if (role === "artist") {
          navigate("/admin");
        } else {
          navigate("/");
        }
        setError("");
      } else {
        const errorMessage = response.data.message || "Login failed. Please check your credentials.";
  
        if (errorMessage.includes("User not found")) {
          setError("Username not found.");
        } else if (errorMessage.includes("Invalid credentials")) {
          setError("Password incorrect.");
        } else if (errorMessage.includes("Role does not match")) {
          setError("Role does not match.");
        } else {
          setError("Login failed. Please check your credentials.");
        }
      }
    } catch (error) {
      console.error(error);
      setError("Login failed. Please check your credentials.");
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

            <Label for="exampleRole" className="text-light">
              Role
            </Label>
            <Input
              type="select"
              name="role"
              id="exampleRole"
              className="InputField"
              value={role}
              onChange={(e) => setRole(e.target.value)} // Update the role state
            >
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="artist">Artist</option>
            </Input>

            {error && <p className="text-danger">{error}</p>}

            <div className="d-flex flex-column mb-5">
              <Button
                className=" text-dark rounded-pill mb-5 mt-4 p-2"
                style={{ backgroundColor: "rgb(217, 73, 25)" }}
                type="submit"
              >
                Login
              </Button>
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



