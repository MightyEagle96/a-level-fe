import React from "react";
import { Card } from "react-bootstrap";
import { Avatar, Typography } from "@mui/material";
import { CreditCard } from "@mui/icons-material";
import { green } from "@mui/material/colors";
import { Button } from "@mui/material";

export default function TotalScratchCards() {
  return (
    <Card>
      <div className="d-flex justify-content-between p-3">
        <div>
          <Typography sx={{ color: green[700], fontWeight: 700 }}>
            Total Scratch Cards
          </Typography>
          <CreditCard sx={{ color: green[700] }} />
          <Button sx={{ color: green[500] }}>view</Button>
        </div>
        <div>
          <Avatar sx={{ bgcolor: green[700] }}>
            <Typography>50</Typography>
          </Avatar>
        </div>
      </div>
    </Card>
  );
}
