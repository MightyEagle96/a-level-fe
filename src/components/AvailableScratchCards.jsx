import React from "react";
import { Card } from "react-bootstrap";
import { Avatar, Typography, Button } from "@mui/material";
import { CreditCardOutlined } from "@mui/icons-material";
import { blue } from "@mui/material/colors";

export default function AvailableScratchCards() {
  return (
    <Card>
      <div className="d-flex justify-content-between p-3">
        <div>
          <Typography sx={{ color: blue[700], fontWeight: 700 }}>
            Available Scratch Cards
          </Typography>
          <CreditCardOutlined sx={{ color: blue[700] }} />
          <Button sx={{ color: blue[500] }}>view</Button>
        </div>
        <div>
          <Avatar sx={{ bgcolor: blue[700] }}>
            <Typography>50</Typography>
          </Avatar>
        </div>
      </div>
    </Card>
  );
}
