import "../../styles/ResetButton.css";
import PropTypes from "prop-types";

function ResetButton({ handleResetClick, stepsNumber, countNumber }) {
  return (
    <>
      {countNumber !== 0 || stepsNumber !== 1 ? (
        <button className="reset" onClick={handleResetClick}>
          Reset
        </button>
      ) : null}
    </>
  );
}

ResetButton.propTypes = {
  handleResetClick: PropTypes.func.isRequired,
  stepsNumber: PropTypes.number.isRequired,
  countNumber: PropTypes.number.isRequired,
};

export default ResetButton;
