import { Typography } from "@mui/material";
import React from "react";
import { Container, Row } from "react-bootstrap";
import ExaminationBodies from "../../components/ExaminationBodies";
import RegisteredInstitutions from "../../components/RegisteredInstitutions";

import TotalScratchCards from "../../components/TotalScratchCards";
import UsedScratchCards from "../../components/UsedScratchCards";
import AvailableScratchCards from "../../components/AvailableScratchCards";

export default function DashboardPage() {
  return (
    <div>
      <Container className="d-none d-md-block">
        <div></div>
        <hr />
        <div className="mt-3">
          <Typography variant="h6" color="GrayText">
            INSTITUTIONS AND EXAMINATION BODIES
          </Typography>
          <Row className="mt-2">
            <div className="col-md-6">
              <RegisteredInstitutions />
            </div>
            <div className="col-md-6">
              <ExaminationBodies />
            </div>
          </Row>
        </div>
        <hr />
        {/*SCRATCH CARDS */}
        <div className="  mt-3">
          <Typography variant="h6" color="GrayText">
            SCRATCH CARDS
          </Typography>
          <div className="row mt-2">
            <div className="col-md-4">
              <TotalScratchCards />
            </div>
            <div className="col-md-4">
              <UsedScratchCards />
            </div>
            <div className="col-md-4">
              <AvailableScratchCards />
            </div>
          </div>
        </div>
      </Container>
      <Container className="d-sm-block d-md-none   p-3 mt-3">
        <div className="border-bottom">
          <Typography variant="h6" color="GrayText">
            INSTITUTIONS AND EXAMINATION BODIES
          </Typography>
          <div className="mb-3 mt-2">
            <RegisteredInstitutions />
          </div>
          <div className="mb-3">
            <ExaminationBodies />
          </div>
        </div>
        <div className="mt-3">
          <Typography variant="h6" color="GrayText">
            SCRATCH CARDS
          </Typography>
          <div className="mt-2 mb-3">
            <TotalScratchCards />
          </div>
          <div className="mb-3">
            <UsedScratchCards />
          </div>
          <div className="">
            <AvailableScratchCards />
          </div>
        </div>
      </Container>
    </div>
  );
}
