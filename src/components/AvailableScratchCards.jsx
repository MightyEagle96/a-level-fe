import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Avatar, Typography, Button } from "@mui/material";
import { CreditCardOutlined } from "@mui/icons-material";
import { blue } from "@mui/material/colors";
import { httpService } from "../services/services";
import { Spinner } from "react-bootstrap";

export default function AvailableScratchCards() {
  const [length, setLength] = useState(0);
  const [loading, setLoading] = useState(false);
  const GetLength = async () => {
    setLoading(true);
    const res = await httpService.get("viewScratchCards?usedBy=null");
    setLength(res.data.length);
    setLoading(false);
  };

  useEffect(() => {
    GetLength();
  }, []);

  const redirectTo = () => {
    window.location.assign("/scratchCards?usedBy=null");
  };
  return (
    <Card>
      <div className="d-flex justify-content-between p-3">
        <div>
          <Typography sx={{ color: blue[700], fontWeight: 700 }}>
            Available Scratch Cards
          </Typography>
          <CreditCardOutlined sx={{ color: blue[700] }} />
          <Button sx={{ color: blue[500] }} onClick={redirectTo}>
            view
          </Button>
          {loading ? (
            <Spinner
              animation="border"
              size="sm"
              style={{ color: blue[500] }}
            />
          ) : null}
        </div>
        <div>
          <Avatar sx={{ bgcolor: blue[700] }}>
            <Typography>{length}</Typography>
          </Avatar>
        </div>
      </div>
    </Card>
  );
}
