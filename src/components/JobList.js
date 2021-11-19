import React from "react";
import { Row, Col, Container, Card, Button, ListGroup } from "react-bootstrap";
import "./JobList.css";
import { FaTrash } from "react-icons/fa";
import { VscLinkExternal, VscAdd } from "react-icons/vsc";

const JobList = ({ title, data, setShowModal, setCurrentJob, updateJob, deleteJob }) => {
  const jobCards = data.map((j, i) => (
    <Card
      className="my-2"
      key={i}
      onClick={() => {
        setCurrentJob(j);
        setShowModal(true);
      }}
    >
      <Card.Body>
        <Card.Title>{j.jobTitle}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {j.company} | {j.jobSite}
        </Card.Subtitle>
        <hr />
        <Card.Text>
          {j.location} | {j.salary} | {j.dateApplied}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="p-2 d-flex justify-content-between">
        <span>
          <VscLinkExternal />
        </span>
        <span onClick={() => deleteJob(j.id)}>
          <FaTrash />
        </span>
      </Card.Footer>
    </Card>
  ));
  return (
    <>
      <h2 className="my-4 text-center">{title}</h2>
      <div className="d-grid gap-2">
        <Button
          variant="secondary"
          size="md"
          onClick={() => {
            setCurrentJob({});
            setShowModal(true);
          }}
        >
          <VscAdd /> {"  "}
          Add Job
        </Button>
      </div>

      <div>{jobCards}</div>
    </>
  );
};

export default JobList;
