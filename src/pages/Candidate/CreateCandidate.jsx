import React from "react";
import { Container } from "react-bootstrap";
import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Paper,
  Typography,
  Box,
  Button,
  TextField,
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";

export default function CreateCandidate() {
  return (
    <div>
      <Container>
        <div className="border border-secondary p-3 rounded-3 mt-3">
          <Typography variant="h5">Create New Candidate</Typography>
          <div className="col-md-6"></div>
        </div>
      </Container>
    </div>
  );
}
