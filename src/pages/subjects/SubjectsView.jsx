import { Button, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Container, Spinner, Modal } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { httpService } from "../../services/services";

export default function SubjectsView() {
  const [loading, setLoading] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const [show, setShow] = useState(false);
  const [subject, setSubject] = useState({});
  const [error, setError] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const columns = [
    { name: "Title", selector: (row) => row.title, sortable: true },
    {
      name: "Code",
      selector: (row) => row.code,
      sortable: true,
    },
  ];
  const ViewSubjects = async () => {
    setLoading(true);
    const path = "viewSubjects";
    const res = await httpService.get(path);

    setSubjects(res.data.subjects);
    setLoading(false);
  };
  useEffect(() => {
    ViewSubjects();
  }, []);

  const handleChange = (e) => {
    setSubject({ ...subject, [e.target.name]: e.target.value });
  };

  const CreateSubject = async () => {
    setLoading(true);
    const path = "createSubject";
    await httpService.post(path, subject);
    ViewSubjects();
    setLoading(false);
    handleClose();
  };
  return (
    <div className="mt-3 ">
      <Container className="border  shadow-sm p-3 rounded-3">
        <div>
          <Button color="secondary" variant="contained" onClick={handleShow}>
            add new subject
          </Button>
          {loading ? (
            <Spinner
              animation="border"
              variant="danger"
              className="ms-2"
              size="sm"
            />
          ) : (
            ""
          )}
          <hr />
        </div>
        <div>
          <DataTable
            title="List of subjects"
            pagination
            data={subjects}
            columns={columns}
          />
        </div>
        <div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>CREATE SUBJECT</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="mt-2">
                <TextField
                  label="Subject Title"
                  name="title"
                  helperText="Enter a subject title"
                  onChange={handleChange}
                  value={subject.title}
                  error={error}
                />
              </div>
              <div className="mt-2">
                <TextField
                  label="Subject Code"
                  name="code"
                  helperText="Enter the subject code"
                  onChange={handleChange}
                  value={subject.code}
                  error={error}
                  disabled={!subject.title ? true : false}
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="text" color="error" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="contained"
                color="success"
                onClick={CreateSubject}
              >
                CREATE subject
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Container>
    </div>
  );
}
