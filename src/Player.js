import React from 'react';
import "./Player.css";
import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './Footer'

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player_body">
        
        {/* Sidebar */}
        <Sidebar/>

        {/* Body */}
        <Body spotify={spotify}/>
      </div>

      <Footer/>
      {/* footer */}

    </div>
  );
}

export default Player;
