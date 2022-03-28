import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Container } from "react-bootstrap";

import "./WelcomePage.css";
import { green } from "@mui/material/colors";

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
        <div className="container d-none d-lg-block">
          <div className="row mdMobileBanner" style={{ height: 400 }}>
            <div className="col-md-6"></div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <div className="mdBanner p-5">
                <div className="">
                  <Typography
                    variant="h5"
                    color={green[500]}
                    letterSpacing={3}
                    gutterBottom
                    align="center"
                  >
                    A' LEVEL VERIFICATION SYSTEM
                  </Typography>
                </div>
                <div className="mt-2 d-flex justify-content-center">
                  <TextField
                    type="text"
                    label="ABN"
                    helperText="Enter your A Level Bank number on your scratch card"
                  />
                </div>
                <div className="mt-2 d-flex justify-content-center">
                  <TextField
                    type="text"
                    label="Registration Number"
                    helperText="Enter your registration Number"
                  />
                </div>
                <div className="mt-2 d-flex justify-content-center">
                  <Button variant="contained" color="success">
                    Check Result
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-none d-md-block d-lg-none">
          <div className="row mdMobileBanner ">
            <div className="col-md-6"></div>
            <div className="col-md-6 mdBanner p-4">
              <div>
                <div className="mt-3">
                  <Typography
                    variant="h5"
                    color={green[500]}
                    letterSpacing={3}
                    gutterBottom
                    align="center"
                  >
                    A' LEVEL VERIFICATION SYSTEM
                  </Typography>
                </div>
                <div className="mt-2 d-flex justify-content-center">
                  <TextField
                    type="text"
                    label="ABN"
                    helperText="Enter your A Level Bank number on your scratch card"
                  />
                </div>
                <div className="mt-2 d-flex justify-content-center">
                  <TextField
                    type="text"
                    label="Registration Number"
                    helperText="Enter your registration Number"
                  />
                </div>
                <div className="mt-2 d-flex justify-content-center">
                  <Button variant="contained" color="success">
                    Check Result
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Container className="d-sm-block d-md-none">
          <div className="mobileBanner p-5 shadow-lg rounded-3">
            <div className="mt-3">
              <Typography
                variant="h5"
                color={green[500]}
                letterSpacing={3}
                align="center"
                gutterBottom
              >
                A' LEVEL VERIFICATION SYSTEM
              </Typography>
            </div>
            <div className="mt-2 d-flex d-flex justify-content-center">
              <TextField
                type="text"
                label="ABN"
                helperText="Enter your A'Level Scratch Card PIN"
              />
            </div>
            <div className="mt-2 d-flex d-flex justify-content-center">
              <TextField
                type="text"
                label="Registration Number"
                helperText="Enter your registration Number"
              />
            </div>
            <div className="mt-4 d-flex d-flex justify-content-center">
              <Button variant="contained" color="success">
                Check Result
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
