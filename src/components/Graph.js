import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Chartist from "chartist";
import "./Graph.css";

function Graph({ data }) {
  const lineData = data.map(({ rating }) => rating);
  const labels = data.map((d, i) => i + 1);
  useEffect(() => {
    new Chartist.Line(
      "#chart",
      {
        labels,
        series: [lineData],
      },
      {
        showPoint: true,
        lineSmooth: true,
        low: 0,
        high: 5,
        showArea: true,
      }
    );
  }, [labels, lineData]);
  return <div className="chart" id="chart"></div>;
}

Graph.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      rating: PropTypes.number,
      comment: PropTypes.string,
    }).isRequired
  ),
};

export default Graph;
