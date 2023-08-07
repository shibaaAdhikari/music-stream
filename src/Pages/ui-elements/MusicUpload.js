import React, { useState } from "react";

const MusicUpload = ({ onInput }) => {
  const [filesInfo, setFilesInfo] = useState([]);

  const handleFileChange = (event) => {
    if (event.target.files) {
      let filesInfoArray = [];

      for (const file of event.target.files) {
        const fileReader = new FileReader();
        fileReader.onload = () => {
          filesInfoArray.push({
            name: file.name,
            size: file.size,
            title: "", // Add a title property for each file
          });
          setFilesInfo([...filesInfoArray]);

          // Log the uploaded file details
          console.log("Uploaded file details:", {
            name: file.name,
            size: file.size,
            type: file.type,
          });
        };
        fileReader.readAsDataURL(file);
      }
    } else {
      setFilesInfo([]);
    }

    // Pass the necessary information to the onInput function
    const filesDataToSend = filesInfo.map((fileInfo) => ({
      name: fileInfo.name,
      size: fileInfo.size,
      title: fileInfo.title,
    }));

    onInput("songFiles", filesDataToSend, true);
  };

  const handleSongTitleChange = (index, value) => {
    const updatedFilesInfo = [...filesInfo];
    updatedFilesInfo[index].title = value;
    setFilesInfo(updatedFilesInfo);

    onInput(`songTitle${index}`, value, true);
  };

  return (
    <div className="music-upload-container">
      <input
        type="file"
        accept=".flac,.alac,.wav,.raw,.pcm,.sam,.mp3"
        multiple
        id="songFiles"
        onChange={handleFileChange}
      />
      {filesInfo.map((fileInfo, index) => (
        <div key={index}>
          <label>{fileInfo.name}</label>
          <input
            type="text"
            placeholder="Song Title"
            value={fileInfo.title}
            onChange={(e) => handleSongTitleChange(index, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default MusicUpload;
