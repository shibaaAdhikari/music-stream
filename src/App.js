import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Mainpage from "./Pages/Mainpage/Mainpage";
import Login from "../src/Pages/login/Login";
import Signup from "./Pages/SignuP/Signup";
import Features from "./Pages/Features/Features";
import Home from "./Pages/Homepage/Home";

import AlbumList from "./Components/AlbumList";

function App() {
  return (
    <>
      <div>
        <div></div>
        <Routes>
          <Route path="/" element={<Mainpage />}>
            {/* <SearchBar /> */}
            <Route index element={<Home />}></Route>
            <Route path="/Features" element={<Features />}></Route>
            <Route path="/Album/:id" element={<AlbumList />}></Route>
            {/* <Footer /> */}
          </Route>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
