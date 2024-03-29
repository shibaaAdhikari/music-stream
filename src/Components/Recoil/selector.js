import { selector } from "recoil";
import axios from "axios";
import SpotifyPlaylist from "../../Data/SpotifyPlaylist.json";

const url = `http://localhost:8000/songs`;
const url1 = "http://127.0.0.1:3000/Songs/song";
const musics = selector({
  key: "musics",
  get: async () => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
});

// const songsSelector = selector({
//   key: "songs",
//   get: async () => {
//     try {
//       const response = await axios.get(url1);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   },
// });

// const PlayListSelector = selector({
//   key: "playlist",
//   get: () => {
//     return SpotifyPlaylist.spotifyPlaylist.map((item) => ({
//       id: item.id,
//       title: item.title,
//       subTitle: item.subTitle || item.subtitle,
//       image: item.image,
//       backgroundColor: item.backgroundColor || "defaultBackgroundColor",
//     }));
//   },
// });



export { musics};
