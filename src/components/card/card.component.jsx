import React, { Component } from "react";
import "./card.style.css";
class Card extends Component {
  render() {
    return (
      <div className="card-container">
        <img
          alt=""
          src={`https://robohash.org/${this.props.monster.id}?set=set2&size=180x180`}
        />
        <h2 key={this.props.monster.id}> {this.props.monster.name}</h2>
        <h3>{this.props.monster.email}</h3>
      </div>
    );
  }
}

export default Card;
