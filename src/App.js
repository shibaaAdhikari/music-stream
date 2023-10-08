import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Mainpage from "./Pages/Mainpage/Mainpage";
import Login from "../src/Pages/login/Login";
import Signup from "./Pages/SignuP/Signup";
import Features from "./Pages/Features/Features";
import Home from "./Pages/Homepage/Home";
import AlbumList from "./Components/AlbumList";
import NotFound from "./Pages/PageNotFound/NotFound";
import NewAlbum from "./Pages/Admin/NewAlbum";
import Artist from "./Pages/SignupArtist/SignupArtist";
import AlbumDetails from "./Pages/AlbumDetails";
import LikedSongs from "./Pages/LikedSongs/LikedSongs";
import FeatureContainer from "./Pages/FeatureContainer/FeatureContainer";
import AdminPage from "./Pages/Admin/AdminPage";
import SongsDetails from "./Pages/Admin/SongsDetails";
import { TokenRefreshProvider } from "./Components/Auth/TokenRefreshContext";
import TrendingSongsCardContainer from "./Components/CardContainer/TrendingSongsCardContainer";



function App() {
  const albumId = "70d73a58-128e-4200-9597-9581fdf661d0";

  return (
    <>
    <TokenRefreshProvider> 
    <Routes>
  {/* Main Page Routes */}
  <Route path="/" element={<Mainpage />}>
    <Route index element={<Home />} />
    <Route path="/Features" element={<Features />} />
    <Route path="/Album/:id" element={<AlbumList />} />
    <Route path="/likedSong" element={<LikedSongs />} />
    <Route path="/FeatureContainer/:genre" element={<FeatureContainer />} />
    <Route path="/Trending" element={<TrendingSongsCardContainer />} />
 
    <Route path="/SignupArtist" element={<Artist />} />
    <Route path="/details" element={<AlbumDetails albumId={albumId} />} />
    <Route path="*" element={<NotFound />} />
  </Route>
  <Route path="/Signup" element={<Signup />} />
    <Route path="/Login" element={<Login />} />
  {/* Admin Page Routes */}
  <Route path="/admin" element={<AdminPage />}>
    <Route path="/admin/audioUpload" element={<NewAlbum />} />
    <Route path="/admin/audioData" element={<SongsDetails/>}/>
  </Route>

  {/* Redirect to the main page when no matching routes are found */}
  <Route path="/*" element={<Navigate to="/" />} />
</Routes>
</TokenRefreshProvider>

    </>
  );
}

export default App;
