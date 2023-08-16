import PropTypes from "prop-types";

function ButtonDecreaseCount({ handleSubCount }) {
  return <button onClick={() => handleSubCount()}>-</button>;
}

ButtonDecreaseCount.propTypes = {
  handleSubCount: PropTypes.func.isRequired,
};

export default ButtonDecreaseCount;
