import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Label, Input } from "reactstrap";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
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
    } catch (error) {
      console.error(error.response.data); // Handle the error response
    }
  };

  return (
    <>
      <div id="signup" className="container mt-5 bg-white">
        <Form onSubmit={handleSubmit}>
          <div
            className=" container-fluid bg-white d-flex mt-5 align-items-center justify-content-center"
            style={{ borderRadius: "15px", width: "40%" }}
          >
            <div style={{ width: "65%" }}>
              <div>
                <h4
                  className="text-dark text-center title mb-5 mt-5"
                  style={{
                    fontSize: "30px",
                    fontWeight: "bolder",
                    fontFamily:
                      "font-family: var(--font-family,CircularSpTitle,CircularSpTitle-Tall,CircularSp-Arab,CircularSp-Hebr,CircularSp-Cyrl,CircularSp-Grek,CircularSp-Deva,var(--fallback-fonts,sans-serif));",
                  }}
                >
                  Sign up for free to start listening.
                </h4>
              </div>

              <div>
                <hr></hr>
                <p
                  style={{ fontSize: "17px", fontWeight: "bolder" }}
                  className="text-center"
                >
                  Signup with your email address
                </p>
              </div>
              <hr style={{ color: "white" }}></hr>

              <div>
                <div>
                  <Label
                    for="exampleEmail"
                    className="text-dark"
                    style={{ fontSize: "15px", fontWeight: "bolder" }}
                  >
                    What's your email?
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Enter your email"
                    className="InputField"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />

                  <Label
                    for="examplePassword"
                    className="text-dark"
                    style={{ fontSize: "15px", fontWeight: "bolder" }}
                  >
                    Create a Password
                  </Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Create a password"
                    className="InputField"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    required
                    minLength={6}
                  />

                  <Label
                    for="exampleProfileName"
                    className="text-dark"
                    style={{ fontSize: "15px", fontWeight: "bolder" }}
                  >
                    What should we call you?
                  </Label>
                  <Input
                    type="text"
                    name="profileName"
                    id="exampleProfileName"
                    placeholder="Enter a profile name."
                    className="InputField"
                    value={formData.profileName}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                  />

                  <p style={{ fontSize: "15px" }}>
                    This appears on your profile.
                  </p>
                </div>
                <div className="d-flex  justify-content-center">
                  <Button
                    className="rounded-pill mb-3 p-2 text-dark p-2"
                    style={{ backgroundColor: "rgb(18, 143, 6)", width: "25%" }}
                    type="submit"
                  >
                    Sign up
                  </Button>
                </div>
                <p className="text-center">Have an account? Login</p>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Signup;
