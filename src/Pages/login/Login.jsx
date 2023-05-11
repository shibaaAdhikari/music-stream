import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Navbar,
  NavbarBrand,
} from "reactstrap";
import "./Login.css";
import Spotify from "../../Assests/spotify.png";
import LoginButton from "../../Components/LoginButton";
import { IoLogoFacebook } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineApple } from "react-icons/ai";

const Login = () => {
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
        style={{ borderRadius: "15px", width: "40%" }}
      >
        <div style={{ width: "55%" }}>
          <div>
            <h1 className="text-light text-center title mb-5">
              Log in to Spotify
            </h1>
          </div>
          <div>
            <Form className="d-flex flex-column">
              <LoginButton icon={<FcGoogle />} title="Continue with Google" />
              <LoginButton
                icon={<IoLogoFacebook />}
                title="Continue with facebook"
              />
              <LoginButton
                icon={<AiOutlineApple />}
                title="Continue with Apple"
              />
            </Form>
          </div>
          <hr style={{ color: "white" }}></hr>
          <div>
            <FormGroup>
              <Label for="exampleEmail" className="text-light">
                Email or UserName
              </Label>
              <Input
                type="email"
                name="Email or username"
                id="exampleEmail"
                placeholder="Email or Username "
                className="InputField "
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword" className="text-light">
                Password
              </Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Password"
                className="InputField"
              />
            </FormGroup>
          </div>
          <div className="d-flex flex-column mb-5">
            <Button
              className=" text-dark rounded-pill mb-3 p-2"
              style={{ backgroundColor: "rgb(31,223,100)" }}
            >
              Login
            </Button>
            <a href="" className="text-center text-light" alt="forgot password">
              Forgot your password
            </a>
            <hr style={{ color: "white" }}></hr>
            <h6 className="text-center" style={{ color: "rgb(167,164,124)" }}>
              Don't have an account?{" "}
              <span>
                <a href="#" alt="signIn" className="text-light mx-2">
                  Sign up for spotify
                </a>
              </span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
