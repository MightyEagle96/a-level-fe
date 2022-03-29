import React from "react";
import { Avatar, Button, Typography } from "@mui/material";
import { Card } from "react-bootstrap";
import { School } from "@mui/icons-material";
import { blueGrey } from "@mui/material/colors";

export default function RegisteredInstitutions() {
  return (
    <Card>
      <div className="d-flex justify-content-between p-3">
        <div>
          <Typography sx={{ color: blueGrey[500], fontWeight: 700 }}>
            Registered Institutions
          </Typography>
          <School sx={{ color: blueGrey[500], fontWeight: 700 }} />
          <Button sx={{ color: blueGrey[500] }}>view</Button>
        </div>
        <div>
          <Avatar sx={{ bgcolor: blueGrey[500] }}>
            <Typography>50</Typography>
          </Avatar>
        </div>
      </div>
    </Card>
  );
}
