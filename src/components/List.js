import React from "react";
import PropTypes from "prop-types";
import Rating from "./Rating";
import "./List.css";

function List({ data }) {
  return (
    <div className="list">
      {data.map((item) => (
        <div key={item.rating + item.name} className="listItem">
          <span>{item.comment}</span>
          <Rating rating={item.rating} />
        </div>
      ))}
    </div>
  );
}

List.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      rating: PropTypes.number,
      comment: PropTypes.string,
    }).isRequired
  ),
};

export default List;
