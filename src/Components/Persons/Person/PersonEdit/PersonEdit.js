import React from "react";
import "./PersonEdit.css";
import { Button, Card, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

const PersonEdit = props => {
  // const sameer = event => {
  //   props.person.name = event.target.value;
  //   console.log(props.person.name);
  // };

  return (
    <Card.Body>
      <Card.Title>Edit Person</Card.Title>
      <Card.Text>
        <input
          type="text"
          onChange={props.updateName}
          value={props.person.name}
        />
        <input
          type="number"
          value={props.person.age}
          onChange={props.updateAge}
        />
        <textarea
          value={props.person.title}
          onChange={props.updateTitle}
        ></textarea>
      </Card.Text>
      <ButtonGroup className="btn-group" aria-label="Basic example">
        <Button
          variant="light"
          className="text-info"
          onClick={props.clickCheck}
        >
          <FontAwesomeIcon icon={faCheck} />
        </Button>
        <Button
          variant="light"
          className="text-danger"
          onClick={props.clickCross}
        >
          <FontAwesomeIcon icon={faTimes} />
        </Button>
      </ButtonGroup>
    </Card.Body>
  );
};

export default PersonEdit;
