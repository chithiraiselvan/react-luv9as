import React from 'react';
import './style.scss';

export default function App() {
  return (
    <div>
      <div class="row">
        <div class="">
          <audio loop controls>
            <source
              alt="play"
              src="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
              type="audio/mp3"
            />
          </audio>
        </div>
        <div class="hex"></div>
        <div class="hex"></div>
        <div class="hex"></div>
        <div class="hex"></div>
      </div>
      <div class="row">
        <div class="hex"></div>
        <div class="hex"></div>
        <div class="hex"></div>
        <div class="hex"></div>
        <div class="hex"></div>
      </div>
    </div>
  );
}
