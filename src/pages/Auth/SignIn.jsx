import {
  Email,
  Login,
  VerifiedUser,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { httpService } from "../../services/services";
import { green, pink } from "@mui/material/colors";

export default function SignIn() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState({});

  const handleShow = () => {
    setShow(!show);
  };
  const handleChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };
  const SignIn = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const path = "login";
      const res = await httpService.post(path, account);
      localStorage.setItem("token", res.data.accessToken);
      localStorage.setItem("userData", JSON.stringify(res.data.user));
      window.location.assign("/");
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="mt-3">
      <Container className="d-none d-md-block">
        <div className="d-flex justify-content-center shadow-lg p-5 rounded-3">
          <div>
            <div className="d-flex justify-content-center">
              <Avatar sx={{ height: 100, width: 100, bgcolor: green[500] }}>
                <VerifiedUser sx={{ height: 60, width: 60 }} />
              </Avatar>
            </div>
            <div className="mb-4 mt-3">
              <Typography variant="h5" color={green[500]} align="center">
                LOGIN INTO YOUR STAFF ACCOUNT
              </Typography>
            </div>
            <form onSubmit={SignIn}>
              <div className="mt-3 d-flex justify-content-center">
                <FormControl>
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <OutlinedInput
                    endAdornment={
                      <InputAdornment position="end">
                        <Email color="success" />
                      </InputAdornment>
                    }
                    label="Email"
                    name="email"
                    onChange={handleChange}
                    value={account.email}
                  ></OutlinedInput>
                </FormControl>
              </div>
              <div className="mt-3 d-flex justify-content-center">
                <FormControl>
                  <InputLabel htmlFor="email">Password</InputLabel>
                  <OutlinedInput
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton onClick={handleShow}>
                          {!show ? (
                            <Visibility color="success" />
                          ) : (
                            <VisibilityOff color="error" />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                    name="password"
                    onChange={handleChange}
                    value={account.password}
                    type={show ? "text" : "password"}
                  ></OutlinedInput>
                </FormControl>
              </div>
              <div className="mt-3 d-flex justify-content-center">
                <Button
                  variant="contained"
                  color="success"
                  endIcon={<Login />}
                  className="me-2"
                  type="submit"
                >
                  Login{" "}
                </Button>
                {loading ? (
                  <Spinner
                    animation="border"
                    variant="success"
                    className="ms-2"
                  />
                ) : null}
              </div>
            </form>
            <div className="mt-3 text-center">
              <Button sx={{ color: pink[500] }}>Forgot Password?</Button>
            </div>
          </div>
        </div>
      </Container>
      <Container className="d-sm-block d-md-none">
        <div className="d-flex justify-content-center shadow-lg p-4 rounded-3">
          <div>
            <div className="d-flex justify-content-center">
              <Avatar sx={{ height: 80, width: 80, bgcolor: green[500] }}>
                <VerifiedUser sx={{ height: 40, width: 40 }} />
              </Avatar>
            </div>
            <div className="mb-4 mt-3">
              <Typography variant="h6" color={green[500]} align="center">
                LOGIN INTO YOUR STAFF ACCOUNT
              </Typography>
            </div>
            <form onSubmit={SignIn}>
              <div className="mt-3 d-flex justify-content-center">
                <FormControl>
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <OutlinedInput
                    endAdornment={
                      <InputAdornment position="end">
                        <Email color="success" />
                      </InputAdornment>
                    }
                    label="Email"
                    name="email"
                    onChange={handleChange}
                    value={account.email}
                  ></OutlinedInput>
                </FormControl>
              </div>
              <div className="mt-3 d-flex justify-content-center">
                <FormControl>
                  <InputLabel htmlFor="email">Password</InputLabel>
                  <OutlinedInput
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton onClick={handleShow}>
                          {!show ? (
                            <Visibility color="success" />
                          ) : (
                            <VisibilityOff color="error" />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                    name="password"
                    onChange={handleChange}
                    value={account.password}
                    type={show ? "text" : "password"}
                  ></OutlinedInput>
                </FormControl>
              </div>
              <div className="mt-3 d-flex justify-content-center">
                <Button
                  variant="contained"
                  color="success"
                  type="submit"
                  endIcon={<Login />}
                  className="me-2"
                >
                  Login{" "}
                </Button>
                {loading ? (
                  <Spinner
                    animation="border"
                    variant="success"
                    className="ms-2"
                  />
                ) : null}
              </div>
            </form>
            <div className="mt-3 text-center">
              <Button sx={{ color: pink[500] }}>Forgot Password?</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
