import React, { Component } from "react";
import "./style.css";

interface ICheckboxProps {
  name?: string;
}
class Checkbox extends Component<ICheckboxProps> {
  render() {
    return (
      <div className="checkbox-container">
        <label className="checkbox-row">
          <span>{this.props.name}</span>
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </div>
    );
  }
}

export default Checkbox;
