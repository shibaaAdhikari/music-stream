import React from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import Spotify from "../../Assests/spotify.png";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleChangeEvent = async (e) => {
    e.preventDefault();

    // Perform form validation
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }

    if (!isPasswordValid) {
      setPasswordError("Password must be at least 6 characters long");
    } else {
      setPasswordError("");
    }

    if (isEmailValid && isPasswordValid) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(userCredential.user);
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      }
    }
  };
  const validateEmail = (email) => {
    // Implement email validation logic
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    // Implement password validation logic
    return password.length >= 6;
  };

  return (
    <>
      <div id="signup">
        {Spotify}
        <Form onSubmit={handleChangeEvent}>
          <div
            className=" container bg-white d-flex mt-5 align-items-center justify-content-center"
            style={{ borderRadius: "15px", width: "40%" }}
          >
            <div style={{ width: "55%" }}>
              <div>
                <h4 className="text-dark text-center title mb-5 mt-5">
                  Sign up for free to start listening.
                </h4>
              </div>
              <div>
                <Form className="d-flex flex-column">
                  <Button
                    className="InputField align-contents-center rounded-pill mb-2 p-2 "
                    style={{ backgroundColor: "rgb(64,90,147)" }}
                  >
                    Sign up with Facebook
                  </Button>
                  <Button
                    className="InputField rounded-pill mb-2 p-2 text-dark"
                    style={{ backgroundColor: "white" }}
                  >
                    Continue with GOogle
                  </Button>
                </Form>
              </div>
              <hr style={{ color: "white" }}></hr>
              <div>
                <div>
                  <FormGroup>
                    <Label for="exampleEmail" className="text-dark">
                      What's your email?
                    </Label>
                    <Input
                      type="email"
                      name="Email or username"
                      id="exampleEmail"
                      placeholder="Email your email "
                      className="InputField "
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    {emailError && <span className="error">{emailError}</span>}
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword" className="text-dark">
                      Create a Password
                    </Label>
                    <Input
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="Create a password"
                      className="InputField"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={6}
                    />
                    {passwordError && (
                      <span className="error">{passwordError}</span>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword" className="text-dark">
                      What should we call you?
                    </Label>
                    <Input
                      type="text"
                      name="profileName"
                      id="exampleProfileName"
                      placeholder="Enter a profile name."
                      className="InputField"
                    />
                  </FormGroup>

                  <Col sm={10}>
                    <Label for="gender">What&apos;s your gender?</Label>
                    <FormGroup check>
                      <Input name="radio" type="radio" />{" "}
                      <Label check>Male</Label>
                    </FormGroup>
                    <FormGroup check>
                      <Input name="radio" type="radio" />{" "}
                      <Label check>Female</Label>
                    </FormGroup>
                    <FormGroup check>
                      <Input name="radio" type="radio" />{" "}
                      <Label check>Others</Label>
                    </FormGroup>
                  </Col>
                </div>
                <div className="d-flex flex-column">
                  <Button
                    className="  rounded-pill mb-3 p-2 justify-content-center align-item-center"
                    style={{ backgroundColor: "rgb(30,215,96)", width: "25%" }}
                    type="submit"
                  >
                    Sign up
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Signup;
