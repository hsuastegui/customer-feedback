import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import Rating from "./Rating";
import "./Form.css";

function Form({ handleSubmit }) {
  const [rating, setRating] = useState(3);
  const formRef = useRef(null);
  const clearForm = (elements) => {
    setRating(3);
    elements.forEach((e) => {
      e.value = "";
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const elements = formRef.current.querySelectorAll("input, textarea");
    const data = Object.values(elements).reduce(
      (acc, curr) => ({ ...acc, [curr.name]: curr.value }),
      {}
    );
    data.rating = rating;
    handleSubmit(data);
    clearForm(Object.values(elements));
  };
  return (
    <form className="form" ref={formRef} onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" required />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" required />
      <label>Rating</label>
      <Rating rating={rating} setRating={setRating} />
      <label htmlFor="comment">Comment</label>
      <textarea name="comment" required></textarea>
      <button type="submit">Send</button>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
