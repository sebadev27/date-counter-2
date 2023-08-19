import "../../styles/ResetButton.css";
import PropTypes from "prop-types";

function ResetButton({ handleResetClick }) {
  return (
    <button className="reset" onClick={handleResetClick}>
      Reset
    </button>
  );
}

ResetButton.propTypes = {
  handleResetClick: PropTypes.func.isRequired,
};

export default ResetButton;
