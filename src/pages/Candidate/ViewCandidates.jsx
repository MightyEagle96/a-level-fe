import { Typography } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";

export default function ViewCandidates() {
  return (
    <div>
      <Container>
        <div className="border border-dark rounded-3 mt-3 p-3">
          <Typography variant="h5" color="ButtonShadow">
            Candidate List
          </Typography>
        </div>
      </Container>
    </div>
  );
}
