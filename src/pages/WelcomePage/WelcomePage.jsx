import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import img1 from "../../images/img1.jpg";
import { httpService } from "../../services/services";

export default function WelcomePage() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const handlePinInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const UseScratchCard = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const path = "useScratchCard";
      const res = await httpService.post(path, data);

      localStorage.setItem("candidate", JSON.stringify(res.data.candidate));
      setLoading(false);
      window.location.assign("result");
    } catch (error) {
      setLoading(false);
    }
  };
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
              <form onSubmit={UseScratchCard}>
                <div className="mt-2">
                  <TextField
                    type="text"
                    label="ABN"
                    helperText="Enter your A' Level Bank pin"
                    name="pin"
                    onChange={handlePinInput}
                    value={data.pin}
                  />
                </div>
                <div className="mt-2">
                  <TextField
                    type="text"
                    label="Registration Number"
                    helperText="Enter your registration Number"
                    name="regNumber"
                    value={data.regNumber}
                    onChange={handlePinInput}
                  />
                </div>
                <div className="mt-2">
                  <Button variant="contained" color="secondary" type="submit">
                    Check Result
                  </Button>
                  {loading ? (
                    <Spinner animation="border" size="sm" color="secondary" />
                  ) : (
                    ""
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
