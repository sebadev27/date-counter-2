import PropTypes from "prop-types";
import "../styles/Step.css";

function Step({ stepsNumber, handleRange, handleSubmit }) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor={`Step : ${stepsNumber}`} className="label">
          Steps
        </label>
        <input
          className="range"
          type="range"
          id={`Step : ${stepsNumber}`}
          name={stepsNumber}
          min="1"
          max="10"
          step="1"
          value={stepsNumber}
          onChange={handleRange}
        />
        <span className="step">{stepsNumber}</span>
      </form>
    </>
  );
}

Step.propTypes = {
  stepsNumber: PropTypes.number.isRequired,
  handleRange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Step;
