import React, { Component } from "react";
const divStyle = {
  color: "#79c45c",
  fontSize: "0.9em",
  direction: "rtl",
};
const orange = {
  color: "#f59121",
};
const blue = {
  color: "#0088cc",
};

export default class StudentsList extends Component {
  render() {
    return (
      <ul>
        {this.props.students.map((std) => (
          <li key={std.id} style={divStyle}>
            <span>الطالب: </span>
            <span style={orange}>{std.name}</span>
            <span> و حالته: </span>
            <span style={blue}>{std.state.name}</span>
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
