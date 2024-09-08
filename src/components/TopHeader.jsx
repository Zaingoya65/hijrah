import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";




function TopHeader() {
  return (
    <>
      <Navbar bg="dark" variant="dark nav-Bar">
        <Navbar.Collapse className="justify-content-end navCollapse">
          <Nav className="custom-nav-links">
            <Nav.Link as={Link} to="/faculty&staff" className="nav-link">
            Faculty & Staff
          </Nav.Link>
            <Nav.Link as={Link} to="/maps&direction">
            Maps & Direction
            </Nav.Link>

             <Nav.Link as={Link} to="/cabinet">Alumni Cabinet</Nav.Link>
             </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default TopHeader;
