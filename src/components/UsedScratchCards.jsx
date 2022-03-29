import React from "react";
import { Card } from "react-bootstrap";
import { Avatar, Typography } from "@mui/material";
import { CreditCardOff } from "@mui/icons-material";
import { red } from "@mui/material/colors";
import { Button } from "@mui/material";
export default function UsedScratchCards() {
  return (
    <Card>
      <div className="d-flex justify-content-between p-3">
        <div>
          <Typography sx={{ color: red[700], fontWeight: 700 }}>
            Used Scratch Cards
          </Typography>
          <CreditCardOff sx={{ color: red[700] }} />
          <Button sx={{ color: red[500] }}>view</Button>
        </div>
        <div>
          <Avatar sx={{ bgcolor: red[700] }}>
            <Typography>50</Typography>
          </Avatar>
        </div>
      </div>
    </Card>
  );
}
