import "./App.css";
import Home from "./Pages/Homepage/Home";
// import Navbars from "./Pages/Navbar.js/Navbars";
import Features from "./Pages/Features/Features";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Library from "./Pages/Library/Library";
import Playlist from "./Pages/Playlist/Playlist";
import LikedSongs from "./Pages/LikedSongs/LikedSongs";
function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/library" element={<Library />} />
            <Route path="/playList" element={<Playlist />} />
            <Route path="/liked" element={<LikedSongs />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;
