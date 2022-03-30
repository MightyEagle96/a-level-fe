/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, Link, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { httpService } from "../../services/services";
import { stringAvatar } from "../../utils/util";
import { Spinner } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function ViewCandidates() {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(false);

  const search = useLocation().search;

  const institution = new URLSearchParams(search).get("institution");

  const GetCandidates = async () => {
    setLoading(true);

    try {
      const path = institution
        ? `viewCandidates?institution=${institution}`
        : "viewCandidates";

      const res = await httpService.get(path);
      setCandidates(res.data.candidates);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
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
    {
      name: "Institution",
      selector: (row) => (row.institution ? row.institution.name : ""),
    },
    {
      name: "Examination Body",
      selector: (row) => (row.examinationBody ? row.examinationBody.name : ""),
    },
    { name: "Registration Number", selector: (row) => row.regNumber },
    {
      name: "Result",
      selector: (row) => (
        <Link underline="none" href={`/viewCandidate/${row._id}`}>
          VIEW
        </Link>
      ),
    },
  ];
  useEffect(() => {
    GetCandidates();
  }, []);
  return (
    <div>
      <Container>
        <div className="border rounded-3 mt-3 p-3">
          <Typography variant="h5" color="ButtonShadow">
            Candidate List
          </Typography>{" "}
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
            title={`Registered Candidates (${candidates.length})`}
            columns={columns}
            data={candidates}
            pagination
          />
        </div>
      </Container>
    </div>
  );
}
