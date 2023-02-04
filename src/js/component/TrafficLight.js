import React from "react";
import { useState } from "react";
import "./TrafficLight.css"; // Import css modules stylesheet as styles

const TrafficLight = () => {

  const [light, setLight] = useState(0);
  const [purple, setPurple] = useState(false)

  const setLightChangeHandler = (e) => {
    setLight(+e.target.id);
  };

  const setNextColor = () => {
    setLight((oldState) => {
      if (!purple) {
        return (light + 1) % 3;
      }

      return (light + 1) % 4;
    });
  };

  const setAddPurple = () => {
    setPurple(true);
  };

  const traffics = (
    <>
      <span
        onClick={setLightChangeHandler}
        id="0"
        className={`bg-danger ${light == 0 && "shine"}`}
      ></span>
      <span
        onClick={setLightChangeHandler}
        id="1"
        className={`bg-warning ${light == 1 && "shine"}`}
      ></span>
      <span
        onClick={setLightChangeHandler}
        id="2"
        className={`bg-success ${light == 2 && "shine"}`}
      ></span>
      {purple && <span
        onClick={setLightChangeHandler}
        id="3"
        className={`bg-info ${light == 3 && "shine"}`}
      ></span>} 
    </>
  );

  return (
    <div className="container mt-1">
      <div className="trafficLight">
        {traffics}
      </div>
      <button onClick={setNextColor} className="btn btn-primary mt-1">
        Next Color
      </button>
      <button onClick={setAddPurple} className="btn btn-info mt-1">
        Add Purple
      </button>
    </div>
  );
};

export default TrafficLight;
