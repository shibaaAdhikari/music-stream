import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Label, Input, Navbar, NavbarBrand } from "reactstrap";
import { useNavigate } from "react-router-dom";
import music from "../../Assests/music3.png";
import "./SignUp.css";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    userType: "", // New field for user type (user/artist)
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/Signup/signup",
        formData
      );
      console.log(response.data); // Handle the response as needed
      // Optionally, redirect the user to a different page or perform additional actions
      navigate("/Login");
    } catch (error) {
      console.error(error.response.data); // Handle the error response
    }
  };

  return (
    <>
      <Navbar className="" style={{ backgroundColor: "black" }}>
        <NavbarBrand href="/">
          <img alt="logo" style={{ width: "20%" }} src={music} />
        </NavbarBrand>
      </Navbar>
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
        <Form onSubmit={handleSubmit}>
          <h1 className="text-light text-center mt-5 mb-5 pt-5">Signin Page</h1>
          <div>
            <div>
              <Label
                for="exampleEmail"
                className="text-light"
                style={{ fontSize: "15px", fontWeight: "bolder" }}
              >
                What's your email?
              </Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter your email"
                className="InputField form-control"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />

              <Label
                for="examplePassword"
                className="text-light"
                style={{ fontSize: "15px", fontWeight: "bolder" }}
              >
                Create a Password
              </Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Create a password"
                className="InputField form-control"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
                minLength={6}
              />

              <Label
                for="exampleProfileName"
                className="text-light"
                style={{ fontSize: "15px", fontWeight: "bolder" }}
              >
                What should we call you?
              </Label>
              <Input
                type="text"
                name="profileName"
                id="exampleProfileName"
                placeholder="Enter a profile name."
                className="InputField form-control"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />

              <Label
                for="exampleUserType"
                className="text-light"
                style={{ fontSize: "15px", fontWeight: "bolder" }}
              >
                Are you a user or an artist?
              </Label>
              <Input
                type="select"
                name="userType"
                id="exampleUserType"
                className="InputField form-control"
                value={formData.userType}
                onChange={(e) =>
                  setFormData({ ...formData, userType: e.target.value })
                }
                required
              >
                <option value="">Select</option>
                <option value="user">User</option>
                <option value="artist">Artist</option>
              </Input>

              <p style={{ fontSize: "15px" }} className="text-light">
                This appears on your profile.
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <Button
                className="signup-button mt-3 "
                style={{ backgroundColor: "rgb(217, 73, 25)", width: "25%" }}
                type="submit"
              >
                Sign up
              </Button>
            </div>
            <p className="text-center text-light mb-3">
              Have an account?{" "}
              <span class="text-decoration-none">
                <a href="/login" className="text-white">
                  Login
                </a>
              </span>
            </p>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Signup;
