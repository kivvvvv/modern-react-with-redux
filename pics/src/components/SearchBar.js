import React, { Component } from "react";

export default class SearchBar extends Component {
  handleInputChange(e) {
    console.log(e.target.value);
  }
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" onChange={this.handleInputChange} />
          </div>
        </form>
      </div>
    );
  }
}
