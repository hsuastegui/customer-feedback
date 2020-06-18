import React from "react";
import PropTypes from "prop-types";
import Star from "./Star";

function Stars({ setRating, rating }) {
  const result = [];
  for (let i = 0; i < 5; i++) {
    result.push(
      <Star key={i} handleClick={setRating} active={i < rating} value={i + 1} />
    );
  }
  return result;
}

Stars.defaultProps = {
  rating: 0,
  setRating: () => {},
};

Stars.propTypes = {
  rating: PropTypes.number,
  setRating: PropTypes.func,
};

export default Stars;
