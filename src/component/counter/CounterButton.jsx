import { PropTypes } from "prop-types";
import "./Counter.css";

export default function CounterButton({
  by,
  incrementMainClicked,
  decrementMainClicked,
}) {
  return (
    <>
        <button
          className="counterButton"
          onClick={() => incrementMainClicked(by)}
        >
          {by}
        </button>
    </>
  );
}

CounterButton.propTypes = {
  by: PropTypes.number,
};

CounterButton.defaultProps = {
  by: 10,
};
