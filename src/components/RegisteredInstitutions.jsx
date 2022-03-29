import React from "react";
import { Typography } from "@mui/material";
import { Card } from "react-bootstrap";
import { School } from "@mui/icons-material";

export default function RegisteredInstitutions() {
  return (
    <Card>
      <div className="d-flex justify-content-between p-3">
        <div>
          <Typography variant="h6">Registered Institutions</Typography>
          <School />
        </div>
        <div>
          <Typography variant="h6">50</Typography>
        </div>
      </div>
    </Card>
  );
}
