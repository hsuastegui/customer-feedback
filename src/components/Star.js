import React from "react";
import PropTypes from "prop-types";
import "./Star.css";

function Star({ active, handleClick, value }) {
  const handleRating = () => {
    handleClick(value);
  };
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      focusable="false"
      className={active ? "active" : ""}
      onClick={handleRating}
    >
      <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
    </svg>
  );
}

Star.defaultProps = {
  active: false,
  handleClick: () => {},
  value: 0,
};

Star.propTypes = {
  active: PropTypes.bool,
  handleClick: PropTypes.func,
  value: PropTypes.number,
};

export default Star;
