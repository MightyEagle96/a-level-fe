import React from "react";
import { Card } from "react-bootstrap";
import { Typography } from "@mui/material";

export default function ExaminationBodies() {
  return (
    <Card>
      <div className="d-flex justify-content-between p-3">
        <div>
          <Typography variant="h6">Examination Bodies</Typography>
          <i class="fas fa-pen-nib    "></i>
        </div>
        <div>
          <Typography variant="h6">50</Typography>
        </div>
      </div>
    </Card>
  );
}
