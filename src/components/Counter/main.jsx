import React from "react";
import "./styles.scss";

const { useState } = React;

const App = () => {
  const [counterValue, setCounterValue] = useState(0);

  const increaseCounter = () => setCounterValue(counterValue + 1);

  return (
    <div className="container">
      <div className="counter-text">Counter</div>
      <div className="counter-value">{counterValue}</div>
      <div className="button-wrapper">
        <button onClick={increaseCounter}>UP</button>
      </div>
    </div>
  );
};

export default App;
