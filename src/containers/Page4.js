import React, { useState, useEffect } from "react";
import { Col, Row, Image, Modal } from "react-bootstrap";
import JobForm from "../components/JobForm";
import JobList from "../components/JobList";
import headerImage from "../images/jobsearch.jpg";

const defaultJobs = [
  {
    id: 1,
    jobTitle: "Software Engineer Intern",
    company: "Google",
    jobSite: "LinkedIn",
    salary: "25k",
    location: "Toronto, ON, Canada",
    dateApplied: "11/18/2021",
    resume: "",
    coverLetter: "",
    status: "Applied",
  },
  {
    id: 2,
    jobTitle: "Software Engineer Intern",
    company: "Google",
    jobSite: "LinkedIn",
    salary: "25k",
    location: "Toronto, ON, Canada",
    dateApplied: "11/18/2021",
    resume: "",
    coverLetter: "",
    status: "Applied",
  },
  {
    id: 3,
    jobTitle: "Software Engineer Intern",
    company: "Google",
    jobSite: "LinkedIn",
    salary: "25k",
    location: "Toronto, ON, Canada",
    dateApplied: "11/18/2021",
    resume: "",
    coverLetter: "",
    status: "Applied",
  },
  {
    id: 4,
    jobTitle: "Software Engineer Intern",
    company: "Google",
    jobSite: "LinkedIn",
    salary: "25k",
    location: "Toronto, ON, Canada",
    dateApplied: "11/18/2021",
    resume: "",
    coverLetter: "",
    status: "Wishlist",
  },
  {
    id: 5,
    jobTitle: "Software Engineer Intern",
    company: "Google",
    jobSite: "LinkedIn",
    salary: "25k",
    location: "Toronto, ON, Canada",
    dateApplied: "11/18/2021",
    resume: "",
    coverLetter: "",
    status: "Interview",
  },
  {
    id: 6,
    jobTitle: "Software Engineer Intern",
    company: "Google",
    jobSite: "LinkedIn",
    salary: "25k",
    location: "Toronto, ON, Canada",
    dateApplied: "11/18/2021",
    resume: "",
    coverLetter: "",
    status: "Wishlist",
  },
];

const Page4 = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentJob, setCurrentJob] = useState({});
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    let isActive = true;
    const fetchJobs = () => {
      if (isActive) {
        setJobs(defaultJobs);
      }
    };
    fetchJobs();
    return () => {
      isActive = false;
    };
  });

  const filter = (status, jobs) => {
    return jobs.filter((j) => j.status == status);
  };
  const createJob = (data) => {
    console.log("CREATE ", data);
    return;
  };
  const updateJob = (id, data) => {
    console.log("UPDATE ", data);
    return;
  };
  const deleteJob = (id) => {
    console.log(id);
    return;
  };

  return (
    <div>
      <Row className="py-3" style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <Col md={6} className="d-flex justify-content-center align-items-center px-5">
          <div>
            <h1>Simplify your job search</h1>
            <p>Keep track of all of your jobs during the each stage of the hiring process</p>
          </div>
        </Col>
        <Col md={6}>
          <img src={headerImage} style={{ width: "100%" }}></img>
        </Col>
      </Row>
      <Row className="m-0" style={{ backgroundColor: "rgb(251, 251, 253)", width: "100%" }}>
        <Col
          className="p-3"
          md={4}
          style={{ borderRight: "1px solid #ece9f2", borderTop: "1px solid #ece9f2", height: "100%" }}
        >
          <JobList
            title="Applied"
            data={filter("Applied", jobs)}
            setShowModal={setShowModal}
            setCurrentJob={setCurrentJob}
            updateJob={updateJob}
            deleteJob={deleteJob}
          />
        </Col>
        <Col
          className="p-3"
          md={4}
          style={{ borderRight: "1px solid #ece9f2", borderTop: "1px solid #ece9f2", height: "100%" }}
        >
          <JobList
            title="Wishlist"
            data={filter("Wishlist", jobs)}
            setShowModal={setShowModal}
            setCurrentJob={setCurrentJob}
            updateJob={updateJob}
            deleteJob={deleteJob}
          />
        </Col>
        <Col
          className="p-3"
          md={4}
          style={{ borderRight: "1px solid #ece9f2", borderTop: "1px solid #ece9f2", height: "100%" }}
        >
          <JobList
            title="Interview"
            data={filter("Interview", jobs)}
            setShowModal={setShowModal}
            setCurrentJob={setCurrentJob}
            updateJob={updateJob}
            deleteJob={deleteJob}
          />
        </Col>
        <Col
          className="p-3"
          md={4}
          style={{ borderRight: "1px solid #ece9f2", borderTop: "1px solid #ece9f2", height: "100%" }}
        >
          <JobList
            title="Offer"
            data={filter("Offer", jobs)}
            setShowModal={setShowModal}
            setCurrentJob={setCurrentJob}
            updateJob={updateJob}
            deleteJob={deleteJob}
          />
        </Col>
        <Col
          className="p-3"
          md={4}
          style={{ borderRight: "1px solid #ece9f2", borderTop: "1px solid #ece9f2", height: "100%" }}
        >
          <JobList
            title="Rejected"
            data={filter("Rejected", jobs)}
            setShowModal={setShowModal}
            setCurrentJob={setCurrentJob}
            updateJob={updateJob}
            deleteJob={deleteJob}
          />
        </Col>
        <Col
          className="p-3"
          md={4}
          style={{ borderRight: "1px solid #ece9f2", borderTop: "1px solid #ece9f2", height: "100%" }}
        >
          <JobList
            title="Accepted"
            data={filter("Accepted", jobs)}
            setShowModal={setShowModal}
            setCurrentJob={setCurrentJob}
            updateJob={updateJob}
            deleteJob={deleteJob}
          />
        </Col>
      </Row>
      <Modal size="md" show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Add Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <JobForm currentJob={currentJob} updateJob={updateJob} createJob={createJob} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Page4;
