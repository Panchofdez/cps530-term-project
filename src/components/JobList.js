import React from "react";
import { Row, Col, Container, Card, Button, ListGroup } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { VscLinkExternal, VscAdd } from "react-icons/vsc";

const JobList = ({ title, data, setShowModal, setCurrentJob, deleteJob, setListType }) => {
  const jobCards = data.map((j, i) => (
    <Card className="my-2" key={i}>
      <Card.Body
        style={{ cursor: "pointer" }}
        onClick={() => {
          setCurrentJob(j);
          setShowModal(true);
        }}
      >
        <Card.Title>{j.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {j.company} | {j.site}
        </Card.Subtitle>
        <hr />
        <Card.Text>
          {j.location} {j.salary && "|"} {j.salary} {j.createdAt && "|"} {j.createdAt}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="p-2 d-flex justify-content-between">
        <a href={j.link || "#"} target="_blank">
          <VscLinkExternal />
        </a>

        <span style={{ cursor: "pointer", color: "red" }} onClick={() => deleteJob(j._id)}>
          <FaTrash />
        </span>
      </Card.Footer>
    </Card>
  ));
  return (
    <>
      <h3 className="my-4 text-center">{title}</h3>
      <div className="d-grid gap-2">
        <Button
          variant="secondary"
          size="md"
          onClick={() => {
            setCurrentJob({});
            setShowModal(true);
            setListType(title);
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
