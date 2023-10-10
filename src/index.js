import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { AlbumDataProvider } from "./Components/MusicPlayer/MusicPlayer";
import { AlbumAdminDataProvider } from "./Pages/Admin/AlbumDataContext";
import { TrendingSongsProvider } from "./Components/TrendingContext/TrendingSongsContext"; // Import your TrendingSongsProvider
import { UserProvider } from "./Pages/login/UserContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <RecoilRoot>
        <AlbumAdminDataProvider>
          <AlbumDataProvider>
            <TrendingSongsProvider> 
              <UserProvider>
              <App />
              </UserProvider>   
            </TrendingSongsProvider>
          </AlbumDataProvider>
        </AlbumAdminDataProvider>
      </RecoilRoot>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
