import React, { useState } from "react";
import { Form, Button, Field } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  jobTitle: yup.string().required("Job title is required"),
  company: yup.string().required("Company name is required"),
  jobSite: yup.string().required("Job site is required"),
  salary: yup.string(),
  location: yup.string(),
  jobLink: yup.string(),
  resume: yup.string(),
  coverLetter: yup.string(),
  status: yup.string().required("You must choose a status"),
});

const JobForm = ({ currentJob, updateJob, createJob, listType }) => {
  const updateMode = Object.keys(currentJob).length > 0;
  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) => {
        if (updateMode) {
          updateJob(currentJob.id, values);
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
              jobLink: "",
              resume: "",
              coverLetter: "",
              status: listType ? listType : "Applied",
            }
      }
    >
      {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="jobTitle">
            <Form.Label>Job Title</Form.Label>
            <Form.Control name="jobTitle" onChange={handleChange} onBlur={handleBlur} value={values.jobTitle} />
            {touched.jobTitle && errors.jobTitle && <div style={{ color: "red" }}>{errors.jobTitle}</div>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="company">
            <Form.Label>Company</Form.Label>
            <Form.Control name="company" onChange={handleChange} onBlur={handleBlur} value={values.company} />
            {touched.jobTitle && errors.company && <div style={{ color: "red" }}>{errors.company}</div>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="jobSite">
            <Form.Label>Job Site</Form.Label>
            <Form.Control name="jobSite" onChange={handleChange} onBlur={handleBlur} value={values.jobSite} />
            {touched.jobTitle && errors.jobSite && <div style={{ color: "red" }}>{errors.jobSite}</div>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="salary">
            <Form.Label>Salary</Form.Label>
            <Form.Control name="salary" onChange={handleChange} onBlur={handleBlur} value={values.salary} />
            {touched.jobTitle && errors.salary && <div style={{ color: "red" }}>{errors.salary}</div>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="location">
            <Form.Label>Location</Form.Label>
            <Form.Control name="location" onChange={handleChange} onBlur={handleBlur} value={values.location} />
            {touched.jobTitle && errors.location && <div style={{ color: "red" }}>{errors.location}</div>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="jobLink">
            <Form.Label>Job Link</Form.Label>
            <Form.Control name="jobLink" onChange={handleChange} onBlur={handleBlur} value={values.jobLink} />
            {touched.jobLink && errors.jobSite && <div style={{ color: "red" }}>{errors.jobLink}</div>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="resume">
            <Form.Label>Resume</Form.Label>
            <Form.Control
              name="resume"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.resume}
              placeholder="Enter Link"
            />
            {touched.jobTitle && errors.resume && <div style={{ color: "red" }}>{errors.resume}</div>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="coverLetter">
            <Form.Label>Cover Letter</Form.Label>
            <Form.Control
              name="coverLetter"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.coverLetter}
              placeholder="Enter Link"
            />
            {touched.jobTitle && errors.coverLetter && <div style={{ color: "red" }}>{errors.coverLetter}</div>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Select id="status" name="status" onChange={handleChange} onBlur={handleBlur} value={values.status}>
              <option>Applied</option>
              <option>Wishlist</option>
              <option>Interview</option>
              <option>Offer</option>
              <option>Rejected</option>
              <option>Accepted</option>
            </Form.Select>
            {touched.jobTitle && errors.status && <div style={{ color: "red" }}>{errors.status}</div>}
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
