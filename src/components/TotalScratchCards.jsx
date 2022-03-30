import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Avatar, Typography } from "@mui/material";
import { CreditCard } from "@mui/icons-material";
import { green } from "@mui/material/colors";
import { Button } from "@mui/material";
import { httpService } from "../services/services";
import { Spinner } from "react-bootstrap";

export default function TotalScratchCards() {
  const [length, setLength] = useState(0);
  const [loading, setLoading] = useState(false);
  const GetLength = async () => {
    setLoading(true);
    const res = await httpService.get("viewScratchCards");
    setLength(res.data.length);
    setLoading(false);
  };

  useEffect(() => {
    GetLength();
  }, []);
  const redirectTo = () => {
    window.location.assign("/scratchCards");
  };
  return (
    <Card>
      <div className="d-flex justify-content-between p-3">
        <div>
          <Typography sx={{ color: green[700], fontWeight: 700 }}>
            Total Scratch Cards
          </Typography>
          <CreditCard sx={{ color: green[700] }} />
          <Button sx={{ color: green[500] }} onClick={redirectTo}>
            view
          </Button>
          {loading ? (
            <Spinner
              animation="border"
              size="sm"
              style={{ color: green[500] }}
            />
          ) : null}
        </div>
        <div>
          <Avatar sx={{ bgcolor: green[700] }}>
            <Typography>{length}</Typography>
          </Avatar>
        </div>
      </div>
    </Card>
  );
}
