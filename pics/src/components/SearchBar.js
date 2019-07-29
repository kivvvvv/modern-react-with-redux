import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.onSearchBarSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
