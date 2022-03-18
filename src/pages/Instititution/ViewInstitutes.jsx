import { School } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Modal, Spinner } from "react-bootstrap";
import { httpService } from "../../services/services";

export default function ViewInstitutes() {
  const [show, setShow] = useState(false);
  const [institution, setInstitution] = useState({});
  const [institutions, setInstitutions] = useState([]);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const columns = [
    { name: "Name", selector: (row) => row.name, sortable: true },
    {
      name: "Action",
      selector: () => <Button>View Candidates</Button>,
      sortable: true,
    },
  ];

  const handleChange = (e) => {
    setInstitution({ ...institution, [e.target.name]: e.target.value });
  };

  const CreateInstitution = async () => {
    if (!institution.name) return setError(true);
    else {
      setLoading(true);
      const path = "createInstitution";
      await httpService.post(path, institution);
      setLoading(false);
      handleClose();
      ViewInstituions();
    }
  };

  const ViewInstituions = async () => {
    setLoading(true);
    const path = "viewInstitutions";
    const res = await httpService.get(path);

    setInstitutions(res.data.institutions);
    setLoading(false);
  };
  useEffect(() => {
    ViewInstituions();
  }, []);
  return (
    <div>
      <div className="container shadow-lg rounded-3 mt-3 p-3">
        <Button variant="contained" endIcon={<School />} onClick={handleShow}>
          create insitution
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
        <DataTable
          columns={columns}
          data={institutions}
          title="Institutions Available"
          pagination
        />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>CREATE INSTITUTION</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TextField
            label="Name of Institution"
            name="name"
            helperText="Enter the name of a new Institution"
            onChange={handleChange}
            value={institution.name}
            error={error}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="text" color="error" onClick={handleClose}>
            Close
          </Button>
          <Button variant="contained" onClick={CreateInstitution}>
            CREATE INSTITUTION
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
