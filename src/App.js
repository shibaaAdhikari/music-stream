import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Mainpage from "./Pages/Mainpage/Mainpage";
import Login from "../src/Pages/login/Login";
import Signup from "./Pages/SignuP/Signup";
import Features from "./Pages/Features/Features";
import Home from "./Pages/Homepage/Home";
import SearchBar from "./Components/SearchBar";
import Footer from "./Pages/Footer/Footer";

function App() {
  return (
    <>
      <div>
        <SearchBar />
        <Routes>
          <Route path="/" element={<Mainpage />}>
            <Route index element={<Home />}></Route>
            <Route path="/Features" element={<Features />}></Route>
          </Route>

          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
