import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrash, FaEdit, FaCheck, FaTimes } from 'react-icons/fa';

const SongsDetails = () => {
  const [albums, setAlbums] = useState([]);
  const [editedAlbum, setEditedAlbum] = useState(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/albums/all'
        );
        setAlbums(response.data);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    fetchAlbums();
  }, []);

  const handleDelete = async (albumId) => {
    try {
      // Send a DELETE request to delete the album
      await axios.delete(`http://localhost:3000/api/albums/delete/${albumId}`);

      // Handle success and update the state accordingly
      // For example, remove the deleted album from the albums list
      setAlbums((prevAlbums) => prevAlbums.filter((album) => album.id !== albumId));
    } catch (error) {
      console.error('Error deleting album:', error);
    }
  };

  const handleEdit = (album) => {
    setEditedAlbum(album);
  };

  const handleUpdate = async () => {
    if (!editedAlbum) {
      return;
    }

    try {
      // Send a PUT request to update the album data on the server
      await axios.put(
        `http://localhost:3000/api/albums/update/${editedAlbum.id}`,
        editedAlbum
      );

      // Handle success and update the state accordingly
      // For example, reset the edited album state and reload the albums list
      setEditedAlbum(null);
     // Implement fetchAlbums to reload the albums list
    } catch (error) {
      console.error('Error updating album:', error);
    }
  };

  return (
    <div style={{ textAlign: 'start', color: 'white' }}>
      <h2>Albums</h2>
      <table className="custom-table">
        <thead>
          <tr>
            <th style={{ width: '14%' }}>ID</th>
            <th style={{ width: '14%' }}>Title</th>
            <th style={{ width: '14%' }}>Songs</th>
            <th style={{ width: '14%' }}>Artist</th>
            <th style={{ width: '14%' }}>Year</th>
            <th style={{ width: '14%' }}>Type</th>
            <th style={{ width: '14%' }}>CoverArt</th>
            <th style={{ width: '14%' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {albums.map((album) => (
            <tr key={album.id}>
              <td>{album.id}</td>
              <td>
                {editedAlbum && editedAlbum.id === album.id ? (
                  <input
                    type="text"
                    value={editedAlbum.title}
                    onChange={(e) => setEditedAlbum({ ...editedAlbum, title: e.target.value })}
                  />
                ) : (
                  album.title
                )}
              </td>
              <td>
                <ul>
                  {album.songs.map((song) => (
                    <li key={song.id}>{song.title}</li>
                  ))}
                </ul>
              </td>
              <td>
                {editedAlbum && editedAlbum.id === album.id ? (
                  <input
                    type="text"
                    value={editedAlbum.artist}
                    onChange={(e) => setEditedAlbum({ ...editedAlbum, artist: e.target.value })}
                  />
                ) : (
                  album.artist
                )}
              </td>
              <td>{album.year}</td>
              <td>
                {editedAlbum && editedAlbum.id === album.id ? (
                  <input
                    type="text"
                    value={editedAlbum.type}
                    onChange={(e) => setEditedAlbum({ ...editedAlbum, type: e.target.value })}
                  />
                ) : (
                  album.type
                )}
              </td>
              <td>
                <img
                  src={`http://localhost:3000/${album.coverImage}`}
                  alt="Album Cover"
                  style={{ maxWidth: '100px' }}
                />
              </td>
              <td>
                {editedAlbum && editedAlbum.id === album.id ? (
                  <>
                    <button onClick={handleUpdate}>
                      <FaCheck />
                    </button>
                    <button onClick={() => setEditedAlbum(null)}>
                      <FaTimes />
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleDelete(album.id)}>
                      <FaTrash />
                    </button>
                    <button onClick={() => handleEdit(album)}>
                      <FaEdit />
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SongsDetails;
