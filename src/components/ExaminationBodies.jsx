import React from "react";
import { Card } from "react-bootstrap";
import { Avatar, Typography } from "@mui/material";
import { brown } from "@mui/material/colors";
import { Button } from "@mui/material";

export default function ExaminationBodies() {
  return (
    <Card>
      <div className="d-flex justify-content-between p-3">
        <div>
          <Typography sx={{ color: brown[400], fontWeight: 700 }}>
            Examination Bodies
          </Typography>
          <i className="fas fa-pen-nib    " style={{ color: brown[400] }}></i>
          <Button sx={{ color: brown[500] }}>view</Button>
        </div>
        <div>
          <Avatar sx={{ bgcolor: brown[400] }}>
            <Typography>50</Typography>
          </Avatar>
        </div>
      </div>
    </Card>
  );
}
