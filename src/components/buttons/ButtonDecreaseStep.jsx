import PropTypes from "prop-types";

function ButtonDecreaseStep({ handleSubStep }) {
  return <button onClick={() => handleSubStep()}>-</button>;
}

ButtonDecreaseStep.propTypes = {
  handleSubStep: PropTypes.func.isRequired,
};

export default ButtonDecreaseStep;
