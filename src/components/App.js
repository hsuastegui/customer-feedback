import React, { useState } from "react";
import Form from "./Form";
import Graph from "./Graph";
import List from "./List";
import "./App.css";

const initialState = [
  { name: "John", email: "john@email.com", rating: 3, comment: "Lorem ipsum" },
  { name: "Jane", email: "jane@email.com", rating: 2, comment: "Lorem ipsum" },
];

function App() {
  const [comments, setComments] = useState(initialState);

  const handleSubmit = (data) => {
    setComments([...comments, data]);
  };

  return (
    <div className="app">
      <Form handleSubmit={handleSubmit} />
      <Graph data={comments} />
      <List data={comments} />
    </div>
  );
}

export default App;
