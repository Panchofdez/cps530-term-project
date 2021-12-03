import React from "react";
import { Container, Row, Col, ListGroup, Card } from "react-bootstrap";
import ReactImg from "../images/React.jpeg";
import NodejsImg from "../images/Nodejs.png";

const Page1 = () => {
  return (
    <>
      <div
        // className="mb-5 gradient-1 pb-3 mt-0 pt-0"
        // style={{
        //   height: "225px",
        //   width: "100%",
        //   display: "flex",
        //   flexDirection: "row",
        //   justifyContent: "start",
        //   alignItems: "flex-end",
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
          <h1 style={{ fontWeight: "bold" }}>React & Node.js</h1>
        </Container>
      </div>
      <Container>
        <div>
          <Card className="mb-5">
            <Card.Img variant="top" src={ReactImg} />
            <Card.Body>
              <Card.Title>Popularity</Card.Title>
              <Card.Text>
                React is one of (if not the most) popular JavaScript front end framework. According to StackOverflow's
                2020 surveys, React ranks #2 in most popular.
              </Card.Text>
              <Card.Title>Usage</Card.Title>
              <Card.Text>
                For developers that create interactive user interfaces (UI). Websites like Facebook, Instagram, Yahoo
                Mail and New York Times use React.
              </Card.Text>
              <Card.Title>Strengths</Card.Title>
              <ListGroup className="mb-3">
                <ListGroup.Item>Makes coding with Javascript easier</ListGroup.Item>
                <ListGroup.Item>Extremely competent</ListGroup.Item>
                <ListGroup.Item>Excellent cross-platform support</ListGroup.Item>
                <ListGroup.Item>Handles Dependencies</ListGroup.Item>
                <ListGroup.Item>Makes designing with templates easy</ListGroup.Item>
                <ListGroup.Item>Allows for UI focused designs</ListGroup.Item>
                <ListGroup.Item>Easy to adapt and learn</ListGroup.Item>
              </ListGroup>
              <Card.Title>Weaknesses</Card.Title>
              <ListGroup className="mb-3">
                <ListGroup.Item>High pace of development and updates to the framework </ListGroup.Item>
                <ListGroup.Item>Poor documentation due to constantly updating technology</ListGroup.Item>
                <ListGroup.Item>Only covers the UI layers of the app and nothing else</ListGroup.Item>
                <ListGroup.Item>JSX can be a barrier for new React developers</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <Card className="mb-5">
            <Card.Img variant="top" src={NodejsImg} />
            <Card.Body>
              <Card.Title>Popularity</Card.Title>
              <Card.Text>
                Due to its open-source nature, Node.js has become incredibly popular for both web and mobile application
                development. Recent statistics show that: As of early 2020, more than 50% of the developers use Node.
              </Card.Text>
              <Card.Title>Usage</Card.Title>
              <Card.Text>
                It is for developers that want to use JavaScript code for server-side web application logic. LinkedIn,
                Netflix, Medium and eBay are all examples of websites that use Node.js
              </Card.Text>
              <Card.Title>Strengths</Card.Title>
              <ListGroup className="mb-3">
                <ListGroup.Item>Asynchronous event driven IO helps concurrent request handling</ListGroup.Item>
                <ListGroup.Item>Uses Javascript, which is easy to learn</ListGroup.Item>
                <ListGroup.Item>Ability to share the same piece of code with both server and client-side</ListGroup.Item>
                <ListGroup.Item>Npm (Node packaged modules) has already become huge, and still growing.</ListGroup.Item>
                <ListGroup.Item>Active and vibrant community, with lots of code shared via GitHub, etc.</ListGroup.Item>
                <ListGroup.Item>You can stream big files.</ListGroup.Item>
              </ListGroup>
              <Card.Title>Weaknesses</Card.Title>
              <ListGroup className="mb-3">
                <ListGroup.Item>
                  Node.js doesn't provide scalability. One CPU is not going to be enough; the platform provides no
                  ability to scale out to take advantage of the multiple cores commonly present in today's server-class
                  hardware.
                </ListGroup.Item>
                <ListGroup.Item>Dealing with a relational database is a pain if you are using Node.</ListGroup.Item>
                <ListGroup.Item>Code might end up with tons of nested callbacks.</ListGroup.Item>
                <ListGroup.Item>
                  Developers that start Node without in-depth knowledge of JavaScript may face conceptual problems.
                </ListGroup.Item>
                <ListGroup.Item>
                  Node.js is not suited for CPU-intensive tasks. It is suited for I/O stuff only (like web servers).
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default Page1;
