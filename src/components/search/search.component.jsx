import React, { Component } from "react";
import "./search-style.css";
class SearchField extends Component {
  render() {
    return (
      <input
        className="search"
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.handleSearch}
      ></input>
    );
  }
}

export default SearchField;
