import React, { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Paper,
  Typography,
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import { httpService } from "../../services/services";
import { Grades } from "../../services/labels";

export default function CreateCandidate() {
  const defaultData = {
    firstName: "",
    lastName: "",
    institution: "",
    examinationBody: "",
    subject1: { subject: "", grade: "" },
    subject2: { subject: "", grade: "" },
    subject3: { subject: "", grade: "" },
  };
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState(defaultData);
  const [errorState, setErrorState] = useState({
    name: false,
    email: false,
    password: false,
  });
  const [institutions, setInstitutions] = useState([]);
  const [examinationBodies, setExaminationBodies] = useState([]);
  const [subjects, setSubjects] = useState([]);

  const GetInstitutions = async () => {
    const path = "viewInstitutions";
    const res = await httpService.get(path);
    setInstitutions(res.data.institutions);
  };

  const GetExaminationBodies = async () => {
    const path = "viewExamBodies";
    const res = await httpService.get(path);
    setExaminationBodies(res.data.examBodies);
  };
  const GetSubjects = async () => {
    const path = "viewSubjects";
    const res = await httpService.get(path);

    setSubjects(res.data.subjects);
  };

  const handleNext = () => {
    if (activeStep === 0 || activeStep === 1) {
      const keys = Object.keys(values);

      const theValues = Object.values(values);

      for (let i = 0; i < theValues.length; i++) {
        if (!theValues[i]) {
          setErrorState({ ...errorState, [keys[i]]: true });
        }
      }
    }

    if (Object.values(errorState).filter((c) => c === true).length === 0) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else return;
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleChange = (event) => {
    setErrorState({ ...errorState, [event.target.name]: false });
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const candidateDetails = () => {
    return (
      <div>
        <div className="mb-3">
          <TextField
            label="First Name"
            variant="outlined"
            type="text"
            helperText="Enter Candidate's first name"
            style={{ width: 250 }}
            name="firstName"
            onChange={handleChange}
            value={values.firstName}
          />
        </div>
        <div className="mb-3">
          <TextField
            label="Last Name"
            name="lastName"
            type="email"
            variant="outlined"
            helperText="Enter Candidate's last name"
            style={{ width: 250 }}
            onChange={handleChange}
            value={values.lastName}
            autoComplete="off"
          />
        </div>
      </div>
    );
  };

  const examBodyAndUniveristy = () => {
    return (
      <div>
        <div className="mb-3">
          <FormControl sx={{ m: 0, width: 250 }} variant="outlined">
            <InputLabel id="exam-body-label">Examination Body</InputLabel>
            <Select
              labelId="exam-body-label"
              id="exam-body"
              value={values.examinationBody}
              label="Examination Body"
              onChange={handleChange}
              name="examinationBody"
            >
              {examinationBodies.map((c, i) => (
                <MenuItem key={i} value={c._id}>
                  {c.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="mb-3">
          <FormControl sx={{ m: 0, width: 250 }} variant="outlined">
            <InputLabel id="institution-label">Institution</InputLabel>
            <Select
              labelId="institution-label"
              id="institution"
              value={values.institution}
              label="Institution"
              onChange={handleChange}
              name="institution"
            >
              {institutions.map((c, i) => (
                <MenuItem key={i} value={c._id}>
                  {c.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="mb-3">
          <TextField
            label="Registration Number"
            name="regNumber"
            type="email"
            variant="outlined"
            helperText="Enter Candidate's registration number"
            style={{ width: 250 }}
            onChange={handleChange}
            value={values.regNumber}
            autoComplete="off"
          />
        </div>
      </div>
    );
  };
  const candidateGrades = () => {
    return (
      <div>
        <div>
          <div className="mb-3">
            <FormControl sx={{ m: 0, width: 250 }} variant="outlined">
              <InputLabel id="exam-body-label">First Subject</InputLabel>
              <Select
                labelId="exam-body-label"
                id="exam-body"
                value={values.subject1.subject}
                label="First Subject"
                onChange={(e) => {
                  setValues({
                    ...values,
                    subject1: {
                      subject: e.target.value,
                      grade: values.subject1.grade,
                    },
                  });
                }}
                name="examinationBody"
              >
                {subjects.map((c, i) => (
                  <MenuItem key={i} value={c._id}>
                    {c.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="mb-3">
            <FormControl sx={{ m: 0, width: 250 }} variant="outlined">
              <InputLabel id="institution-label">
                First Subject Grade
              </InputLabel>
              <Select
                labelId="institution-label"
                id="institution"
                value={values.subject1.grade}
                label="First Subject Grade"
                onChange={(e) => {
                  setValues({
                    ...values,
                    subject1: {
                      subject: values.subject1.subject,
                      grade: e.target.value,
                    },
                  });
                }}
                name="examinationBody"
              >
                {Grades.map((c, i) => (
                  <MenuItem key={i} value={c}>
                    {c}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <hr />
        <div>
          {" "}
          <div className="mb-3">
            <FormControl sx={{ m: 0, width: 250 }} variant="outlined">
              <InputLabel id="exam-body-label">Second Subject</InputLabel>
              <Select
                labelId="exam-body-label"
                id="exam-body"
                value={values.subject2.subject}
                label="Second Subject"
                onChange={(e) => {
                  setValues({
                    ...values,
                    subject2: {
                      subject: e.target.value,
                      grade: values.subject2.grade,
                    },
                  });
                }}
                name="examinationBody"
              >
                {subjects.map((c, i) => (
                  <MenuItem key={i} value={c._id}>
                    {c.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="mb-3">
            <FormControl sx={{ m: 0, width: 250 }} variant="outlined">
              <InputLabel id="institution-label">
                Second Subject Grade
              </InputLabel>
              <Select
                labelId="institution-label"
                id="institution"
                value={values.subject2.grade}
                label="Second Subject Grade"
                onChange={(e) => {
                  setValues({
                    ...values,
                    subject2: {
                      subject: values.subject2.subject,
                      grade: e.target.value,
                    },
                  });
                }}
                name="examinationBody"
              >
                {Grades.map((c, i) => (
                  <MenuItem key={i} value={c}>
                    {c}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <hr />
        <div>
          {" "}
          <div className="mb-3">
            <FormControl sx={{ m: 0, width: 250 }} variant="outlined">
              <InputLabel id="exam-body-label">Third Subject</InputLabel>
              <Select
                labelId="exam-body-label"
                id="exam-body"
                value={values.subject3.subject}
                label="Third Subject"
                onChange={(e) => {
                  setValues({
                    ...values,
                    subject3: {
                      subject: e.target.value,
                      grade: values.subject3.grade,
                    },
                  });
                }}
              >
                {subjects.map((c, i) => (
                  <MenuItem key={i} value={c._id}>
                    {c.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="mb-3">
            <FormControl sx={{ m: 0, width: 250 }} variant="outlined">
              <InputLabel id="institution-label">
                Third Subject Grade
              </InputLabel>
              <Select
                labelId="institution-label"
                id="institution"
                value={values.subject3.grade}
                label="Third Subject Grade"
                onChange={(e) => {
                  setValues({
                    ...values,
                    subject3: {
                      grade: e.target.value,
                      subject: values.subject3.subject,
                    },
                  });
                }}
                name="examinationBody"
              >
                {Grades.map((c, i) => (
                  <MenuItem key={i} value={c}>
                    {c}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    );
  };

  const summary = () => {
    return (
      <div>
        <div className="row">
          <div className="col-md-4 border-end">
            <div className="mb-2">
              <Typography variant="subtitle2">First Name:</Typography>
              <Typography variant="h6">{values.firstName}</Typography>
            </div>
            <div className="mb-2">
              <Typography variant="subtitle2">Last Name:</Typography>
              <Typography variant="h6">{values.lastName}</Typography>
            </div>
            <div className="mb-2">
              <Typography variant="subtitle2">Institution:</Typography>
              <Typography variant="h6">
                {values.institution
                  ? institutions.find((c) => c._id === values.institution).name
                  : ""}
              </Typography>
            </div>
          </div>
          <div className="col-md-4 border-end">
            <div className="mb-2">
              <Typography variant="subtitle2">Examination Body:</Typography>
              <Typography variant="h6">
                {" "}
                {values.examinationBody
                  ? examinationBodies.find(
                      (c) => c._id === values.examinationBody
                    ).name
                  : ""}
              </Typography>
            </div>
            <div className="mb-2">
              <Typography variant="subtitle2">Registration Number:</Typography>
              <Typography variant="h6">{values.regNumber}</Typography>
            </div>
            <div className="mb-2">
              <Typography variant="subtitle2">Subject 1:</Typography>
              <Typography variant="h6">{`Subject: ${
                values.subject1.subject
                  ? subjects.find((c) => c._id === values.subject1.subject)
                      .title
                  : ""
              }`}</Typography>
              <Typography variant="h6">{`Grade: ${values.subject1.grade}`}</Typography>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-2">
              <Typography variant="subtitle2">Subject 2:</Typography>
              <Typography variant="h6">{`Subject: ${
                values.subject2.subject
                  ? subjects.find((c) => c._id === values.subject2.subject)
                      .title
                  : ""
              }`}</Typography>
              <Typography variant="h6">{`Grade: ${values.subject2.grade}`}</Typography>
            </div>
            <div className="mb-2">
              <Typography variant="subtitle2">Subject 3:</Typography>
              <Typography variant="h6">{`Subject: ${
                values.subject3.subject
                  ? subjects.find((c) => c._id === values.subject3.subject)
                      .title
                  : ""
              }`}</Typography>
              <Typography variant="h6">{`Grade: ${values.subject3.grade}`}</Typography>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const submitForm = async () => {
    setLoading(true);
    try {
      const path = "createCandidate";
      await httpService.post(path, values);
      setLoading(false);
      setActiveStep(0);
      setValues(defaultData);
    } catch (error) {
      setLoading(false);
    }
  };

  const steps = [
    {
      label: "First Name and Last Name",
      description: candidateDetails(),
    },
    {
      label: "Examination Body and University",
      description: examBodyAndUniveristy(),
    },
    {
      label: "Candidate's Grades",
      description: candidateGrades(),
    },
    {
      label: "Review and Submit",
      description: summary(),
    },
  ];
  useEffect(() => {
    GetExaminationBodies();
    GetInstitutions();
    GetSubjects();
  }, []);

  return (
    <div>
      <Container>
        <div className="border border-secondary p-5 rounded-3 mt-3">
          <Typography variant="h5">Create New Candidate</Typography>
          <hr />
          <div className="mt-3">
            <div>
              <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                  <Step key={step.label}>
                    <StepLabel
                      optional={
                        index === 2 ? (
                          <Typography variant="caption">Last step</Typography>
                        ) : null
                      }
                    >
                      {step.label}
                    </StepLabel>
                    <StepContent>
                      <Typography>{step.description}</Typography>
                      <Box sx={{ mb: 2 }}>
                        <div>
                          <Button
                            variant="contained"
                            onClick={
                              index === steps.length - 1
                                ? submitForm
                                : handleNext
                            }
                            sx={{ mt: 1, mr: 1 }}
                          >
                            {index === steps.length - 1 ? "Finish" : "Continue"}
                          </Button>
                          <Button
                            disabled={index === 0}
                            onClick={handleBack}
                            sx={{ mt: 1, mr: 1 }}
                          >
                            Back
                          </Button>
                          {loading ? (
                            <Button sx={{ mt: 1, mr: 1 }}>
                              <Spinner animation="border"></Spinner>
                            </Button>
                          ) : (
                            ""
                          )}
                        </div>
                      </Box>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
              {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                  <Typography>
                    All steps completed - you&apos;re finished
                  </Typography>
                  <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                    Reset
                  </Button>
                </Paper>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
