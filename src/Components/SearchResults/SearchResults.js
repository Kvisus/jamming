import React from "react";
import Tracklist  from "../TrackList/TrackList"; 
import './SeacrhResults.css';

class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <Tracklist />
      </div>
    );
  }
}

export default SearchResults;