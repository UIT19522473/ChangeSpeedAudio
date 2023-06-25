import React, { useState, useEffect, useRef } from "react";

import "./App.css";

import ImgDish from "./images/imgdish.jpg";

const App = () => {
  const audioRef = useRef(null);
  const fileInputRef = useRef(null);

  const [pickRate, setPickRate] = useState(1);

  useEffect(() => {
    if (audioRef.current) {
      if (pickRate == null) {
        audioRef.current.playbackRate = 1;
        setPickRate(1);
      } else if (pickRate > 15) {
        audioRef.current.playbackRate = 15;
        setPickRate(15);
      } else if (pickRate < 0.1) {
        audioRef.current.playbackRate = 0.1;
        setPickRate(0.1);
      } else {
        audioRef.current.playbackRate = pickRate;
      }
    }
  }, [pickRate]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const fileUrl = URL.createObjectURL(file);
    audioRef.current.src = fileUrl;
  };

  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    const audioElement = audioRef.current;

    const playHandler = () => {
      setIsPlaying(true);
    };

    const pauseHandler = () => {
      setIsPlaying(false);
    };

    audioElement.addEventListener("play", playHandler);
    audioElement.addEventListener("pause", pauseHandler);

    return () => {
      audioElement.removeEventListener("play", playHandler);
      audioElement.removeEventListener("pause", pauseHandler);
    };
  }, []);

  console.log(isPlaying);

  return (
    <main className="main d-flex flex-column justify-content-between">
      <div className="container-xxl wrap-choosefile d-flex align-items-center justify-content-center">
        <input
          accept="audio/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          type="file"
          id="audio"
          required
          className="input-audio"
        />
      </div>
      <div className="container-xxl wrap-middle">
        <div className={isPlaying ? "wrap-img rotate-element" : "wrap-img"}>
          <img className="image-fluid" src={ImgDish} alt="logo" />
        </div>
      </div>
      <div className="container-xxl wrap-control">
        <div className="d-flex justify-content-center align-content-center">
          <audio class="custom-audio" controls autoPlay ref={audioRef} />
          <input
            type="number"
            placeholder="Speed"
            aria-label="Speed"
            aria-describedby="button-addon2"
            onChange={(e) => setPickRate(e.target.value)}
            step="0.1"
            className="changespeed"
          />
        </div>
      </div>

      <h2 className="signature">Tuân Nguyễn</h2>
    </main>
  );
};

export default App;
