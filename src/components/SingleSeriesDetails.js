import React from "react";

const SingleSeriesDetails = ({ show }) => {
  // console.log(props.show)
  // const {show} = props
  // console.log(show)

  return (
    <div className="display-center">
      <h1 className="show-title">{show.name}</h1>
      <img src={show.image.medium} alt="Series Poster" />
      <p>
        Genres: <span className="bold">{show.genres.join(", ")}</span>
      </p>
      <p>
        Rating: <span className="bold">{show.rating.average}</span>
      </p>

      {show.network !== null && (
        <p>
          Network: <span className="bold">{show.network.name}</span>
        </p>
      )}
      <p>
        Language: <span className="bold">{show.language}</span>
      </p>
      <p>
        Premiered: <span className="bold">{show.premiered}</span>
      </p>
      <p>
        Number of episodes:{" "}
        <span className="bold">{show._embedded.episodes.length}</span>
      </p>
      {/* <p>Summary: <span className="bold">{show.summary}</span></p> */}
      <span className="bold">
        <a href={show.officialSite}>Official Site</a>
      </span>
    </div>
  );
};

export default SingleSeriesDetails;
