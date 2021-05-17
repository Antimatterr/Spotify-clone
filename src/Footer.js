import React from 'react';
import "./Footer.css"
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import {Grid, Slider} from "@material-ui/core";
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <img className="footer_albumLogo" src="https://wallpapercave.com/wp/wp2342287.jpg" alt="" />
        <div className="footer_songinfo">
          <h4>Perfect</h4>
          <p>sid</p>
        </div>
      </div>
      <div className="footer_center">
        <ShuffleIcon className="footer_green"/>
        <SkipPreviousIcon className="footer_icon"/>
        <PlayCircleOutlineIcon className="footer_icon" fontSize="large" />
        <SkipNextIcon className="footer-icon"/>
        <RepeatIcon className="footer_green"/>
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon/>
          </Grid>
          <Grid item>
            <VolumeDownIcon/>
          </Grid>
          <Grid item xs>
            <Slider/>
          </Grid>
          
        </Grid>
        
      </div>
    </div>
  );
}

export default Footer;
