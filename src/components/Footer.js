import React from "react";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="m-0 w-100" style={{ backgroundColor: "#6c757d" }}>
      <Row
        className="p-4 pt-5"
        style={{ width: "100%", display: "flex", justifyContent: "space-around", color: "white" }}
      >
        <Col xs={6} md={4}>
          <ul>
            <li>CPS530 Term Project</li>
            <li>Ryerson University</li>
            <li>Web Systems Development</li>
          </ul>
        </Col>
        <Col xs={6} md={4}>
          <ul>
            <li>Pancho Fernandez</li>
            <li>Aya Hammoud</li>
            <li>Abdul Abedin</li>
          </ul>
        </Col>
        <Col xs={6} md={4}>
          <p>Contact: </p>
          <p>pancho.fernandez@ryerson.ca</p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
