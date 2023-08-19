import PropTypes from "prop-types";
import ButtonIncreaseCount from "./buttons/ButtonIncreaseCount";
import ButtonDecreaseCount from "./buttons/ButtonDecreaseCount";
import "../styles/Counter.css";

function Counter({
  handleAddCount,
  handleSubCount,
  countNumber,
  handleCounterChange,
}) {
  return (
    <>
      <div className="wrapper-counter">
        <ButtonDecreaseCount handleSubCount={handleSubCount} />
        <input
          type="tel"
          name="count"
          id={`count:${countNumber}`}
          value={countNumber}
          onChange={handleCounterChange}
        />
        <ButtonIncreaseCount handleAddCount={handleAddCount} />
      </div>
    </>
  );
}

Counter.propTypes = {
  handleAddCount: PropTypes.func.isRequired,
  handleSubCount: PropTypes.func.isRequired,
  handleCounterChange: PropTypes.func.isRequired,
  countNumber: PropTypes.number.isRequired,
};

export default Counter;
