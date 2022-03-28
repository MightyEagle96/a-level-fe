import { Avatar, Typography } from "@mui/material";
import React, { useState } from "react";
import { Container, Row, Card } from "react-bootstrap";

import { result } from "../../services/services";

export default function ResultsPage() {
  const [data] = useState(result);

  return (
    <div>
      <Container>
        <div className="border border-dark p-3 rounded-3 mt-3">
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
        </div>
      </Container>
    </div>
  );
}
