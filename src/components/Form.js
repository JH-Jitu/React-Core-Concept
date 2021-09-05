import React, { Component } from "react";

export default class Form extends Component {
  subs = ["ds", "algo", "db", "oop"];
  state = {
    name: "",
    desc: "",
    department: "",
    checked: false,
    subArray: [],
  };

  handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.name === "subjects") {
      const index = this.state.subArray.indexOf(e.target.value);
      if (e.target.checked && index === -1) {
        this.state.subArray.push(e.target.value);
      } else {
        this.state.subArray.splice(index, 1);
      }
      this.setState({
        checked: e.target.checked,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  handleSubmit = (e) => {
    const { name, desc, checked, department, subArray } = this.state;
    e.preventDefault();
    console.log({ name, desc, checked, department, subArray });
  };

  render() {
    const { name, desc, checked, department, subArray } = this.state;
    console.log(subArray);

    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <span>Name: </span> <br />
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <p> {name} </p>
          <br /> <br />
          <span>Description: </span> <br />
          <textarea
            name="desc"
            id=""
            cols="30"
            rows="10"
            value={desc}
            onChange={this.handleChange}
          />
          <p>{desc}</p>
          <br /> <br />
          <span>Department:</span> <br />
          <select
            name="department"
            value={department}
            onChange={this.handleChange}
          >
            <option value="">Select</option>
            <option value="cse">CSE</option>
            <option value="eee">EEE</option>
          </select>
          <p>{department}</p>
          <br /> <br />
          <span>Subject</span>
          <br />
          {this.subs.map((sub, index) => (
            <label key={sub} htmlFor={`sub-${index}`}>
              {" "}
              {sub}
              <input
                style={{ marginLeft: "30px" }}
                id={`sub-${index}`}
                type="checkbox"
                name="subjects"
                // isChecked={subjects}
                value={sub}
                onChange={this.handleChange}
              />{" "}
              <br />
            </label>
          ))}
          <p>{checked}</p>
          <br />
          <br />
          <button type="submit" value="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
