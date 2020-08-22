import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Dropdown, DropdownButton } from "react-bootstrap";

function SpecializationToggle() {
  const options = [
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
  ];

  const [specialization, setSpecialization] = useState("");
  const [id, setID] = useState("");

  useEffect(() => {
    const url = process.env.BACKEND_URL + "/specializations/" + id;

    axios
      .get(url)
      .then((res) => {
        setSpecialization(res.data[0]);
      })
      .catch((error) => alert("specialization not valid"));
  }, []);

  const fetchSpecialization = (id) => {
    // e.preventDefault();
    const url = process.env.BACKEND_URL + "/specializations/" + id;

    axios
      .get(url)
      .then((res) => {
        setSpecialization(res.data[0]);
      })
      .catch((error) => alert("specialization not valid"));
  };

  const renderReq = (e) => {
    let ret = [];
    if (e == "Electives") {
      ret.push(specialization.courses[e].toString());
    } else {
      Object.keys(specialization.courses[e]).map((el) => {
        ret.push(renderSpecs(e, el));
        // ret.push("\n");
      });
    }
    return ret;
  };

  const renderSpecs = (e, el) => {
    let ret = el + ": ";
    ret += specialization.courses[e][el].toString();
    return ret;
  };

  return (
    <div>
      <label>Choose a Specialization:</label>
      <DropdownButton
        id="dropdown-basic-button"
        variant="secondary"
        title={id ? id : "Accounting"}
        onSelect={(e) => {
          setID(e);
          fetchSpecialization(e);
        }}
      >
        {options.map((e) => (
          <Dropdown.Item key={e} eventKey={e}>
            {e}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <br />
      <div>
        {specialization
          ? Object.keys(specialization.courses).map((e) => {
              return (
                <Card key={e} bg={"light"} text={"dark"} className="mb-2">
                  <Card.Header as="h5">{e}</Card.Header>
                  {/* Object.keys() */}
                  <Card.Body>
                    <Card.Text>
                      {renderReq(e).map((e) => {
                        return <p>{e}</p>;
                      })}
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            })
          : " "}
      </div>
    </div>
  );
}

export default SpecializationToggle;
