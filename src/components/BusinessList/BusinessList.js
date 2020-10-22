import React, { Component } from "react";
import "./BusinessList.css";
import Business from "../Business/Business";

class BusinessList extends Component {
  render() {
    return (
      <div className="BusinessList">
          {this.props.businesses.map(biz => (
              <Business business={biz} />
    ))}
      </div>
    )
  }
}

export default BusinessList;
