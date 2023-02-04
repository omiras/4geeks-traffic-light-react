import React from 'react';
import { useState } from 'react';
import  './TrafficLight.css'; // Import css modules stylesheet as styles

const TrafficLight = () => {

  const [light, setLight] = useState("red");

  const setLightChangeHandler= (e) => {
    setLight(e.target.id);
  };
  
  return <div className="trafficLight">
      <span onClick={setLightChangeHandler}id="red" className={`bg-danger ${light=='red' && 'shine'}`}></span>
      <span onClick={setLightChangeHandler} id="yellow" className={`bg-warning ${light=='yellow' && 'shine'}`}></span>
      <span onClick={setLightChangeHandler} id="green" className={`bg-success ${light=='green' && 'shine'}`}></span>
    </div>;
};

export default TrafficLight;
