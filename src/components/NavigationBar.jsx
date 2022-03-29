import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import { loggedInUser } from "../services/services";
import { handleLogout } from "../services/services";
export default function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">A' Level Bank</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {loggedInUser ? (
              <>
                <Nav.Link href="/dashboard">Home</Nav.Link>
                <Nav.Link href="/institutions">Institutions</Nav.Link>
                <Nav.Link href="/subjects">Subjects</Nav.Link>
                <NavDropdown title="Actions" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/examBodies">
                    Examination Bodies
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/viewCandidates">
                    Candidates List
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/createCandidate">
                    Create Candidate
                  </NavDropdown.Item>
                </NavDropdown>
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
