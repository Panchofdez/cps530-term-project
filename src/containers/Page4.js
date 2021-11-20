import React, { useState, useEffect } from "react";
import { Col, Row, Image, Modal, Button } from "react-bootstrap";
import AuthForm from "../components/AuthForm";
import JobForm from "../components/JobForm";
import JobList from "../components/JobList";
import headerImage from "../images/jobsearch.jpg";

const defaultJobs = [
  {
    id: 1,
    jobTitle: "Sample Job Title",
    company: "Company",
    jobSite: "Job Site",
    salary: "25k",
    location: "Location",
    jobLink: "",
    resume: "",
    coverLetter: "",
    status: "Applied",
  },
];

const Page4 = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [showJobModal, setShowJobModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState("Sign Up");
  const [listType, setListType] = useState(null);
  const [currentJob, setCurrentJob] = useState({});
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let isActive = true;
    const fetchJobs = () => {
      if (isActive && jobs.length == 0) {
        setJobs(defaultJobs);
      }
    };
    fetchJobs();
    return () => {
      isActive = false;
    };
  });
  console.log(jobs);
  const filter = (status, jobs) => {
    return jobs.filter((j) => j.status == status);
  };
  const createJob = (data) => {
    console.log("CREATE ", data);
    if (!signedIn) {
      const newJobData = {
        id: Date.now().toString(),
        ...data,
      };
      setJobs([...jobs, newJobData]);
    }
    setShowJobModal(false);
    return;
  };
  const updateJob = (id, data) => {
    console.log("UPDATE ", id, data);
    if (!signedIn) {
      const newJobs = jobs.map((j) => {
        if (j.id == id) {
          return data;
        }
        return j;
      });

      setJobs([...newJobs]);
    }
    setShowJobModal(false);
    return;
  };
  const deleteJob = (id) => {
    console.log(id);
    if (!signedIn) {
      const newJobs = jobs.filter((j) => {
        if (j.id == id) return false;
        return true;
      });
      setJobs([...newJobs]);
    }
    return;
  };
  const search = () => {
    if (searchTerm.length > 0) {
      console.log("SEARCH");
      const newJobs = jobs.filter((j) => {
        for (const [key, value] of Object.entries(j)) {
          if (typeof value == "string" && value.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1) {
            return true;
          }
        }
        return false;
      });

      return newJobs;
    }
    return jobs;
  };

  const authenticate = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Row className="py-2 d-flex flex-row justify-content-center" style={{ width: "100%" }}>
        <Col md={6} className="d-flex justify-content-center align-items-center px-5">
          <div>
            <h1>Simplify your job search</h1>
            <p>Keep track of all of your jobs during the each stage of the hiring process</p>
            <Button
              variant="success"
              className="rounded-pill mr-5"
              onClick={() => {
                setShowAuthModal(true);
                setAuthMode("Sign Up");
              }}
            >
              Sign Up
            </Button>
            <Button
              variant="outline-success"
              className="rounded-pill outline"
              onClick={() => {
                setShowAuthModal(true);
                setAuthMode("Log In");
              }}
            >
              Log In
            </Button>
          </div>
        </Col>
        <Col md={6}>
          <img src={headerImage} style={{ width: "100%" }}></img>
        </Col>
        <input
          style={{ position: "relative", zIndex: 5, width: "70%", top: 50, borderColor: "#6c757d" }}
          type="text"
          name="search"
          className="form-control mb-4 rounded-pill"
          aria-label="searchBar"
          placeholder="Filter"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Row>
      <Row className="m-0" style={{ backgroundColor: "rgb(251, 251, 253)", width: "100%" }}>
        <Col
          className="p-3"
          md={4}
          style={{ borderRight: "1px solid #ece9f2", borderTop: "1px solid #ece9f2", height: "100%" }}
        >
          <JobList
            title="Applied"
            data={filter("Applied", search(jobs))}
            setShowModal={setShowJobModal}
            setCurrentJob={setCurrentJob}
            deleteJob={deleteJob}
            setListType={setListType}
          />
        </Col>
        <Col
          className="p-3"
          md={4}
          style={{ borderRight: "1px solid #ece9f2", borderTop: "1px solid #ece9f2", height: "100%" }}
        >
          <JobList
            title="Wishlist"
            data={filter("Wishlist", search(jobs))}
            setShowModal={setShowJobModal}
            setCurrentJob={setCurrentJob}
            deleteJob={deleteJob}
            setListType={setListType}
          />
        </Col>
        <Col
          className="p-3"
          md={4}
          style={{ borderRight: "1px solid #ece9f2", borderTop: "1px solid #ece9f2", height: "100%" }}
        >
          <JobList
            title="Interview"
            data={filter("Interview", search(jobs))}
            setShowModal={setShowJobModal}
            setCurrentJob={setCurrentJob}
            deleteJob={deleteJob}
            setListType={setListType}
          />
        </Col>
        <Col
          className="p-3"
          md={4}
          style={{ borderRight: "1px solid #ece9f2", borderTop: "1px solid #ece9f2", height: "100%" }}
        >
          <JobList
            title="Offer"
            data={filter("Offer", search(jobs))}
            setShowModal={setShowJobModal}
            setCurrentJob={setCurrentJob}
            deleteJob={deleteJob}
            setListType={setListType}
          />
        </Col>
        <Col
          className="p-3"
          md={4}
          style={{ borderRight: "1px solid #ece9f2", borderTop: "1px solid #ece9f2", height: "100%" }}
        >
          <JobList
            title="Rejected"
            data={filter("Rejected", search(jobs))}
            setShowModal={setShowJobModal}
            setCurrentJob={setCurrentJob}
            deleteJob={deleteJob}
            setListType={setListType}
          />
        </Col>
        <Col
          className="p-3"
          md={4}
          style={{ borderRight: "1px solid #ece9f2", borderTop: "1px solid #ece9f2", height: "100%" }}
        >
          <JobList
            title="Accepted"
            data={filter("Accepted", search(jobs))}
            setShowModal={setShowJobModal}
            setCurrentJob={setCurrentJob}
            deleteJob={deleteJob}
            setListType={setListType}
          />
        </Col>
      </Row>
      <Modal size="md" show={showJobModal} onHide={() => setShowJobModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Add Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <JobForm currentJob={currentJob} updateJob={updateJob} createJob={createJob} listType={listType} />
        </Modal.Body>
      </Modal>
      <Modal size="md" show={showAuthModal} onHide={() => setShowAuthModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">{authMode}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AuthForm authenticate={authenticate} authMode={authMode} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Page4;
