import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <div>
        <audio controls autoplay>
          <source
            src="mixkit-little-birds-singing-in-the-trees-17.wav"
            type="audio/wav"
          />
        </audio>
        <h1 class="absolute top-1 left-3 text-md capitalize font-light mt-1 opacity-[.85]">
          rain
        </h1>
        hi
        <audio controls autoplay>
          <source
            src="mixkit-little-birds-singing-in-the-trees-17.wav"
            type="audio/wav"
          />
          <source
            src="mixkit-little-birds-singing-in-the-trees-17.wav"
            type="audio/wav"
          />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
}
