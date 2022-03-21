import { Typography, Avatar, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { stringAvatar } from "../../utils/util";
import { httpService } from "../../services/services";
import { PhotoCamera, Upload, Delete } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const Input = styled("input")({
  display: "none",
});

export default function ViewCandidate() {
  const { id } = useParams();
  const [loading, setLoading] = useState([]);
  const defaultData = {
    firstName: "",
    lastName: "",
    institution: "",
    examinationBody: "",
    subject1: { subject: "", grade: "" },
    subject2: { subject: "", grade: "" },
    subject3: { subject: "", grade: "" },
  };

  const [candidate, setCandidate] = useState(defaultData);
  const [selectedFile, setSelectedFile] = useState(null);

  const GetCandidate = async () => {
    const path = `viewCandidate/${id}`;
    const res = await httpService.get(path);
    setCandidate(res.data.candidate);
  };
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    // setIsSelected(true);
  };
  async function UploadProfilePhoto() {
    const path = `uploadPhoto/${id}`;
    const formData = new FormData();
    formData.append("organisationPhoto", selectedFile, selectedFile.name);

    const res = await httpService.post(path, formData);
    if (res) {
      window.location.reload();
    }
  }

  const removePicture = () => {
    setSelectedFile(null);
  };
  useEffect(() => {
    GetCandidate();
  }, []);
  return (
    <div>
      <Container>
        <div className="mt-3 border border-dark p-3 rounded-3">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <Typography variant="h5">{`${candidate.firstName} ${candidate.lastName}`}</Typography>
            </div>
            <div>
              {candidate.imageUrl ? (
                <Avatar
                  src={candidate.imageUrl}
                  alt={candidate._id}
                  sx={{ height: 100, width: 100 }}
                />
              ) : (
                <Avatar
                  {...stringAvatar(
                    `${candidate.firstName}-${candidate.lastName}`
                  )}
                  sx={{ height: 100, width: 100 }}
                />
              )}
              <label htmlFor="icon-button-file">
                <Input
                  accept="image/*"
                  id="icon-button-file"
                  type="file"
                  onChange={changeHandler}
                />
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
              </label>
              {selectedFile ? (
                <div className="mt-2">
                  <div>
                    <img
                      src={URL.createObjectURL(selectedFile)}
                      alt="company logo"
                      width={200}
                      height={200}
                    />
                    <div>
                      <IconButton
                        variant="contained"
                        color="error"
                        onClick={removePicture}
                      >
                        <Delete />
                      </IconButton>

                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                        onClick={UploadProfilePhoto}
                      >
                        <Upload />
                      </IconButton>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <Typography>{`Institution: ${candidate.institution.name}`}</Typography>
              <Typography>{`Exam Body: ${candidate.examinationBody.name}`}</Typography>
              <Typography>{`Registration Number: ${candidate.regNumber}`}</Typography>
            </div>
            <div className="col-md-6">
              <Table bordered>
                <thead>
                  <tr>
                    <th>{candidate.subject1.subject.title}</th>
                    <th>{candidate.subject2.subject.title}</th>
                    <th>{candidate.subject3.subject.title}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{candidate.subject1.grade}</td>
                    <td>{candidate.subject2.grade}</td>
                    <td>{candidate.subject3.grade}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
