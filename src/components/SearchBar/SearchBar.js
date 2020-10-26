import React, { Component } from "react";
import "./SearchBar.css";



class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      location: "",
      sortBy: "best_match",
    };

    console.log(this.state)

    this.handleTermChange = this.handleTermChange.bind(this)
    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)

    this.sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "review_count",
    };
  }

  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption})
  }

  handleTermChange(event) {
    this.setState({ term: event.target.value })
  }

  handleLocationChange(event) {
    this.setState({ location: event.target.value })
  }

  handleSearch(event) {
    console.log(this.props)
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy)
    event.preventDefault()
  }

  getSortByClass(sortByOption) {
    return this.state.sortBy === sortByOption ? 'active' : ''
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOption) => {

      let sortByOptionValue = this.sortByOptions[sortByOption];

      return <li onClick={this.handleSortByChange.bind(this, sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>;
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input onChange={this.handleTermChange} placeholder="Food" />
          <input onChange={this.handleLocationChange} placeholder="Location" />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Find some grub...</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
