import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page1 from "./containers/Page1";
import Page2 from "./containers/Page2";
import Page3 from "./containers/Page3";
import Page4 from "./containers/Page4";
import Page5 from "./containers/Page5";
import Page6 from "./containers/Page6";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="light" variant="light" className="w-100">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/page1">About React</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/page2">How To Install</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/page3">Design & Styling</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/page4">Demo Page</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/page5">Conclusion</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/page6">Credits</Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/page6" element={<Page6 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
