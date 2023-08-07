// import React, { useState } from "react";
// import { Table, Form, FormGroup, Input, Button } from "reactstrap";
// import axios from "axios";

// const SongsUpload = () => {
//   const [songData, setSongData] = useState({
//     artist: "",
//     album: "",
//     genre: "",
//     song_name: "",
//     duration: "",
//     durationInSeconds: "",
//     release_date: "",
//     file_path: null,
//     image_path: null,
//   });

//   const [songs, setSongs] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSongData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setSongData((prevState) => ({
//       ...prevState,
//       [name]: files[0],
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append("artist", songData.artist);
//       formData.append("album", songData.album);
//       formData.append("genre", songData.genre);
//       formData.append("song_name", songData.song_name);
//       formData.append("duration", songData.duration);
//       formData.append("durationInSeconds", songData.durationInSeconds);
//       formData.append("release_date", songData.release_date);
//       formData.append("file_path", songData.file_path);
//       formData.append("image_path", songData.image_path);

//       const response = await axios.post("", formData);

//       console.log(response.data);

//       setSongs((prevSongs) => [...prevSongs, songData]);

//       setSongData({
//         artist: "",
//         album: "",
//         genre: "",
//         song_name: "",
//         duration: "",
//         durationInSeconds: "",
//         release_date: "",
//         file_path: null,
//         image_path: null,
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDelete = (index) => {
//     setSongs((prevSongs) => prevSongs.filter((_, i) => i !== index));
//   };

//   return (
//     <div>
//       <div>
//         <h2>Upload Song</h2>
//         <Form onSubmit={handleSubmit}>
//           <FormGroup>
//             <Input
//               type="text"
//               name="artist"
//               value={songData.artist}
//               onChange={handleChange}
//               required
//               placeholder="Artist"
//             />
//           </FormGroup>
//           <FormGroup>
//             <Input
//               type="text"
//               name="album"
//               value={songData.album}
//               onChange={handleChange}
//               required
//               placeholder="Album"
//             />
//           </FormGroup>
//           <FormGroup>
//             <Input
//               type="text"
//               name="genre"
//               value={songData.genre}
//               onChange={handleChange}
//               required
//               placeholder="Genre"
//             />
//           </FormGroup>
//           <FormGroup>
//             <Input
//               type="text"
//               name="song_name"
//               value={songData.song_name}
//               onChange={handleChange}
//               required
//               placeholder="Song Name"
//             />
//           </FormGroup>
//           <FormGroup>
//             <Input
//               type="text"
//               name="duration"
//               value={songData.duration}
//               onChange={handleChange}
//               required
//               placeholder="Duration"
//             />
//           </FormGroup>
//           <FormGroup>
//             <Input
//               type="text"
//               name="durationInSeconds"
//               value={songData.durationInSeconds}
//               onChange={handleChange}
//               required
//               placeholder="Duration in Seconds"
//             />
//           </FormGroup>
//           <FormGroup>
//             <Input
//               type="date"
//               name="release_date"
//               value={songData.release_date}
//               onChange={handleChange}
//               required
//               placeholder="Release Date"
//             />
//           </FormGroup>
//           <FormGroup>
//             <Input
//               type="file"
//               name="file_path"
//               onChange={handleFileChange}
//               required
//             />
//           </FormGroup>
//           <FormGroup>
//             <Input type="file" name="image_path" onChange={handleFileChange} />
//           </FormGroup>
//           <Button type="submit" color="primary">
//             Upload
//           </Button>
//         </Form>
//       </div>
//       <div>
//         <Table>
//           <thead>
//             <tr>
//               <th>Artist</th>
//               <th>Album</th>
//               <th>Genre</th>
//               <th>Song Name</th>
//               <th>Duration</th>
//               <th>Duration (Seconds)</th>
//               <th>Release Date</th>
//               <th>File Path</th>
//               <th>Image Path</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {songs.map((song, index) => (
//               <tr key={index}>
//                 <td>{song.artist}</td>
//                 <td>{song.album}</td>
//                 <td>{song.genre}</td>
//                 <td>{song.song_name}</td>
//                 <td>{song.duration}</td>
//                 <td>{song.durationInSeconds}</td>
//                 <td>{song.release_date}</td>
//                 <td>{song.file_path.name}</td>
//                 <td>{song.image_path ? song.image_path.name : ""}</td>
//                 <td>
//                   <Button color="danger" onClick={() => handleDelete(index)}>
//                     Delete
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//     </div>
//   );
// };

// export default SongsUpload;
