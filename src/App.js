// import React, { useState } from "react";
// import ReactHowler from "react-howler";
// import { Seekbar } from "react-seekbar";
// import Slider from "@mui/material/Slider";

// const App = () => {
//   const [playing, setPlaying] = useState(false);
//   const [playbackRate, setPlaybackRate] = useState(1.0);

//   const handlePlayPause = () => {
//     setPlaying(!playing);
//   };

//   const handlePlaybackRateChange = (e) => {
//     const rate = parseFloat(e.target.value);
//     setPlaybackRate(rate);
//   };

//   return (
//     <div>
//       <ReactHowler
//         src="http://goldfirestudios.com/proj/howlerjs/sound.ogg"
//         playing={playing}
//         rate={playbackRate}
//       />
//       <div>
//         <button onClick={handlePlayPause}>{playing ? "Pause" : "Play"}</button>
//         <input
//           type="range"
//           min="0.5"
//           max="2"
//           step="0.1"
//           value={playbackRate}
//           onChange={handlePlaybackRateChange}
//         />
//       </div>
//     </div>
//   );
// };

// export default App;

// import React, { useState, useEffect, useRef } from "react";
// import { Howl } from "howler";
// import Mp3 from "../src/medias/test1.mp3";

// const AudioPlayer = () => {
//   const [playing, setPlaying] = useState(false);
//   const [playbackRate, setPlaybackRate] = useState(1.0);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const soundRef = useRef(null);
//   const animationFrameRef = useRef(null);
//   const previousTimeRef = useRef(0);

//   useEffect(() => {
//     const sound = new Howl({
//       // src: ["http://goldfirestudios.com/proj/howlerjs/sound.ogg"],
//       src: [Mp3],
//       autoplay: playing,
//       rate: playbackRate,
//       onplay: () => {
//         console.log("Audio is playing");
//         animationFrameRef.current = requestAnimationFrame(updateCurrentTime);
//       },
//       onpause: () => {
//         console.log("Audio is paused");
//         cancelAnimationFrame(animationFrameRef.current);
//       },
//       onload: () => {
//         setDuration(sound.duration());
//       },
//     });

//     soundRef.current = sound;

//     return () => {
//       sound.unload();
//       cancelAnimationFrame(animationFrameRef.current);
//     };
//   }, []);

//   const handlePlayPause = () => {
//     const sound = soundRef.current;
//     if (playing) {
//       sound.pause();
//     } else {
//       sound.play();
//     }
//     setPlaying(!playing);
//   };

//   const handlePlaybackRateChange = (e) => {
//     const rate = parseFloat(e.target.value);
//     setPlaybackRate(rate);
//     const sound = soundRef.current;
//     sound.rate(rate);
//   };

//   const updateCurrentTime = () => {
//     const sound = soundRef.current;
//     setCurrentTime(sound.seek());
//     if (sound.playing()) {
//       animationFrameRef.current = requestAnimationFrame(updateCurrentTime);
//     }
//   };

//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={handlePlayPause}>{playing ? "Pause" : "Play"}</button>
//         <input
//           type="range"
//           min="0.5"
//           max="2"
//           step="0.1"
//           value={playbackRate}
//           onChange={handlePlaybackRateChange}
//         />
//         <span>{playbackRate}</span>
//       </div>
//       <div>
//         <span>{formatTime(currentTime)}</span> /{" "}
//         <span>{formatTime(duration)}</span>
//       </div>
//     </div>
//   );
// };

// export default AudioPlayer;

// import React, { useState } from "react";
// import {
//   // SoundPlayerContainer,
//   PlayButton,
//   Timer,
// } from "react-soundplayer/components";
// import { withSoundCloudAudio } from "react-soundplayer/addons";

// const AudioPlayer = withSoundCloudAudio((props) => {
//   const [playbackRate, setPlaybackRate] = useState(1.0);

//   const handlePlaybackRateChange = (e) => {
//     const rate = parseFloat(e.target.value);
//     setPlaybackRate(rate);
//     props.soundCloudAudio.setPlaybackRate(rate);
//   };

//   return (
//     <div>
//       {/* <SoundPlayerContainer {...props} /> */}
//       <div>
//         <PlayButton {...props} playbackRate={playbackRate} />
//         <input
//           type="range"
//           min="0.5"
//           max="2"
//           step="0.1"
//           value={playbackRate}
//           onChange={handlePlaybackRateChange}
//         />
//         <Timer {...props} />
//       </div>
//     </div>
//   );
// });

// const App = () => {
//   const trackUrl = "http://goldfirestudios.com/proj/howlerjs/sound.ogg";

//   return (
//     <AudioPlayer
//       streamUrl={trackUrl}
//       clientId="YOUR_CLIENT_ID" // Thay YOUR_CLIENT_ID bằng client ID của bạn
//     />
//   );
// };

// export default App;

