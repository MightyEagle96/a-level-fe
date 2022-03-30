import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Avatar, Typography } from "@mui/material";
import { CreditCardOff } from "@mui/icons-material";
import { red } from "@mui/material/colors";
import { Button } from "@mui/material";
import { httpService } from "../services/services";
import { Spinner } from "react-bootstrap";

export default function UsedScratchCards() {
  const [length, setLength] = useState(0);
  const [loading, setLoading] = useState(false);
  const GetLength = async () => {
    setLoading(true);
    const res = await httpService.get("viewScratchCards?usedBy=notNull");
    setLength(res.data.length);
    setLoading(false);
  };

  useEffect(() => {
    GetLength();
  }, []);

  const redirectTo = () => {
    window.location.assign("/scratchCards?usedBy=notNull");
  };
  return (
    <Card>
      <div className="d-flex justify-content-between p-3">
        <div>
          <Typography sx={{ color: red[700], fontWeight: 700 }}>
            Used Scratch Cards
          </Typography>
          <CreditCardOff sx={{ color: red[700] }} />
          <Button sx={{ color: red[500] }} onClick={redirectTo}>
            view
          </Button>
          {loading ? (
            <Spinner animation="border" size="sm" style={{ color: red[500] }} />
          ) : null}
        </div>
        <div>
          <Avatar sx={{ bgcolor: red[700] }}>
            <Typography>{length}</Typography>
          </Avatar>
        </div>
      </div>
    </Card>
  );
}
