import PropTypes from "prop-types";

function ButtonIncreaseStep({ handleAddStep }) {
  return <button onClick={() => handleAddStep()}>+</button>;
}

ButtonIncreaseStep.propTypes = {
  handleAddStep: PropTypes.func.isRequired,
};

export default ButtonIncreaseStep;
