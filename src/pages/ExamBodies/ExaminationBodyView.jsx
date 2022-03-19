import { Button, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Container, Modal, Spinner } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { httpService } from "../../services/services";
import { TextField } from "@mui/material";
import { Book, Edit } from "@mui/icons-material";

export default function ExaminationBodyView() {
  const defaultData = { name: "", code: "" };
  const [examBodies, setExamBodies] = useState([]);

  const [examBody, setExamBody] = useState(defaultData);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const GetExaminationBodies = async () => {
    const res = await httpService.get("viewExamBodies");
    setExamBodies(res.data.examBodies);
  };

  const CreateExamBody = async () => {
    try {
      setLoading(true);
      const path = "createExaminationBody";
      await httpService.post(path, examBody);
      GetExaminationBodies();
      setLoading(false);
      setExamBody(defaultData);
    } catch (error) {
      setLoading(false);
    }
    handleClose();
  };

  const ViewExaminationBody = async (id) => {
    try {
      setLoading(true);
      const path = `viewExamBody/${id}`;
      const res = await httpService.get(path);
      setExamBody(res.data.examBody);
      setLoading(false);
      handleShow();
    } catch (error) {
      setLoading(false);
    }
    setLoading(false);
  };

  const UpdateExamBody = async () => {
    try {
      setLoading(true);
      const path = `editExamBody/${examBody._id}`;
      await httpService.patch(path, examBody);
      handleClose();
      setLoading(false);
      setExamBody(defaultData);
      GetExaminationBodies();
    } catch (error) {
      setLoading(false);
    }
    setLoading(false);
  };

  const columns = [
    { name: "NAME", selector: (row) => row.name, sortable: true },
    {
      name: "ABBREVIATION",
      selector: (row) => row.code,
      sortable: true,
    },
    {
      name: "EDIT",
      selector: (row) => (
        <IconButton
          onClick={() => {
            ViewExaminationBody(row._id);
          }}
        >
          <Edit />
        </IconButton>
      ),
    },
  ];
  const handleChange = (e) => {
    setExamBody({ ...examBody, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    GetExaminationBodies();
  }, []);
  return (
    <div>
      <Container>
        <div className="border border-secondary rounded-3 p-3 mt-3">
          <Button
            variant="contained"
            color="error"
            onClick={handleShow}
            endIcon={<Book />}
          >
            Create Examination Body
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
          <div className="mt-2">
            <DataTable
              title="Examination Bodies"
              pagination
              columns={columns}
              data={examBodies}
            />
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>CREATE EXAMINATION BODY</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="mt-2">
                <TextField
                  label="Name"
                  name="name"
                  helperText="Enter examination body name"
                  onChange={handleChange}
                  value={examBody.name}
                  error={error}
                />
              </div>
              <div className="mt-2">
                <TextField
                  label="Code"
                  name="code"
                  helperText="Enter examination body code"
                  onChange={handleChange}
                  value={examBody.code}
                  error={error}
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="text" color="error" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="contained"
                onClick={examBody._id ? UpdateExamBody : CreateExamBody}
              >
                {examBody._id ? " update exam Body" : "create exam body"}
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Container>
    </div>
  );
}
