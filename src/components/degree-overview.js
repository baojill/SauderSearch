import React from "react";
import { connect } from "react-redux";
import { Button, Card } from "react-bootstrap";
import { deleteCourse } from "../courseActions";

function DegreeOverview(props) {
  const listCourses = props.worklist.map((item, index) => (
    <div key={item.id}>
      <Card>
        <Card.Body>
          <Card.Title>
            {item.courseID} - {item.courseName}
          </Card.Title>
          <Button variant="danger" onClick={() => props.deleteCourse(item.id)}>
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

const mapDispatchToProps = (dispatch) => {
  return { deleteCourse: (id) => dispatch(deleteCourse(id)) };
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    worklist: state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DegreeOverview);
