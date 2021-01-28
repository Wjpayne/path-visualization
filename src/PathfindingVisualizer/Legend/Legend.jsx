import React, { Component } from "react";
import "./legend.css";

export default class Legend extends Component {

  render() {
    const { legendClass, context } = this.props;
    return (
      <li className="legend-li">
        <div className={legendClass + " legend"}></div>
        {context}
      </li>
    );
  }
}
