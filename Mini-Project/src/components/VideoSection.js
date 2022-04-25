import React from 'react';
import '../App.css';
import { Button } from './Button';
import './VideoSection.css';

function VideoSection() {
  return (
    <div className='hero-container'>
      <video src='/Video/bgvideo.mp4' autoPlay loop muted />
      <h1>JOIN HANDS TO SAVE THE NATURE</h1>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log("HEY")}
        >
          SEARCH <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default VideoSection;