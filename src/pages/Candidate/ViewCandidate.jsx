import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { httpService } from "../../services/services";

export default function ViewCandidate() {
  const { id } = useParams();
  const [loading, setLoading] = useState([]);
  const defaultData = {
    firstName: "",
    lastName: "",
    institution: "",
    examinationBody: "",
    subject1: { subject: "", grade: "" },
    subject2: { subject: "", grade: "" },
    subject3: { subject: "", grade: "" },
  };

  const [candidate, setCandidate] = useState(defaultData);

  const GetCandidate = async () => {
    const path = `viewCandidate/${id}`;
    const res = await httpService.get(path);
    setCandidate(res.data.candidate);
  };

  useEffect(() => {
    GetCandidate();
  }, []);
  return (
    <div>
      <Container>
        <div className="mt-3 border border-dark p-3 rounded-3">
          <Typography variant="h3">{`${candidate.firstName} ${candidate.lastName}`}</Typography>
        </div>
      </Container>
    </div>
  );
}
