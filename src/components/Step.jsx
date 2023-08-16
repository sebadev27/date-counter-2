import PropTypes from "prop-types";
import "../styles/Step.css";
import ButtonIncreaseStep from "./buttons/ButtonIncreaseStep";
import ButtonDecreaseStep from "./buttons/ButtonDecreaseStep";

function Step({ handleAddStep, handleSubStep, stepsNumber }) {
  return (
    <div className="wrapper-step">
      <ButtonDecreaseStep handleSubStep={handleSubStep} />
      <span className="step">Step: {stepsNumber}</span>
      <ButtonIncreaseStep handleAddStep={handleAddStep} />
    </div>
  );
}

Step.propTypes = {
  handleAddStep: PropTypes.func.isRequired,
  handleSubStep: PropTypes.func.isRequired,
  stepsNumber: PropTypes.number.isRequired,
};

export default Step;
