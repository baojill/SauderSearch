import React from "react";
import { connect } from "react-redux";
import { Button, Card } from "react-bootstrap";

function DegreeOverview(props) {
  const listCourses = props.worklist.map((item, index) => (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>
            {item.courseID} - {item.courseName}
          </Card.Title>
          <Button variant="danger" onClick={deleteCourse}>
            Remove from Worklist
          </Button>
        </Card.Body>
      </Card>
      <br />
    </div>
  ));
  return (
    <div>
      <h3>Your worklist:</h3>
      <div>{listCourses}</div>
    </div>
  );
}

const deleteCourse = () => {
  console.log("Course Removed!");
};

const mapStatetoProps = (state) => {
  console.log(state);
  return {
    worklist: state,
  };
};

export default connect(mapStatetoProps)(DegreeOverview);
