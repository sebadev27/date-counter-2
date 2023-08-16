import { useState } from "react";
import Step from "./components/Step";
import Result from "./components/Result";
import "./styles/App.css";
import Counter from "./components/counter";

function App() {
  const [stepsNumber, setStepnumber] = useState(1);

  const handleAddStep = function () {
    setStepnumber(stepsNumber + 1);
  };

  const handleSubStep = function () {
    stepsNumber < 2 ? "" : setStepnumber(stepsNumber - 1);
  };

  const [countNumber, setCountNumber] = useState(1);

  const handleAddCount = function () {
    setCountNumber(countNumber + stepsNumber);
  };

  const handleSubCount = function () {
    setCountNumber(countNumber - stepsNumber);
  };

  return (
    <div className="wrapper">
      <Step
        handleAddStep={handleAddStep}
        handleSubStep={handleSubStep}
        stepsNumber={stepsNumber}
      />
      <Counter
        handleAddCount={handleAddCount}
        handleSubCount={handleSubCount}
        countNumber={countNumber}
        stepsNumber={stepsNumber}
      />
      <Result countNumber={countNumber} />
    </div>
  );
}

export default App;
