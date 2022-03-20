import { Typography } from "@mui/material";
import React from "react";
import "./Footer.css";
export default function FooterBar() {
  return (
    <div className="footerBar p-5 mt-3">
      <div className="text-center">
        <Typography variant="h6" color="white">
          A LEVEL BANK
        </Typography>
        <Typography variant="body1" color="white">
          Fostering Academic Integrity
        </Typography>
      </div>
    </div>
  );
}
