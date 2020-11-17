import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  var [currenttime, setTime] = useState(time);

  function showTime() {
    currenttime = new Date().toLocaleTimeString();
    setTime(currenttime);
  }
  setInterval(showTime, 1000);

  return (
    <div className="container">
      <h1>{currenttime}</h1>
      <button onClick={showTime}>Get Time</button>
    </div>
  );
}

export default App;
