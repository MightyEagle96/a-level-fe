import { Email, Login, Visibility, VisibilityOff } from "@mui/icons-material";
import {
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
  const SignIn = async () => {
    try {
      setLoading(true);
      const path = "login";
      const res = await httpService.post(path, account);

      localStorage.setItem("token", res.data.accessToken);
      localStorage.setItem("userData", JSON.stringify(res.data.user));
      window.location.assign("/dashboard");
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="mt-3">
      <Container>
        <div className="border border-dark p-3 rounded-3">
          <div className="row p-4">
            <div className="col-md-6"></div>
            <div className="col-md-6 border-start">
              <div>
                <Typography variant="h5">
                  LOGIN INTO YOUR STAFF ACCOUNT
                </Typography>
                <FormControl className="mt-3">
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <OutlinedInput
                    endAdornment={
                      <InputAdornment position="end">
                        <Email color="primary" />
                      </InputAdornment>
                    }
                    label="Email"
                    name="email"
                    onChange={handleChange}
                    value={account.email}
                  ></OutlinedInput>
                </FormControl>
              </div>
              <div className="mt-3">
                <FormControl>
                  <InputLabel htmlFor="email">Password</InputLabel>
                  <OutlinedInput
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton onClick={handleShow}>
                          {!show ? (
                            <Visibility color="primary" />
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
              <div className="mt-3">
                <Button
                  variant="contained"
                  onClick={SignIn}
                  endIcon={<Login />}
                >
                  Login{" "}
                </Button>
                {loading ? (
                  <Spinner
                    animation="border"
                    variant="primary"
                    className="ms-2"
                    size="sm"
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
