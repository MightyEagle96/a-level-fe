import { Logout } from "@mui/icons-material";
import { Avatar, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { Container, Row, Card } from "react-bootstrap";
import { pink } from "@mui/material/colors";
import { result } from "../../services/services";

export default function ResultsPage() {
  const [data] = useState(result);
  const redirectBack = () => {
    localStorage.removeItem("candidate");
    window.location.assign("/");
  };
  return (
    <div>
      <Container>
        <div className="border  p-3 rounded-3 mt-3">
          <div className="d-flex justify-content-center mb-3">
            <Avatar
              src={data.imageUrl}
              sx={{ width: 100, height: 100 }}
              variant="rounded"
            />
          </div>
          <Typography className="text-center mb-2">{`${data.firstName} ${data.lastName}`}</Typography>
          <Typography className="text-center mb-2">{`${data.regNumber}`}</Typography>
          <Typography className="text-center mb-2">{`${data.institution.name}`}</Typography>
          <Typography className="text-center mb-4">{`${data.examinationBody.name}`}</Typography>

          <Row>
            <div className="col-md-4 mb-2">
              <Card>
                <Card.Body>
                  <Card.Title>{data.subject1.subject.title}</Card.Title>
                  <Card.Text>
                    <Typography>{data.subject1.grade}</Typography>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 mb-2">
              <Card>
                <Card.Body>
                  <Card.Title>{data.subject2.subject.title}</Card.Title>
                  <Card.Text>
                    <Typography>{data.subject2.grade}</Typography>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 mb-2">
              <Card>
                <Card.Body>
                  <Card.Title>{data.subject3.subject.title}</Card.Title>
                  <Card.Text>
                    <Typography>{data.subject3.grade}</Typography>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Row>
          <div className="mt-3 text-center">
            <Button
              sx={{ color: pink[500] }}
              onClick={redirectBack}
              endIcon={<Logout />}
            >
              Go Back
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
