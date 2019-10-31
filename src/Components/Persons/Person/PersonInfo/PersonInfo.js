import React from "react";
import "./PersonInfo.css";
import { Button, Card, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const PersonInfo = props => {
  return (
    <Card.Body>
      <Card.Title>
        {props.person.name}, {props.person.age}
      </Card.Title>
      <Card.Text>{props.person.title}</Card.Text>
      <ButtonGroup className="btn-group" aria-label="Basic example">
        <Button variant="light" className="text-info" onClick={props.clickEdit}>
          <FontAwesomeIcon icon={faEdit} />
        </Button>
        <Button
          variant="light"
          className="text-danger"
          onClick={props.clickDelete}
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </ButtonGroup>
    </Card.Body>
  );
};

export default PersonInfo;
