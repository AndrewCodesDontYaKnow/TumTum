import React, { Component } from "react";
import "./Business.css";
class Business extends Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <img src={this.props.business.imgSrc} alt="" />
        </div>
        <h2>{this.props.business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{this.props.business.address}</p>
            <p>{this.props.business.city}</p>
            <p>
              {this.props.business.state} {this.props.business.zipCode}
            </p>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.business.category}</h3>
            <h3 className="rating">Rating: {this.props.business.rating}</h3>
            <p>Reviews: {this.props.business.reviewCount}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
