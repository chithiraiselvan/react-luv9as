import React from 'react';
import './style.scss';
import { jsonData } from './config';


const tile = () => {
  return (
      <>
      <div className="stock-container">
        hi
      {jsonData.map((data, key) => {
      return (
            <div key={key}>
             {data.name}
           </div>);
      })}
      </div> 
    </>
   );
};

export default function App() {
  return (
    <div>
      hi
      <tile></tile>
      {jsonData.map(s => (<li>hi</li>))}
    </div>
  );
}
