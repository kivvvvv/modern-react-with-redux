import React, { Component } from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";

export default class App extends Component {
  state = { images: [] };

  handleSearchBarSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchBarSubmit={this.handleSearchBarSubmit} />
      </div>
    );
  }
}
