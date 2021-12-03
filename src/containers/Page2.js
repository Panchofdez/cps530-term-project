import React from "react";
import { Container, Card, ListGroup, Row, Col, Image } from "react-bootstrap";
import downloadImg from "../images/download1.png";
import initImg from "../images/init.png";
import setupImg from "../images/setup.png";
import verifyImg from "../images/verify.png";
import createImg from "../images/createapp.png";
import create1Img from "../images/createapp2.png";
import openappImg from "../images/openapp.png";
import appImg from "../images/app.png";

const Page2 = () => {
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
        classname="resize"
      >
        <Container>
          <h1 style={{ fontWeight: "bold" }}>Installation</h1>
        </Container>
      </div>

      <Container>
        <div>
          <h2>How To Install Node.js</h2>
          <br></br>
          Step 1: Download the Node.js installer package from <a href="https://nodejs.org/en/download/">here</a>. Make
          sure to click the installer for your operating system <br></br>
          <br></br>
          <Image src={downloadImg} width="70%" fluid />
          <br></br>
          <br></br>
          Step 2: Once the package has been downloaded, double click it and follow the instructions shown on the screen{" "}
          <br></br>
          <br></br>
          <Image width="70%" src={setupImg} fluid />
          <br></br>
          <br></br>
          Step 3: Restart your computer <br></br> <br></br>
          Step 4: Verify the installation by opening a new terminal and entering the following line: node -v <br></br>
          If the installation was completed you should see the version number displayed on your terminal <br></br>
          <br></br>
          <Image width="70%" src={verifyImg} fluid />
          <br></br> <br></br>
          Step 5: Create a new project folder and navigagte to it (mkdir and cd on windows). Enter npm init and follow
          the instructions on your screen. <br></br>
          <br></br>
          <Image width="70%" src={initImg} fluid />
          <br></br> <br></br> <br></br>
        </div>
        <h2>How To Install React</h2>
        <br></br>
        <div>
          Note: Node.js needs to be installed before proceeding <br></br> <br></br>
          Step 1: Open new terminal <br></br> <br></br>
          Step 2: Enter the following command: npx create-react-app my-app <br></br>
          Please wait until you see the message: Success! Created my-app on your terminal. Takes about 5 minutes to
          initialize <br></br>
          <br></br>
          <Image width="70%" src={createImg} fluid />
          <br></br> <br></br> <br></br>
          <Image width="70%" src={create1Img} fluid />
          <br></br> <br></br>
          Step 3: Navigate to the my-app directory (Cd command on windows)<br></br>
          <br></br>
          Step 4: Start your application by using the command npm start. A new browser window with your application will
          automatically open <br></br>
          <br></br>
          <Image width="70%" className="mb-6" src={openappImg} fluid />
          <br></br> <br></br> <br></br>
          <Image width="70%" src={appImg} fluid />
          <br></br> <br></br> <br></br>
        </div>
      </Container>
    </>
  );
};

export default Page2;
