import React, { Component } from "react";
import axios from "axios";
import StudentsList from "./StudentsList";
const divStyle = {
  direction: "rtl",
  color: "#f59121",
  textShadow: "1px 1px 2px white",
};
const white = {
  color: "black",
  whiteSpace: "pre-line",
};
export default class Input extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
      email: "",
      msg: "",
      link: "",
      school: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  getStudents = (e) => {
    e.preventDefault();
    if (this.state.email) {
      axios({
        method: "post",
        url: "http://localhost:3001/students",
        data: {
          email: this.state.email,
        },
      }).then((res) => {
        this.setState({ students: res.data });
        if (res.data.length === 0) {
          this.setState({
            msg: `لم يتم العثور على طالب لهذا البريد..
              للإستفسار: التواصل على  `,
            link: "https://www.facebook.com/mindschallenge/",
            school: "صفحة المسابقة على فيس بوك",
          });
        } else {
          this.setState({ msg: "", link: "", school: "" });
        }
        console.log(res.data);
      });
    } else {
      this.setState({
        msg: "الرجاء إدخال عنوان بريد إلكتروني!",
      });
      this.setState({ students: [] });
    }
  };
  handleChange(e) {
    this.setState({ email: e.target.value });
  }

  render() {
    return (
      <div>
        <form lang="en" dir="ltr" onSubmit={this.getStudents}>
          <h3 style={divStyle}>أدخل عنوان البريد الإلكتروني:</h3>
          <input
            id="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <button>بحث</button>
        </form>
        {/* <button onClick={this.GetStudents}>Search</button> */}
        {/* <h1>hi from input! :)</h1>
        <h2>email is: {this.state.email}</h2> */}
        {/* {console.log(this.state.students)} */}
        <h5 style={(divStyle, white)}>
          {this.state.msg}
          <a href={this.state.link} target="_blank">
            {this.state.school}
          </a>
        </h5>
        <StudentsList students={this.state.students} />
      </div>
    );
  }
}
