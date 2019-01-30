import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function Car({ car }) {
  
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h3 className="font-italic">{car.make}</h3>
          {car.model && <h5 className="font-italic">{car.model}</h5>}
        </Col>
        <Col size="md-4">
          <div className="btn-container">
            <p className="btn btn-light" target="_blank" rel="noopener noreferrer" href={car.trim}>
              View
            </p>
            {/* <Button /> */}
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <p className="font-italic small">Body type: {car.body_type}</p>
        </Col>
      </Row>
      <Row>
      <Col size="md-6">
      <p className="font-italic small">Engine: {car.engine}</p>
    </Col>
        <Col size="12 sm-8 md-10">
          <p>{car.synopsis}</p>
        </Col>
        <Col size="12 sm-8 md-10">
        <p>{car.date}</p>
      </Col>
      </Row>
    </ListItem>
  );
}

export default Car;
