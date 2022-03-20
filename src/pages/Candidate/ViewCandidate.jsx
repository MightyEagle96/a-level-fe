import { Typography, Avatar } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { stringAvatar } from "../../utils/util";
import { httpService } from "../../services/services";

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

  const GetCandidate = async () => {
    const path = `viewCandidate/${id}`;
    const res = await httpService.get(path);
    setCandidate(res.data.candidate);
  };

  useEffect(() => {
    GetCandidate();
  }, []);
  return (
    <div>
      <Container>
        <div className="mt-3 border border-dark p-3 rounded-3">
          <div className="d-flex justify-content-between">
            <div>
              <Typography variant="h5">{`${candidate.firstName} ${candidate.lastName}`}</Typography>
            </div>
            <div>
              {candidate.imageUrl ? (
                <Avatar src={candidate.imageUrl} alt={candidate._id} />
              ) : (
                <Avatar
                  {...stringAvatar(
                    `${candidate.firstName}-${candidate.lastName}`
                  )}
                />
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
