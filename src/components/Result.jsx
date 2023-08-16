import PropTypes from "prop-types";

function Result({ countNumber }) {
  const currentDate = new Date();

  const finalDate = new Date(
    currentDate.setDate(currentDate.getDate() + countNumber)
  );

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  function stringMoment() {
    if (countNumber > 1) {
      return " days from ";
    }
    if (countNumber == 1) {
      return " day from ";
    }
    if (countNumber < 0) {
      return " days ago was ";
    }
    if (countNumber == 0) {
      return " Today is ";
    }
  }

  const DateString = finalDate.toLocaleString("en-US", options);

  return (
    <div>
      {countNumber === 0 ? "" : Math.abs(countNumber)}
      {stringMoment()}
      {DateString}
    </div>
  );
}

Result.propTypes = {
  countNumber: PropTypes.number.isRequired,
};

export default Result;
