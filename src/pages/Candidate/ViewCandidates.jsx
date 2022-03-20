import { Avatar, Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { httpService } from "../../services/services";
import { stringAvatar } from "../../utils/util";

export default function ViewCandidates() {
  const [candidates, setCandidates] = useState([]);

  const GetCandidates = async () => {
    const path = "viewCandidates";
    const res = await httpService.get(path);
    //console.log(res.data.candidates);
    setCandidates(res.data.candidates);
  };

  const columns = [
    {
      name: "Profile Photo",
      selector: (row) =>
        row.imageUrl ? (
          <Avatar src={row.imageUrl} alt={row._id} />
        ) : (
          <Avatar {...stringAvatar(`${row.firstName}-${row.lastName}`)} />
        ),
    },
    { name: "First Name", selector: (row) => row.firstName },
    { name: "Last Name", selector: (row) => row.lastName },
    { name: "Institution", selector: (row) => row.institution.name },
    { name: "Examination Body", selector: (row) => row.examinationBody.name },
    { name: "Registration Number", selector: (row) => row.regNumber },
    {
      name: "Result",
      selector: (row) => <Button color="secondary">view result</Button>,
    },
  ];
  useEffect(() => {
    GetCandidates();
  }, []);
  return (
    <div>
      <Container>
        <div className="border border-dark rounded-3 mt-3 p-3">
          <Typography variant="h5" color="ButtonShadow">
            Candidate List
          </Typography>
          <hr />
          <DataTable
            title="Registered Candidates"
            columns={columns}
            data={candidates}
            pagination
          />
        </div>
      </Container>
    </div>
  );
}
