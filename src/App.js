import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Mainpage from "./Pages/Mainpage/Mainpage";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Mainpage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
