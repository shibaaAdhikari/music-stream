import { atom } from "recoil";

const musicState = atom({
  key: "dummyMusics",
  default: {
    id: "1",
    musicName: "hello how are you",
  },
});

const PlayList = atom({
  key: "spotifyPlayList",
  default: "nothing",
});

const authAtom = atom({
  key: "auth",
  default: () => {
    const storedUser = localStorage.getItem("userName");
    return storedUser ? JSON.parse(storedUser) : null;
  },
});

const searchFunction = atom({
  key: "searchQueryState",
  default: "",
});

export { musicState, PlayList, authAtom, searchFunction };

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
