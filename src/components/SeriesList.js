import React from "react";
// import "../App.css";
import { Link } from "react-router-dom";

const SeriesListItem = ({ series }) => {
  return (
    // <Link to={`/series/${series.show.id}`}>
    //   <li>{series.show.name}</li>
    // </Link>
    <li>
      <Link to={`/series/${series.show.id}`}>
        {series.show.name}
      </Link>
    </li>
  );
};
const SeriesList = props => {
  return (
    <div className="container">
      <ul className="series-list">
        {props.series.map(series => {
          return <SeriesListItem key={series.show.id} series={series} />;
        })}
      </ul>
    </div>
  );
};

export default SeriesList;
