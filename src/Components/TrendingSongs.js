import React, { useState, useEffect } from "react";

const TrendingSongs = ({ songs, totalPlayCounts, favorites, playAudio }) => {
  // Implement merge sort to sort songs based on play counts
  const mergeSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
  };

  const merge = (left, right) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      const leftSong = left[leftIndex];
      const rightSong = right[rightIndex];

      // Compare songs based on play counts
      if (totalPlayCounts[leftSong.id] > totalPlayCounts[rightSong.id]) {
        result.push(leftSong);
        leftIndex++;
      } else {
        result.push(rightSong);
        rightIndex++;
      }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  };

  // Sort songs based on play counts using merge sort
  const sortedSongs = mergeSort(songs);

  // Render the sorted songs
  return (
    <div>
      <h2>Trending Songs</h2>
      <ul>
        {sortedSongs.map((song) => (
          <li key={song.id}>
            {song.title} - {song.artistName} - Play Count:{" "}
            {totalPlayCounts[song.id]}
            <button onClick={() => playAudio(song)}>
              Play Audio
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingSongs;
