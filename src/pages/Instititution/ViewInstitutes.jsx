import { School, Delete } from "@mui/icons-material";
import { Button, TextField, IconButton } from "@mui/material";
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
      selector: () => <Button>View Candidates</Button>,
      sortable: true,
    },
    {
      name: "Delete",
      selector: (row) => (
        <IconButton color="error" onClick={() => DeleteChange(row._id)}>
          <Delete />
        </IconButton>
      ),
    },
  ];

  const DeleteChange = (id) => {
    Swal.fire({
      icon: "question",
      title: "Delete Institution?",
      text: "Are you sure you want to delete this institution? This is a destructive action.",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        const path = `DeleteInstitution/${id}`;
        await httpService.delete(path);
        ViewInstitutions();
        setLoading(false);
      }
    });
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
          <Button variant="contained" onClick={CreateInstitution}>
            CREATE INSTITUTION
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
