import React from "react";
import { Container, Card, ListGroup, Row, Col } from "react-bootstrap";
const Page5 = () => {
  return (
    <>
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
          <h1 style={{ fontWeight: "bold" }}>Conclusion</h1>
        </Container>
      </div>
      <Container>
        {/* <h1>Conclusion</h1> */}
        {/* <br></br> */}
        <p>
          Our group decided to use the Node.js and react frameworks. They performed exactly as we intended and we were
          able to create a <br></br> professional-looking job tracking application. The frameworks were simple to
          install and were easy to create pages with. The demo <br></br> page was more difficult but that was because
          not because of the 2 main frameworks we choose but because we also wanted to make <br></br> sure we added a
          login page and connected with a database so the user can save their jobs and retrieve them at a later time.
          The <br></br> learning curve was a little steep compared to regular HTML/CSS/JavaScript/PHP because we didn't
          cover these frameworks in the <br></br> course. However, because our group had previous experience working
          with these technologies it wasn't too difficult to get a hang of <br></br> it. We didn't regret using our
          choice of frameworks because even though it took a little longer than we expected the final application{" "}
          <br></br> turned out great and it was a great learning experience.
        </p>
        <br></br>
      </Container>
    </>
  );
};

export default Page5;
