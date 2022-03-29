import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./WelcomePage.css";
import { green } from "@mui/material/colors";
import { Spinner } from "react-bootstrap";
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
      <div className="mt-3">
        <div className="container d-none d-lg-block">
          <div className="row mdMobileBanner" style={{ height: 400 }}>
            <div className="col-md-6"></div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <div className="mdBanner p-5">
                <div className=" mb-4">
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
                <form onSubmit={UseScratchCard}>
                  <div className="mt-2 d-flex justify-content-center">
                    <TextField
                      type="text"
                      label="PIN"
                      helperText="Enter your A Level Bank number on your scratch card"
                      name="pin"
                      value={data.pin}
                      onChange={handlePinInput}
                    />
                  </div>
                  <div className="mt-2 d-flex justify-content-center">
                    <TextField
                      type="text"
                      label="Reg. Number"
                      helperText="Enter your registration Number"
                      name="regNumber"
                      value={data.regNumber}
                      onChange={handlePinInput}
                    />
                  </div>
                  <div className="mt-2 d-flex justify-content-center">
                    <Button
                      variant="contained"
                      color="success"
                      className="me-2"
                      type="submit"
                    >
                      Check Result
                    </Button>
                    {loading ? (
                      <Spinner variant="success" animation="border" />
                    ) : null}
                  </div>
                </form>
                <div className="mt-3">
                  <span className="">
                    <Typography align="center" variant="body1">
                      Don't have a pin?{" "}
                      <Button style={{ color: green[500] }}>
                        purchase one now
                      </Button>
                    </Typography>
                  </span>
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
                <form onSubmit={UseScratchCard}>
                  <div className="mt-2 d-flex justify-content-center">
                    <TextField
                      type="text"
                      label="PIN"
                      helperText="Enter your A Level Bank number on your scratch card"
                      name="pin"
                      value={data.pin}
                      onChange={handlePinInput}
                    />
                  </div>
                  <div className="mt-2 d-flex justify-content-center">
                    <TextField
                      type="text"
                      label="Reg. Number"
                      helperText="Enter your registration Number"
                      name="regNumber"
                      value={data.regNumber}
                      onChange={handlePinInput}
                    />
                  </div>
                  <div className="mt-2 d-flex justify-content-center">
                    <Button
                      variant="contained"
                      color="success"
                      className="me-2"
                      type="submit"
                    >
                      Check Result
                    </Button>
                    {loading ? (
                      <Spinner variant="success" animation="border" />
                    ) : null}
                  </div>
                </form>
                <div className="mt-3">
                  <span className="">
                    <Typography align="center" variant="body1">
                      Don't have a pin?{" "}
                      <Button style={{ color: green[500] }}>
                        purchase one now
                      </Button>
                    </Typography>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Container className="d-sm-block d-md-none">
          <div className="mobileBanner p-3 shadow-lg rounded-3">
            <div className="mt-3 mb-4">
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
            <form onSubmit={UseScratchCard}>
              <div className="mb-4 d-flex d-flex justify-content-center">
                <TextField
                  type="text"
                  label="PIN"
                  helperText="Enter your A'Level Scratch Card PIN"
                  name="pin"
                  value={data.pin}
                  onChange={handlePinInput}
                />
              </div>
              <div className="mb-4 mt-2 d-flex d-flex justify-content-center">
                <TextField
                  type="text"
                  label="Reg. Number"
                  helperText="Enter your registration Number"
                  name="regNumber"
                  value={data.regNumber}
                  onChange={handlePinInput}
                />
              </div>
              <div className=" d-flex d-flex justify-content-center">
                <Button
                  variant="contained"
                  color="success"
                  className="me-2"
                  type="submit"
                >
                  Check Result
                </Button>
                {loading ? (
                  <Spinner variant="success" animation="border" />
                ) : null}
              </div>
            </form>
            <div className="mt-3">
              <span className="">
                <Typography align="center" variant="body2">
                  Don't have a pin?{" "}
                  <Button style={{ color: green[500] }}>
                    purchase one now
                  </Button>
                </Typography>
              </span>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
