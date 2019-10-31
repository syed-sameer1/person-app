import React from "react";
import "./Person.css";
import PersonInfo from "./PersonInfo/PersonInfo";
import PersonEdit from "./PersonEdit/PersonEdit";
import { Card } from "react-bootstrap";

const Person = props => {
  return (
    <div className="Person">
      <Card style={{ width: "18rem" }}>
        {props.person.isEdit ? (
          <PersonEdit
            person={props.person}
            clickCross={props.clickCross}
            clickCheck={props.clickCheck}
            updateName={props.updateName}
            updateAge={props.updateAge}
            updateTitle={props.updateTitle}
          />
        ) : (
          <PersonInfo
            person={props.person}
            clickEdit={props.clickEdit}
            clickDelete={props.clickDelete}
          />
        )}
      </Card>
    </div>
  );
};

export default Person;
