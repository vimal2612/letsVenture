/* eslint-disable arrow-parens */
/* eslint-disable quotes */
/* eslint-disable react/button-has-type */
import { set } from "mongoose";
import React, { useState } from "react";
import {
  Button,
  Navbar,
  Nav,
  Card,
  Modal,
  Toast,
  Pagination,
} from "react-bootstrap";
import "./app.css";
import Data from "./data.json";
import Form from "./Form";

const App = () => {
  const [show, setShow] = useState(false);
  const [role, setRole] = useState(null);
  // const [validated, setValidated] = useState(false);
  const [data, setData] = useState(Data);
  const [success, setSuccess] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true);
    setRole(e.target.id);
  };

  const locationFilterHandler = (e) => {
    setData(
      Data.filter((i) => {
        if (e.target.value === "") {
          return i;
        } else if (
          i.details.location
            .toLowerCase()
            .includes(e.target.value.toLocaleLowerCase())
        ) {
          return i;
        }
      })
    );
  };

  const expFilterHandler = (e) => {
    setData(
      Data.filter((i) => {
        if (e.target.value === "") {
          return i;
        } else if (
          i.details.exp
            .toLowerCase()
            .includes(e.target.value.toLocaleLowerCase())
        ) {
          return i;
        }
      })
    );
  };

  return (
    <div className="container">
      {success && (
        <Toast onClose={() => setSuccess(false)}>
          <Toast.Header>
            <strong className="mr-auto">Toast</strong>
          </Toast.Header>
          <Toast.Body>Form submission was successful!</Toast.Body>
        </Toast>
      )}
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div className="link-container">
              <Nav.Link href="" className="link">
                Jobs
              </Nav.Link>
              <Nav.Link href="" className="link">
                Recruiters
              </Nav.Link>
            </div>
          </Nav>
          <Button
            variant="outline-success"
            onClick={() => console.log("button Clicked")}
          >
            Login
          </Button>
        </Navbar.Collapse>
      </Navbar>

      <div className="filter-container">
        <input
          placeholder="Filter by Experience"
          onChange={expFilterHandler}
        ></input>
        <input
          placeholder="Filter by Location"
          className="filter-location"
          onChange={locationFilterHandler}
        ></input>
      </div>

      {data.map((item, i) => (
        <Card border="primary" className="item" key={i}>
          <Card.Body>
            <div className="card-container">
              <div className="card-image"></div>
              <div className="card-desc">
                <Card.Title>{item.role}</Card.Title>
                <Card.Text>
                  {item.details.location} | {item.details.company} |
                  {item.details.exp}
                </Card.Text>
                <Card.Text>
                  <span style={{ fontWeight: "bold" }}>Skills : </span>
                  {item.skills}
                </Card.Text>
              </div>
              <Button
                variant="primary"
                className="card-button"
                onClick={handleShow}
                id={item.role}
              >
                Apply
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}

      <Modal show={show} onHide={handleClose}>
        {role && (
          <Modal.Header closeButton>
            <Modal.Title>{role}</Modal.Title>
          </Modal.Header>
        )}
        <Form setShow={setShow} setSuccess={setSuccess} />
      </Modal>
      <Navbar bg="light">
        <div className="footer-container">
          <span>Copyright 2021, LetsVenture </span>
          <span>
            <a href="">Terms</a> | <a href="">Contact Us</a>
          </span>
        </div>
      </Navbar>
    </div>
  );
};

export default App;
