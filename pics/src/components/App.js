import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

export default class App extends Component {
  async handleSearchBarSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID c23cb4e244e44bacfbbdc03d6f2a714bb8a25b3d2fbf591b83affcc31bc0dbed"
      }
    });

    console.log(response.data.results);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchBarSubmit={this.handleSearchBarSubmit} />
      </div>
    );
  }
}
