import React, { Component } from "react";
import SearchBar from "./SearchBar";

export default class App extends Component {
  handleSearchBarSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchBarSubmit={this.handleSearchBarSubmit} />
      </div>
    );
  }
}
