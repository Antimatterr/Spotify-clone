import React from 'react';
import "./SongRow.css";

const SongRow = ({ track="test"}) => {
  return (
    <div className="songrow">
      <img className="songrow_album" src={track.album.images[0].url} alt="" />
      <div className="songrow_info">
        <h1>{track.name}</h1>
        <p>{track.artists.map((artist) => artist.name).join(", ")}
        {track.album.name}
        </p>
      </div>
      
    </div>
  );
}

export default SongRow;
