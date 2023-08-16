import PropTypes from "prop-types";
import ButtonIncreaseCount from "./buttons/ButtonIncreaseCount";
import ButtonDecreaseCount from "./buttons/ButtonDecreaseCount";
import "../styles/Counter.css";

function Counter({ handleAddCount, handleSubCount, countNumber }) {
  return (
    <div className="wrapper-counter">
      <ButtonDecreaseCount handleSubCount={handleSubCount} />
      <span className="count">Count: {countNumber}</span>
      <ButtonIncreaseCount handleAddCount={handleAddCount} />
    </div>
  );
}

Counter.propTypes = {
  handleAddCount: PropTypes.func.isRequired,
  handleSubCount: PropTypes.func.isRequired,
  countNumber: PropTypes.number.isRequired,
};

export default Counter;
