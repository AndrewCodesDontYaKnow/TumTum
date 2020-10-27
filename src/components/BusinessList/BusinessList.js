import React, { Component } from "react";
import "./BusinessList.css";
import Business from "../Business/Business";

class BusinessList extends Component {
  render() {
    console.log(
      `this is the list going to businesslist ${this.props.businesses}`
    );
    return (
      <div className="BusinessList">
        {this.props.businesses.map((business) => (
          <Business key={business.id} business={business} />
        ))}
      </div>
    );
  }
}

export default BusinessList;
