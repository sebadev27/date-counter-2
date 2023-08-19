import { useState } from "react";
import Step from "./components/Step";
import Result from "./components/Result";
import "./styles/App.css";
import Counter from "./components/counter";
import ResetButton from "./components/buttons/ResetButton";

function App() {
  const [stepsNumber, setStepnumber] = useState(1);

  const handleRange = (e) => {
    setStepnumber(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [countNumber, setCountNumber] = useState(1);

  const handleAddCount = function () {
    setCountNumber(countNumber + stepsNumber);
  };

  const handleSubCount = function () {
    setCountNumber(countNumber - stepsNumber);
  };

  const handleCounterChange = (e) => {
    const inputValue = e.target.value;

    const sanitizedValue = inputValue.replace(/[^0-9]/g, "");

    setCountNumber(sanitizedValue);
  };

  const handleResetClick = (e) => {
    e.preventDefault();
    setCountNumber(0);
    setStepnumber(1);
  };

  return (
    <div className="wrapper">
      <Step
        stepsNumber={stepsNumber}
        handleRange={handleRange}
        handleSubmit={handleSubmit}
      />
      <Counter
        handleAddCount={handleAddCount}
        handleSubCount={handleSubCount}
        handleCounterChange={handleCounterChange}
        countNumber={countNumber}
        stepsNumber={stepsNumber}
      />
      <Result countNumber={countNumber} />
      <ResetButton
        handleResetClick={handleResetClick}
        stepsNumber={stepsNumber}
        countNumber={countNumber}
      />
    </div>
  );
}

export default App;
