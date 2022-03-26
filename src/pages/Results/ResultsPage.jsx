import { Avatar, Typography } from "@mui/material";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { result } from "../../services/services";

export default function ResultsPage() {
  const [data, setResult] = useState(result);
  return (
    <div>
      <Container>
        <div className="border border-dark p-3 rounded-3 mt-3">
          <div className="d-flex justify-content-end">
            <Avatar src={data.imageUrl} sx={{ width: 100, height: 100 }} />
          </div>
          <div>
            <Typography>First Name: {result.firstName}</Typography>
          </div>
          <div>
            <Typography>Last Name: {result.lastName}</Typography>
          </div>
        </div>
      </Container>
    </div>
  );
}
