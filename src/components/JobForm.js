import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  jobTitle: yup.string().required("Job title is required"),
  company: yup.string().required("Company name is required"),
  jobSite: yup.string().required("Job site is required"),
  salary: yup.string(),
  location: yup.string(),
  dateApplied: yup.string(),
  resume: yup.string(),
  coverLetter: yup.string(),
  status: yup.string().required("You must choose a status"),
});

const JobForm = ({ currentJob, updateJob, createJob }) => {
  const updateMode = Object.keys(currentJob).length > 0;
  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) => {
        if (updateMode) {
          updateJob(1, values);
        } else {
          createJob(values);
        }
      }}
      initialValues={
        updateMode > 0
          ? currentJob
          : {
              jobTitle: "",
              company: "",
              jobSite: "",
              salary: "",
              location: "",
              dateApplied: "",
              resume: "",
              coverLetter: "",
              status: "Applied",
            }
      }
      validator={() => ({})}
    >
      {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="jobTitle">
            <Form.Label>Job Title</Form.Label>
            <Form.Control name="jobTitle" onChange={handleChange} value={values.jobTitle} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="company">
            <Form.Label>Company</Form.Label>
            <Form.Control name="company" onChange={handleChange} value={values.company} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="jobSite">
            <Form.Label>Job Site</Form.Label>
            <Form.Control name="jobSite" onChange={handleChange} value={values.jobSite} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="salary">
            <Form.Label>Salary</Form.Label>
            <Form.Control name="salary" onChange={handleChange} value={values.salary} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="location">
            <Form.Label>Location</Form.Label>
            <Form.Control name="location" onChange={handleChange} value={values.location} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="dateApplied">
            <Form.Label>Date Applied</Form.Label>
            <Form.Control name="dateApplied" onChange={handleChange} value={values.dateApplied} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="resume">
            <Form.Label>Resume</Form.Label>
            <Form.Control name="resume" onChange={handleChange} value={values.resume} placeholder="Enter Link" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="coverLetter">
            <Form.Label>Cover Letter</Form.Label>
            <Form.Control
              name="coverLetter"
              onChange={handleChange}
              value={values.coverLetter}
              placeholder="Enter Link"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Select id="status" name="status" onChange={handleChange} value={values.status}>
              <option>Applied</option>
              <option>Wishlist</option>
              <option>Interview</option>
              <option>Offer</option>
              <option>Rejected</option>
              <option>Accepted</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary" type="submit">
            Save Job
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default JobForm;
