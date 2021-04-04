import React, { Component } from "react";
const divStyle = {
  color: "#44342c",
  fontSize: "0.9em",
  direction: "rtl",
};
const color = {
  color: "#449624",
};
const color2 = {
  color: "#f69121",
};

export default class StudentsList extends Component {
  render() {
    return (
      <ul>
        {this.props.students.map((std) => (
          <li key={std.id} style={divStyle}>
            <span>الطالب: </span>
            <span style={color2}>{std.name}</span>
            <span> و حالته: </span>
            <span style={color}>{std.state.name}</span>
          </li>
        ))}
      </ul>
    );
  }
}
/*
<ul>
  {this.props.students.map((std) => (
    <li key={std.id} style={divStyle}>
      الطالب: {std.name} و حالته هي {std.state.name}
    </li>
  ))}
</ul>
*/
