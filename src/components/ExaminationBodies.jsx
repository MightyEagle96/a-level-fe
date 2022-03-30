import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Avatar, Typography } from "@mui/material";
import { brown } from "@mui/material/colors";
import { Button } from "@mui/material";
import { Spinner } from "react-bootstrap";
import { httpService } from "../services/services";

export default function ExaminationBodies() {
  const [length, setLength] = useState(0);
  const [loading, setLoading] = useState(false);
  const GetLength = async () => {
    setLoading(true);
    const res = await httpService.get("viewExamBodies");
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
          <Typography sx={{ color: brown[400], fontWeight: 700 }}>
            Examination Bodies
          </Typography>
          <i className="fas fa-pen-nib    " style={{ color: brown[400] }}></i>
          <Button sx={{ color: brown[500] }}>view</Button>
          {loading ? (
            <Spinner
              animation="border"
              size="sm"
              style={{ color: brown[500] }}
            />
          ) : null}
        </div>
        <div>
          <Avatar sx={{ bgcolor: brown[400] }}>
            <Typography>{length}</Typography>
          </Avatar>
        </div>
      </div>
    </Card>
  );
}
