import React from "react";
import { Button, Form, Label, Input, Navbar, NavbarBrand } from "reactstrap";
import "./Login.css";
import Spotify from "../../Assests/spotify.png";
import LoginButton from "../../Components/LoginButton";
import { IoLogoFacebook } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineApple } from "react-icons/ai";
import {
  browserLocalPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router";
import { useState } from "react";
import { authAtom } from "../../Components/Recoil/Store";
import { useSetRecoilState } from "recoil";

const Login = () => {
  const navigate = useNavigate();
  var eReg = /\S+@\S+\.\S+/;

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const setUser = useSetRecoilState(authAtom);

  const validatePassword = () => {
    if (!password) {
      return false;
    }
    return password.length < 8 ? false : true;
  };

  const validateEmail = () => {
    return eReg.test(email) ? true : false;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const formSubmitClickHandler = async (e) => {
    e.preventDefault();

    if (!email && !password) {
      setEmailError("Please enter a valid email address.");
      setPasswordError("Please enter a valid password.");
    }
    if (!eReg.test(email)) {
      setEmailError("Please enter a valid email address.");
    }
    if (password.length < 8) {
      setPasswordError("Please enter a valid password.");
    }

    await signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        setEmailError("");
        setPasswordError("");
        await setPersistence(auth, browserLocalPersistence).then(() => {
          return signInWithEmailAndPassword(auth, email, password);
        });
        console.log("User display name:", userCredential.user);
        navigate("/");
        localStorage.setItem("user", JSON.stringify(userCredential.user));
        setUser(userCredential.user);
      })
      .catch((error) => {
        let errorCode = error.code;
        console.log(error.message);
        if (errorCode === "auth/wrong-password") {
          setPasswordError("Wrong Password.");
        }
        if (errorCode === "auth/too-many-requests") {
          setEmailError("Too many requests. Please try again later.");
        }
        if (errorCode === "auth/user-not-found") {
          setEmailError("User not found.");
        }
      });
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
        <div style={{ width: "55%" }}>
          <div className="loginTitle">
            <h1 className="text-light text-center title mb-5">
              Log in to Spotify
            </h1>
          </div>

          <div className="continerID">
            <div className="d-flex flex-column">
              <LoginButton icon={<FcGoogle />} title="Continue with Google" />
              <LoginButton
                icon={<IoLogoFacebook />}
                title="Continue with facebook"
              />
              <LoginButton
                icon={<AiOutlineApple />}
                title="Continue with Apple"
              />
            </div>
          </div>

          <hr style={{ color: "white" }}></hr>
          <Form onSubmit={formSubmitClickHandler}>
            <Label for="exampleEmail" className="text-light">
              Email or UserName
            </Label>
            <Input
              type="email"
              name="Email or username"
              id="exampleEmail"
              placeholder="Email or Username "
              className="InputField "
              onChange={handleEmailChange}
              invalidate={emailError !== ""}
              validate={validateEmail}
              errorMessage={emailError}
            />

            <Label for="examplePassword" className="text-light">
              Password
            </Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Password"
              className="InputField "
              onChange={handlePasswordChange}
              invalidate={passwordError !== ""}
              validate={validatePassword}
              errorMessage={passwordError}
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
                <span>
                  <a href="/SignUp" alt="signIn" className="text-light mx-2">
                    Sign up for spotify
                  </a>
                </span>
              </h6>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