// import React, { useState } from "react";
// import AudioPlayer from "react-h5-audio-player";
// import Mp3 from "../src/medias/test1.mp3";

// const App = () => {
//   const [playbackRate, setPlaybackRate] = useState(1.0);

//   const handlePlaybackRateChange = (e) => {
//     const rate = parseFloat(e.target.value);
//     setPlaybackRate(rate);
//   };

//   return (
//     <div>
//       <AudioPlayer src={Mp3} autoPlay playbackRate={10} />
//       <audio src={Mp3} playbackRate={2}></audio>
//       <input
//         type="range"
//         min="0.5"
//         max="2"
//         step="0.1"
//         value={playbackRate}
//         onChange={handlePlaybackRateChange}
//       />
//     </div>
//   );
// };

// export default App;

// import React, { useState, useEffect, useRef } from "react";
// import Mp3 from "../src/medias/test1.mp3";

// const useAudio = (url, playbackRate) => {
//   const audioRef = useRef(new Audio(url));
//   const [playing, setPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [muted, setMuted] = useState(false);

//   const togglePlay = () => {
//     setPlaying(!playing);
//   };

//   const handleTimeUpdate = () => {
//     setCurrentTime(audioRef.current.currentTime);
//   };

//   const handleLoadedData = () => {
//     setDuration(audioRef.current.duration);
//   };

//   const handleMuteToggle = () => {
//     setMuted(!muted);
//   };

//   useEffect(() => {
//     const audio = audioRef.current;
//     audio.playbackRate = playbackRate;

//     if (playing) {
//       audio.play();
//     } else {
//       audio.pause();
//     }
//   }, [playing, playbackRate]);

//   useEffect(() => {
//     const audio = audioRef.current;
//     audio.currentTime = currentTime;
//   }, [currentTime]);

//   useEffect(() => {
//     audioRef.current.muted = muted;
//   }, [muted]);

//   useEffect(() => {
//     const audio = audioRef.current;
//     audio.addEventListener("timeupdate", handleTimeUpdate);
//     audio.addEventListener("loadeddata", handleLoadedData);

//     return () => {
//       audio.removeEventListener("timeupdate", handleTimeUpdate);
//       audio.removeEventListener("loadeddata", handleLoadedData);
//     };
//   }, []);

//   return {
//     playing,
//     currentTime,
//     setCurrentTime,
//     duration,
//     muted,
//     togglePlay,
//     handleMuteToggle,
//   };
// };

// const Player = ({ url }) => {
//   const [playbackRate, setPlaybackRate] = useState(1.0);
//   const {
//     playing,
//     currentTime,
//     setCurrentTime,
//     duration,
//     muted,
//     togglePlay,
//     handleMuteToggle,
//   } = useAudio(Mp3, playbackRate);

//   const handlePlaybackRateChange = (e) => {
//     const rate = parseFloat(e.target.value);
//     setPlaybackRate(rate);
//   };

//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60)
//       .toString()
//       .padStart(2, "0");
//     const seconds = Math.floor(time % 60)
//       .toString()
//       .padStart(2, "0");
//     return `${minutes}:${seconds}`;
//   };

//   const handleSeek = (e) => {
//     const seekTime = parseFloat(e.target.value);
//     setCurrentTime(seekTime);
//   };

//   return (
//     <div>
//       <button onClick={togglePlay}>{playing ? "Pause" : "Play"}</button>

//       <div>
//         <input
//           type="range"
//           min={0}
//           max={duration}
//           step={0.1}
//           value={currentTime}
//           onChange={handleSeek}
//         />
//         <div>
//           {formatTime(currentTime)} / {formatTime(duration)}
//         </div>
//       </div>

//       <button onClick={handleMuteToggle}>{muted ? "Unmute" : "Mute"}</button>

//       <input
//         type="range"
//         min="0.5"
//         max="2"
//         step="0.1"
//         value={playbackRate}
//         onChange={handlePlaybackRateChange}
//       />
//     </div>
//   );
// };

// export default Player;

// import React from 'react'
import React, { useState, useEffect, useRef } from "react";
import Mp3 from "../src/medias/test1.mp3";
import "./App.css";

const App = () => {
  const audioRef = useRef(null);
  const fileInputRef = useRef(null);

  const [pickRate, setPickRate] = useState(1);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = pickRate;
    }
  }, [pickRate]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const fileUrl = URL.createObjectURL(file);
    audioRef.current.src = fileUrl;
  };
  return (
    <div className="mt-5 container d-flex justify-content-around align-items-center">
      <div className="input-file">
        <input
          type="file"
          accept="audio/*"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </div>
      <audio className="w-50" controls autoPlay ref={audioRef} />
      <div className="input-rate">
        <input
          type="number"
          placeholder="Speed"
          aria-label="Speed"
          aria-describedby="button-addon2"
          onChange={(e) => setPickRate(e.target.value)}
          step="0.1"
        />
      </div>
    </div>
  );
};

export default App;
