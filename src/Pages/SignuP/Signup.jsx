import React from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { authAtom } from "../../Components/Recoil/Store";

const Signup = () => {
  var eReg = /\S+@\S+\.\S+/;
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [username, setUsername] = useState("default username");
  const setUser = useSetRecoilState(authAtom);

  const validatePassword = () => {
    if (!password) {
      return false;
    }
    return password.length < 6 ? false : true;
  };
  const validateEmail = (email) => {
    return eReg.test(email) ? true : false;
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const signupFormSubmitHandler = async (e) => {
    e.preventDefault();
    if (!eReg.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        // Update the display name
        await updateProfile(auth.currentUser, {
          displayName: username,
        })
          .then(() => {
            // Profile updated!
            // ...
            console.log(auth.currentUser.displayName);
          })
          .catch((error) => {
            // An error occurred
            // ...
            console.log(error.message);
          });

        // Verify that the display name is set
        // console.log("User display name:", user.displayName);
        // console.log(user);
        setUser(user);
        localStorage.setItem("user", user);
        navigate("/Login");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(error.message);
        if (errorCode === "auth/email-already-in-use") {
          setEmailError("Email already in use.");
        }
        if (errorCode === "auth/missing-email") {
          setEmailError("Please enter a valid email address.");
        }
        if (errorCode === "auth/weak-password") {
          setPasswordError("Password should be at least 6 characters.");
        }
      });
  };

  return (
    <>
      <div id="signup" className="container-fluid  bg-white">
        <Form onSubmit={signupFormSubmitHandler}>
          <div
            className=" container-fluid bg-white d-flex mt-5 align-items-center justify-content-center"
            style={{ borderRadius: "15px", width: "40%" }}
          >
            <div style={{ width: "65%" }}>
              <div>
                {/* <image src={Spotify} /> */}
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
                <div className="d-flex flex-column">
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
                    Continue with Google
                  </Button>
                </div>

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
                    name="Email or username"
                    id="exampleEmail"
                    placeholder="Email your email "
                    className="InputField "
                    value={email}
                    onChange={handleEmailChange}
                    validate={validateEmail}
                    required
                  />
                  <p>
                    {emailError && (
                      <span className="error" style={{ color: "red" }}>
                        {emailError}
                      </span>
                    )}
                  </p>

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
                    value={password}
                    onChange={handlePasswordChange}
                    validate={validatePassword}
                    required
                    minLength={6}
                  />
                  {passwordError && (
                    <span className="error" style={{ color: "red" }}>
                      {passwordError}
                    </span>
                  )}

                  <Label
                    for="examplePassword"
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
                    onChange={handleUsernameChange}
                  />

                  <p style={{ fontSize: "15px" }}>
                    This appears on your profile.
                  </p>

                  <Col sm={10}>
                    <Label for="gender">What&apos;s your gender?</Label>
                    <div className="d-flex gap-5 mb-3 flex-wrap">
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
                        <Label check>Non-binary</Label>
                      </FormGroup>
                    </div>
                  </Col>
                </div>

                <div className="mb-2">
                  <Label check className="mb-2">
                    <Input type="checkbox" /> I agree to the Spotify Terms and
                    Conditions of Use and Privacy Policy.
                  </Label>
                  <Label check className="mb-2">
                    <Input type="checkbox" /> Share my registration data with
                    Spotify's content providers for marketing purposes.
                  </Label>
                  <Label check className="mb-2">
                    <Input type="checkbox" /> I agree to the Spotify Terms and
                    Conditions of Use and Privacy Policy.
                  </Label>
                </div>

                <div className="d-flex  justify-content-center">
                  <Button
                    className="  rounded-pill mb-3 p-2  text-dark p-2"
                    style={{ backgroundColor: "rgb(30,215,96)", width: "25%" }}
                    type="submit"
                  >
                    Sign up
                  </Button>
                </div>
                <p className="text-center"> Have an account? Login</p>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Signup;
