import React, { useState, useEffect } from "react";
import { Avatar, Button, Typography } from "@mui/material";
import { Card, Spinner } from "react-bootstrap";
import { School } from "@mui/icons-material";
import { blueGrey } from "@mui/material/colors";
import { httpService } from "../services/services";

export default function RegisteredInstitutions() {
  const [length, setLength] = useState(0);
  const [loading, setLoading] = useState(false);
  const GetLength = async () => {
    setLoading(true);
    const res = await httpService.get("viewInstitutions");
    setLength(res.data.length);
    setLoading(false);
  };

  useEffect(() => {
    GetLength();
  }, []);
  return (
    <Card>
      <div className="d-flex justify-content-between p-3">
        <div>
          <Typography sx={{ color: blueGrey[500], fontWeight: 700 }}>
            Registered Institutions
          </Typography>
          <School sx={{ color: blueGrey[500], fontWeight: 700 }} />
          <Button sx={{ color: blueGrey[500] }}>view</Button>
          {loading ? (
            <Spinner
              animation="border"
              size="sm"
              style={{ color: blueGrey[300] }}
            />
          ) : null}
        </div>
        <div>
          <Avatar sx={{ bgcolor: blueGrey[500] }}>
            <Typography>{length}</Typography>
          </Avatar>
        </div>
      </div>
    </Card>
  );
}
