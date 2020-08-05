import React, { Component } from "react";

export default class CourseNavigator extends Component {
  constructor(props) {
    super(props);

    this.onChangeID = this.onChangeID.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeSpecialization = this.onChangeSpecialization.bind(this);
    this.onChangeCredits = this.onChangeCredits.bind(this);
    this.onChangePrereqs = this.onChangePrereqs.bind(this);

    this.state = {
      couseID: "",
      courseName: "",
      description: "",
      specialization: "",
      credits: 0,
      prereqs: [],
      options: [],
    };
  }

  onChangeID(e) {
    this.setState({
      courseID: e.target.value,
    });
  }

  onChangeName(e) {
    this.setState({
      courseName: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeSpecialization(e) {
    this.setState({
      specialization: e.target.value,
    });
  }

  onChangeCredits(e) {
    this.setState({
      credits: e.target.value,
    });
  }

  onChangePrereqs(e) {
    this.setState({
      prereqs: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const course = {
      courseID: this.state.courseID,
      courseName: this.state.courseName,
      description: this.state.description,
      specialization: this.state.specialization,
      credits: this.state.credits,
      prereqs: this.state.prereqs,
    };

    console.log(course);

    window.location = "/";
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
        <h3>Search for a Sauder Course</h3>
        <form onSubmit={this.onSubmit}>
          <div class="row">
            <div className="form-group" class="col-md-6">
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
            <div class="column col-md-6">
              <div className="form-group">
                <label>Course ID (e.g. COMM 101): </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                />
              </div>
              {/* <div className="form-group">
              <label>Duration (in minutes): </label>
              <input
                type="text"
                className="form-control"
                value={this.state.duration}
                onChange={this.onChangeDuration}
              />
            </div> */}
              <div className="form-group">
                <input
                  type="submit"
                  value="Add to Worklist"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
