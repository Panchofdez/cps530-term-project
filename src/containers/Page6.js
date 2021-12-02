import React from "react";
import { Container, Card, ListGroup, Row, Col } from "react-bootstrap";
import PanchoImg from "../images/Pancho.jpg";
import AbdulImg from "../images/Abdul-photo.jpg";
import AyaImg from "../images/Aya-photo.jpg";

const Page6 = () => {
  return (
    <div style={{ minHeight: "60vh" }}>
      <div
        className="mb-5 gradient-6 pb-3 mt-0 pt-0"
        style={{
          height: "225px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "flex-end",
        }}
      >
        <Container>
          <h1 style={{ fontWeight: "bold" }}>Credits & References</h1>
        </Container>
      </div>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <Card className="mb-5">
              <Card.Header style={{ fontWeight: "bold", fontSize: "20px" }}>Abdul Abedin</Card.Header>
              <Card.Img variant="top" src={AbdulImg} fluid />
              <Card.Body>
                <Card.Title>Responsibilities</Card.Title>
                <ListGroup className="mb-3" flush>
                  <ListGroup.Item>In charge of developing the backend API with Node.js and MongoDB</ListGroup.Item>
                  <ListGroup.Item>Worked on the installation page (page 2)</ListGroup.Item>
                  <ListGroup.Item>Worked on the conclusion page (page 5)</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="h-100">
            <Card className="mb-5">
              <Card.Header style={{ fontWeight: "bold", fontSize: "20px" }}>Aya Hammoud</Card.Header>
              <Card.Img variant="top" src={AyaImg} fluid />
              <Card.Body>
                <Card.Title>Responsibilities</Card.Title>
                <ListGroup className="mb-3">
                  <ListGroup.Item>Worked on the Frameworks page (page 1)</ListGroup.Item>
                  <ListGroup.Item>Handled css and styling of all pages</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="mb-5">
              <Card.Header style={{ fontWeight: "bold", fontSize: "20px" }}>Pancho Fernandez</Card.Header>
              <Card.Img variant="top" src={PanchoImg} fluid />

              <Card.Body>
                <Card.Title>Responsibilities</Card.Title>
                <ListGroup className="mb-3">
                  <ListGroup.Item>Developed and designed the demo page (page 4)</ListGroup.Item>
                  <ListGroup.Item>Worked on the tutorial page (page 3) </ListGroup.Item>
                  <ListGroup.Item>Worked on the credits page (page 6)</ListGroup.Item>
                  <ListGroup.Item>Assisted in the coding of the backend API </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Card className="mb-5">
              <Card.Header>References</Card.Header>
              <ListGroup>
                <ListGroup.Item>https://www.voidcanvas.com/describing-node-js/</ListGroup.Item>
                <ListGroup.Item>
                  https://medium.com/selleo/top-trends-in-node-js-to-watch-in-2021-d94ff38cc31e
                </ListGroup.Item>
                <ListGroup.Item>https://www.droptica.com/blog/9-companies-use-react/</ListGroup.Item>
                <ListGroup.Item>https://www.jevera.software/post/why-do-developers-prefer-to-use-react</ListGroup.Item>
                <ListGroup.Item>https://www.javatpoint.com/pros-and-cons-of-react</ListGroup.Item>
                <ListGroup.Item>
                  https://www.clariontech.com/blog/7-advantages-of-reactjs-for-building-interactive-user-interfaces
                </ListGroup.Item>
                <ListGroup.Item>https://www.better.dev/react-popularity</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Page6;
