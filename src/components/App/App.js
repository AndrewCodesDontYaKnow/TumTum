import React from "react";
import "./App.css";
import BusinessList from "./../BusinessList/BusinessList";
import SearchBar from "./../SearchBar/SearchBar";
import Yelp from "./../../util/Yelp";


class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { businesses: [] }
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    console.log(`searchYelp fired off`)
    Yelp.search(term, location, sortBy)
    .then(businesses => {
      console.log(businesses)
      this.setState({
        businesses: businesses
      })
    })
  }

  render(){
    console.log(this.state.businesses)
  return (
    <div className="App">
      <h1>tumtum.</h1>
      <SearchBar searchYelp={this.searchYelp} />
      <BusinessList businesses={this.state.businesses} />
    </div>
  )
  };
}

export default App;
