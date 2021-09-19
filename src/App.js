import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!!</h1>
      <div
        data-sound="rain"
        class="cursor-pointer relative white-grained h-full w-full overflow-hidden rounded-[20px]"
      >
        <audio id="rain" preload="none" loop="">
          <source src="/sounds/rain.mp3" alt="play" type="audio/mp3" />
        </audio>
        <h1 class="absolute top-1 left-3 text-md capitalize font-light mt-1 opacity-[.85]">
          rain
        </h1>
        <div class="w-full h-full flex items-center justify-center text-[#555]">
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-7xl"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="16" y1="13" x2="16" y2="21"></line>
            <line x1="8" y1="13" x2="8" y2="21"></line>
            <line x1="12" y1="15" x2="12" y2="23"></line>
            <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
