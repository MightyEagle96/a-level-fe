import { School, Delete, Edit } from "@mui/icons-material";
import { Button, TextField, IconButton, Link } from "@mui/material";
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Modal, Spinner } from "react-bootstrap";
import { httpService } from "../../services/services";
import Swal from "sweetalert2";

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
      selector: (row) => (
        <Link underline="none" href={`/viewCandidates?institution=${row._id}`}>
          VIEW CANDIDATES
        </Link>
      ),
      sortable: true,
    },
    {
      name: "Edit Institution",
      selector: (row) => (
        <IconButton color="primary" onClick={() => GetInstitution(row._id)}>
          <Edit />
        </IconButton>
      ),
    },
  ];

  const GetInstitution = async (id) => {
    const path = `viewInstitutions?_id=${id}`;
    const res = await httpService.get(path);
    setInstitution(res.data.institutions[0]);
    handleShow();
  };

  const UpdateInstitution = async () => {
    try {
      setLoading(true);
      const path = `updateInstitution/${institution._id}`;
      await httpService.patch(path, institution);
      setLoading(false);
      ViewInstitutions();
      setInstitution({});
      handleClose();
    } catch (error) {
      setLoading(false);
    }
  };

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
      ViewInstitutions();
    }
  };

  const ViewInstitutions = async () => {
    setLoading(true);
    const path = "viewInstitutions";
    const res = await httpService.get(path);

    setInstitutions(res.data.institutions);
    setLoading(false);
  };
  useEffect(() => {
    ViewInstitutions();
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
          <Button
            variant="contained"
            onClick={institution._id ? UpdateInstitution : CreateInstitution}
          >
            {institution._id ? "Update Institution" : "Create Institution"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
