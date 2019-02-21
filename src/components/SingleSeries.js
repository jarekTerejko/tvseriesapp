import React, { Component } from "react";
import Loader from "./Loader/Loader";
import SingleSeriesDetails from "./SingleSeriesDetails";

class SingleSeries extends Component {
  state = {
    show: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    setTimeout(() => {
      fetch(` http://api.tvmaze.com/shows/${id}?embed=episodes`)
        .then(res => res.json())
        .then(res => this.setState({ show: res }));
    }, 600);
  }
  render() {
    // console.log(this.props);
    const { show } = this.state;
    // console.log(show);
    return (
      <div className="container">
        {show === null && <Loader />}
        {show !== null && <SingleSeriesDetails show={show} />}
      </div>
    );
  }
}

export default SingleSeries;
