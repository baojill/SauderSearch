import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import { type } from "ramda";

function CourseNavigator() {
  const initialState = {
    courseID: "",
    name: "",
    credits: 0,
    prereqs: {
      description: "",
      courses: [],
    },
    corereqs: {
      description: "",
      courses: [],
    },
    description: "",
    specialization: "",
  };

  const [course, setCourse] = useState(initialState);
  const [id, setID] = useState("");

  useEffect(() => {
    const url = "http://localhost:5000/courses/" + id;

    axios
      .get(url)
      .then((res) => {
        setCourse(res.data[0]);
        console.log(course);
      })
      .catch((error) => alert("course ID not valid"));
  }, []);

  const fetchCourse = (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/courses/" + id;
    console.log(`URL: ${url}`);

    axios
      .get(url)
      .then((res) => {
        setCourse(res.data[0]);
        console.log(res.data[0]);
        console.log(course);
        console.log(type(course));
      })
      .catch((error) => alert("course ID not valid"));
  };

  const changeID = (e) => {
    setID(e.target.value);
  };

  const addCourse = (e) => {
    console.log("Course Added");
  };

  return (
    <div>
      <h3>Search for a Sauder Course</h3>
      <form onSubmit={(event) => fetchCourse(event)}>
        <div class="row">
          <div className="form-group" class="col-md-6">
            <label>Specialization: </label>
          </div>
          <div class="column col-md-6">
            <div className="form-group">
              <label>Course ID (e.g. COMM 101): </label>
              <input
                type="text"
                defaultValue="COMM 100"
                required
                className="form-control"
                onChange={changeID}
              />
            </div>

            <Card bg={"dark"} text={"white"} className="mb-2">
              <Card.Header as="h5">
                {course.courseID} - {course.name}{" "}
              </Card.Header>
              <Card.Body>
                <Card.Text>{course.description}</Card.Text>
              </Card.Body>
            </Card>
            <br />

            <Card bg={"light"} text={"dark"} className="mb-2">
              <Card.Header as="h5">Prerequisite Courses:</Card.Header>
              <Card.Body>
                <Card.Text>{course.prereqs.description}</Card.Text>
              </Card.Body>
            </Card>
            <br />

            <Card bg={"light"} text={"dark"} className="mb-2">
              <Card.Header as="h5">Corerequisite Courses:</Card.Header>
              <Card.Body>
                <Card.Text>{course.corereqs.description}</Card.Text>
              </Card.Body>
            </Card>
            <br />

            <div className="form-group">
              <Button variant="info">Add to Worklist</Button>{" "}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CourseNavigator;

//   componentDidMount() {
//     this.setState({
//       options: [
//         "Accounting",
//         "Business Technology Management",
//         "Entrepreneurship",
//         "Finance",
//         "General Business Management",
//         "Global Supply Chain and Logistics Management",
//         "Marketing",
//         "Operations and Logistics",
//         "Organizational Behaviour and Human Resources",
//         "Real Estate",
//       ],
//     });
//   }
