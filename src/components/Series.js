import React, { Component } from "react";
import SeriesList from "./SeriesList";
import Intro from "./Intro";
import Loader from "./Loader/Loader";

class Series extends Component {
  state = {
    series: [],
    seriesTitle: "",
    isFetching: false
  };

  // componentDidMount() {
    // fetch("http://api.tvmaze.com/search/shows?q=vikings")
    //   .then(res => res.json())
    //   .then(res => {
    //     this.setState({
    //       series: res
    //     });
    //   });
  // }

  handleSeriesInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(e);
    // console.log(e.target.value);
    // console.log(this.state);
  };

  handleSeriesSubmit = e => {
    e.preventDefault();
    this.setState({ isFetching: true });
    setTimeout(() => {
      fetch(`http://api.tvmaze.com/search/shows?q=${this.state.seriesTitle}`)
        .then(res => res.json())
        .then(res => {
          // console.log(res);
          this.setState({
            series: res,
            isFetching: false,
            seriesTitle: ""
          });
          // console.log(this.state);
        });
    }, 600);
  };

  render() {
    const { series, isFetching } = this.state;

    return (
      <div>
        <Intro message="Here you will find all of your favourite TV series" />
        <div className="container">
          <form onSubmit={this.handleSeriesSubmit}>
            <div>
              <label htmlFor="seriesTitle">TV series title</label>
              <input
                type="text"
                className="input-series"
                onChange={this.handleSeriesInputChange}
                name="seriesTitle"
                value={this.state.seriesTitle}
                placeholder="Enter TV series title here"
              />
            </div>
            <button className="btn-series">Search</button>
          </form>
        </div>
          {isFetching && <Loader />}
          {!isFetching && <SeriesList series={series} />}
      </div>
    );
  }
}

export default Series;
