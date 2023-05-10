import "./App.css";
import Home from "./Pages/Homepage/Home";
// import Navbars from "./Pages/Navbar.js/Navbars";
import Features from "./Pages/Features/Features";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Library from "./Pages/Library/Library";
import Playlist from "./Pages/Playlist/Playlist";
import LikedSongs from "./Pages/LikedSongs/LikedSongs";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./Components/SearchBar";
import SidenavBar from "./Components/SidenavBar";

// import SearchBar from "./Components/SearchBar";

function App() {
  return (
    <>
      <div>
        {/* <BrowserRouter>
          <SearchBar />
          <div className="screens-container d-flex">
            <Sidebar></Sidebar>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/library" element={<Library />} />
              <Route path="/playList" element={<Playlist />} />
              <Route path="/liked" element={<LikedSongs />} />
            </Routes>
          </div> */}
        {/* <Sidebar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/library" element={<Library />} />
              <Route path="/playList" element={<Playlist />} />
              <Route path="/liked" element={<LikedSongs />} />
            </Routes>
          </Sidebar> */}
        {/* <Sidebar /> */}
        {/* </BrowserRouter> */}
        <BrowserRouter>
          <div className="">
            <SearchBar></SearchBar>
            <SidenavBar>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/features" element={<Features />} />
                <Route path="/library" element={<Library />} />
                <Route path="/playList" element={<Playlist />} />
                <Route path="/liked" element={<LikedSongs />} />
              </Routes>
            </SidenavBar>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
