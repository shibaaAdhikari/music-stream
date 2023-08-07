import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Mainpage from "./Pages/Mainpage/Mainpage";
import Login from "../src/Pages/login/Login";
import Signup from "./Pages/SignuP/Signup";
import Features from "./Pages/Features/Features";
import Home from "./Pages/Homepage/Home";
import Playlist from "./Pages/Playlist/Playlist";

import AlbumList from "./Components/AlbumList";
import SongsUpload from "./Pages/Admin/SongsUpload/SongsUpload";
import NotFound from "./Pages/PageNotFound/NotFound";
import NewAlbum from "./Pages/Admin/NewAlbum";
// import AudioUpload from "./Pages/Admin/SongsUpload/AudioUpload";
import Artist from "./Pages/SignupArtist/SignupArtist";
import AlbumDetails from "./Pages/AlbumDetails";

function App() {
  const albumId = "65c1c903-b7cf-495d-8442-4438b42d96c3";
  return (
    <>
      <div>
        <div></div>
        <Routes>
          <Route path="/" element={<Mainpage />}>
            <Route index element={<Home />}></Route>
            <Route path="/Features" element={<Features />}></Route>
            <Route path="/Album/:id" element={<AlbumList />}></Route>
            <Route path="/Playlist" element={<Playlist />}></Route>
          </Route>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignupArtist" element={<Artist />} />
          <Route path="/upload" element={<SongsUpload />} />
          <Route path="/audioUpload" element={<NewAlbum />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/details" element={<AlbumDetails albumId={albumId} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
