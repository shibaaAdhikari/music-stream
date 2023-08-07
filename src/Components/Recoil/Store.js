import { atom } from "recoil";

const musicState = atom({
  key: "dummyMusics",
  default: {
    id: "1",
    musicName: "hello how are you",
  },
});

const songsState = atom({
  key: "songsState",
  default: [],
});

const PlayList = atom({
  key: "spotifyPlayList",
  default: "nothing",
});

const authAtom = atom({
  key: "auth",
  default: () => {
    const storedUser = localStorage.getItem("username");
    return storedUser ? storedUser : null;
  },
});

const usernameAtom = atom({
  key: "username",
  default: "",
});

const searchFunction = atom({
  key: "searchQueryState",
  default: "",
});

export {
  musicState,
  PlayList,
  authAtom,
  searchFunction,
  songsState,
  usernameAtom,
};

// export const musics = selector({
//   key: "musics",
//   get: async () => {
//     try {
//       const res = await axios("http://localhost:8000/songs");
//       console.log(res);
//       return res.data || [];
//     } catch (error) {
//       console.log(`ERROR:/${error}`);
//     }
//   },
// });
