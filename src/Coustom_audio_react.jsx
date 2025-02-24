import React, { useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

export const Coustom_audio_react = ({ songAlbum, index }) => {

  const [isPlaying, setIsPlaying] = useState(false);
  let { songs, setSong } = useState(null);
  let { progressBar, setProgressBar } = useState(0);
  let [duration, setDuration] = useState(0);

  let toggelPlay = (e)=>{
    setIsPlaying(!isPlaying);
  }

  
  return (
    <section>
      <div className="w-full h-[100px] bg-blue-500 p-5">
        <div>
          <input type="range" className="w-full" />
        </div>
        <div className="bottom_block flex">
          <div>thumbnail</div>
          <div className="flex justify-between items-center border w-[60%] m-auto">
            <span>backword</span>
            <span onClick={toggelPlay}>{isPlaying ?  <FaPause />:<FaPlay /> }</span>
            <span>forward</span>
          </div>
          <div>volume</div>
        </div>
      </div>
    </section>
  );
};
