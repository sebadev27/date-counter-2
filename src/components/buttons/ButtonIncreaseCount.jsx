import PropTypes from "prop-types";

function ButtonIncreaseCount({ handleAddCount }) {
  return <button onClick={() => handleAddCount()}>+</button>;
}

ButtonIncreaseCount.propTypes = {
  handleAddCount: PropTypes.func.isRequired,
};

export default ButtonIncreaseCount;
