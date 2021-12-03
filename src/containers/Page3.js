import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import FooterImg from "../images/footer-component.png";
import HeroSection from "../images/hero-section.png";
import MainSection from "../images/main-section.png";
import AuthForm1 from "../images/AuthForm-1.png";
import AuthForm2 from "../images/AuthForm-2.png";
import JobList1 from "../images/JobList-1.png";
import JobList2 from "../images/JobList-2.png";
import JobForm1 from "../images/JobForm1.png";
import JobForm2 from "../images/JobForm2.png";

const Page3 = () => {
  return (
    <>
      <div
        // className="mb-5 gradient-3 pb-3 mt-0"
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
          <h1 style={{ fontWeight: "bold" }}>How to create a webpage using React and Node.js</h1>
        </Container>
      </div>
      <Container>
        <Row>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <div className="mb-4">
              <h3 style={{ textDecoration: "underline" }}>Introduction</h3>
              <p>
                This tutorial will show you how to create a good-looking webpage using React and will be focused on the
                design of the webpage rather than the functionality. For our demo page, we will be creating an
                application that will help track our job applications. It will sort jobs according to 6 phases of the
                application process: Applied, Wishlist, Interview, Offer, Rejected, and Accepted. I hope this tutorial
                can give you an example of how to harness the power of React to divide the user interface into smaller
                parts called components. Doing this makes designing and implementing the frontend much easier.
              </p>
            </div>
            <div className="mb-4">
              <h3 style={{ textDecoration: "underline" }}>What you will need </h3>
              <ol>
                <li>Knowledge of Javascript, HTML, CSS, and the framework React.</li>
                <li>A code editor of your choice. VS Code is a popular choice for most developers.</li>
                <li>
                  React-bootstrap. This is a popular CSS framework/library that will make the styling and design easier
                  by providing us with pre-made React components that we can add to our UI.
                </li>
                <li>Formik. This React library will handle form values.</li>
              </ol>
            </div>

            <div className="mb-4">
              <h3 style={{ textDecoration: "underline" }}>Step 1: Set up your page with React</h3>
              <p>
                Create a new React project with the command 'npx create-react-app name'. After doing this we will have a
                new React app.
              </p>
              <p>
                Since our webpage is a simple application we will only need one page so this means we can represent our
                page with one main component. All our changes will take place within the App.js file where we will
                modify what the App component returns.
              </p>
            </div>
            <div className="mb-4">
              <h3 style={{ textDecoration: "underline" }}>Step 2: Create a design theme</h3>
              <p>
                For this webpage, we will decide on a clean and simple look using different shades of grey/white. We
                will also choose green as an accent color for buttons.
              </p>
            </div>
            <div className="mb-4">
              <h3 style={{ textDecoration: "underline" }}>Step 3: Create the Layout</h3>
              <p>
                We will divide our webpage into the following sections and place these sections within the return () of
                the App component. We will do this using React-Bootstrap's Grid system with Row, Col components.
              </p>
              <ul>
                <li>Hero section</li>
                <li>Main Content/Body</li>
                <li>Footer</li>
              </ul>
              <div>
                <h5>Hero Section</h5>
                <p>
                  A Row component will represent the entire hero section spanning the entire width of the page and will
                  be divided into 2 columns using the Col component. To make it responsive we add the 'xs={12}' and 'md=
                  {6}' props to the Col component so that each column spans the entire width on mobile and takes half
                  the page for larger viewports.
                </p>
                <p>
                  Inside one of the Col components, we add a big title using an h1 tag and a simple p tag for the
                  caption. We then add 2 buttons for signup and login using React-Bootstrap's Button component and give
                  them the green accent color.
                </p>
                <p>
                  For the hero image, we create a folder called images and place the file in it. We use the hero image
                  using the img tag inside the other Col component. We provide the image a width of 100% so it spans the
                  entire width of the column.
                </p>
                <Image src={HeroSection} className="my-3" fluid />
                <p>Note how we use Bootstrap's CSS classes and inline styling.</p>
              </div>
              <div>
                <h5>Main Body/Content</h5>
                <p>
                  For our main content of the page, we need a way to represent 6 lists for our job applications. In
                  order to do this, we will divide the main body into a grid containing 2 rows each with 3 evenly-spaced
                  columns. Inside each column, we will put our JobList component which we will explain in the next
                  section. We will give our main body section a background color of light grey to provide a slight
                  contrast between the white background of the hero section.
                </p>

                <Image src={MainSection} className="my-3" fluid />
              </div>
              <div>
                <h5>Footer</h5>
                <p>
                  We will represent the footer using React-Bootstrap's Row component so that it spans the entire width
                  of the page. We will use CSS flexbox properties to space the content of the footer correctly. We will
                  also give the footer a dark grey background color (#6c757d).
                </p>
                <Image src={FooterImg} className="my-3" fluid />
              </div>
            </div>

            <div className="mb-4">
              <h3 style={{ textDecoration: "underline" }}>Step 4: Identify and create reusable components</h3>
              Now that we have divided the structure and layout of the webpage, it is time to divide the functionality
              of the webpage into smaller parts called components that we can reuse if we need similar functionality in
              other parts of the page. The components that we will create for the web page are:
              <ul>
                <li>Authentication Form</li>
                <li>Job List</li>
                <li>Job Form</li>
              </ul>
              <div>
                <h5>Authentication Form</h5>
                <p>
                  As with most applications, we will need an authentication system to sign in users so we can save their
                  job applications to their profiles. In order to do this, we need a signup and login form. We can
                  create one AuthForm component to handle both functionalities.
                </p>
                <p>
                  For the Authentication form, we will use the React library Formik to handle the form values and
                  React-Bootstrap's Form component to represent the form. Note how we use a prop called authMode to
                  determine which type of form and inputs to show based on if it's a signup or login form.
                </p>
                <Image src={AuthForm1} className="mb-1" fluid />
                <Image src={AuthForm2} className="mb-3" fluid />
              </div>
              <div>
                <h5>Job List</h5>
                <p>
                  We need a JobList component to represent a list of job applications that have a status of one of the 6
                  phases of the job process mentioned above.
                </p>
                <p>
                  For each JobList component we will have a title containing one of the 6 job phases using an h3 tag and
                  below it a button to add a job application to the desired list. Pressing the button will open the
                  JobForm component or modal. And below that, we will create a list of job applications. Each job will
                  be represented by a Card component from React-Bootstrap.
                </p>
                <Image src={JobList1} className="mb-1" fluid />
                <Image src={JobList2} className="mb-3" fluid />
              </div>
              <div>
                <h5>Job Form</h5>
                <p>
                  For each JobList component, we will have a job form for users to create a job application and add it
                  to its corresponding list. Since each job form will have similar functionality we can create one
                  JobForm component for all 6 lists.
                </p>
                <p>
                  Similar to the Authentication form we will use the React library Formik to handle the form values and
                  React-Bootstrap's Form component to represent the form. We will be using a prop called listType to
                  determine which list/phase the form will save the job to0.
                </p>
                <Image src={JobForm1} className="mb-1" fluid />
                <Image src={JobForm2} className="mb-3" fluid />
              </div>
            </div>
            <div className="mb-4">
              <h3 style={{ textDecoration: "underline" }}>Conclusion</h3>
              <p>
                Currently, we have the front end of our application working. In order to add functionality to our
                webpage, we need to create the backend in order to actually create, edit and delete job applications as
                well as perform user authentication. A common approach is to create a separate backend API using a
                framework like Node.js and a database technology such as MongoDB and have the frontend make API calls to
                the backend.
              </p>
            </div>
            <div className="mb-4">
              <h3 style={{ textDecoration: "underline" }}>Next Steps</h3>
              <ol>
                <li>
                  Create a Node Js project running the following command:{" "}
                  <span style={{ color: "green" }}>'npm init -y'</span>
                </li>
                <li>Npm install express and set up a server</li>
                <li>Connect to your database</li>
                <li>Set up the needed routes (Ex. GET,POST,PUT,DELETE)</li>
                <li>Deploy your backend API using a free service like Heroku</li>
                <li>Connect the frontend to the backend using a library like Axios to make API calls to the backend</li>
                <li>Deploy the frontend using a free service like Heroku or Netlify</li>
              </ol>

              <p>
                Check the final product <a href="">here</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Page3;
