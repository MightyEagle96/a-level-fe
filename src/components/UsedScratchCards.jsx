import React from "react";
import { Card } from "react-bootstrap";
import { Typography } from "@mui/material";
import { CreditCardOff } from "@mui/icons-material";
export default function UsedScratchCards() {
  return (
    <Card>
      <div className="d-flex justify-content-between p-3">
        <div>
          <Typography variant="body1">Used Scratch Cards</Typography>
          <CreditCardOff />
        </div>
        <div>
          <Typography variant="body1">50</Typography>
        </div>
      </div>
    </Card>
  );
}
