import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { green } from "@mui/material/colors";
import { loggedInUser } from "../services/services";
import { handleLogout } from "../services/services";

export default function NavigationBar() {
  return (
    <Navbar style={{ backgroundColor: green[900] }} variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">A' Level Bank</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {loggedInUser ? (
              <>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/institutions">Institutions</Nav.Link>
                <Nav.Link href="/subjects">Subjects</Nav.Link>
                <Nav.Link href="/examBodies">Examination Bodies</Nav.Link>
                <Nav.Link href="/viewCandidates">Candidates List</Nav.Link>
                <Nav.Link href="/createCandidate">Create Candidate</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/">Home</Nav.Link>
              </>
            )}
          </Nav>
          <Nav className="ms-auto">
            {loggedInUser ? (
              <Nav.Link
                onClick={() => {
                  handleLogout();
                }}
              >
                Sign out
              </Nav.Link>
            ) : (
              <Nav.Link href="/signIn">Sign In</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
