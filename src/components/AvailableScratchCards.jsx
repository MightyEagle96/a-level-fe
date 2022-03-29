import React from "react";
import { Card } from "react-bootstrap";
import { Typography } from "@mui/material";
import { CreditCardOutlined } from "@mui/icons-material";

export default function AvailableScratchCards() {
  return (
    <Card>
      <div className="d-flex justify-content-between p-3">
        <div>
          <Typography variant="body1">Available Scratch Cards</Typography>
          <CreditCardOutlined />
        </div>
        <div>
          <Typography variant="body1">50</Typography>
        </div>
      </div>
    </Card>
  );
}
