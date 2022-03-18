import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import img1 from "../../images/img1.jpg";

export default function WelcomePage() {
  return (
    <div>
      <div className="mt-5">
        <div className="container shadow-lg rounded-3 p-3">
          <div className="row">
            <div className="col-md-6">
              <img
                src={img1}
                alt="img1"
                className="img-fluid shadow-lg rounded-3"
              />
            </div>
            <div className="col-md-6 border-start">
              <div className="mt-3">
                <Typography variant="h4" color="CaptionText" gutterBottom>
                  A' LEVEL VERIFICATION SYSTEM
                </Typography>
              </div>
              <div className="mt-2">
                <TextField
                  type="text"
                  label="ABN"
                  helperText="Enter your A Level Bank number on your scratch card"
                />
              </div>
              <div className="mt-2">
                <TextField
                  type="text"
                  label="Registration Number"
                  helperText="Enter your registration Number"
                />
              </div>
              <div className="mt-2">
                <Button variant="contained" color="secondary">
                  Check Result
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
