import React, { Component } from "react";

export default class DegreeOverview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [],
    };
  }

  componentDidMount() {
    this.setState({
      options: [
        "Accounting",
        "Business Technology Management",
        "Entrepreneurship",
        "Finance",
        "General Business Management",
        "Global Supply Chain and Logistics Management",
        "Marketing",
        "Operations and Logistics",
        "Organizational Behaviour and Human Resources",
        "Real Estate",
      ],
    });
  }

  render() {
    return (
      <div>
        <p>You are on the Degree Overview component!</p>
        <div className="form-group">
          <label>Specialization: </label>
          <select
            ref="userInput"
            required
            className="form-control"
            value={this.state.specialization}
            onChange={this.onChangeSpecialization}
          >
            {this.state.options.map(function (option) {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  }
}
