import React from "react";
import { Card } from "react-bootstrap";
import { Typography } from "@mui/material";
import { CreditCard } from "@mui/icons-material";

export default function TotalScratchCards() {
  return (
    <Card>
      <div className="d-flex justify-content-between p-3">
        <div>
          <Typography variant="body1">Total Scratch Cards</Typography>
          <CreditCard />
        </div>
        <div>
          <Typography variant="body1">50</Typography>
        </div>
      </div>
    </Card>
  );
}
