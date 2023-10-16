import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AiFillGithub } from "react-icons/ai";

function WorkCards(props) {
  return (
    <Card className="work-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {"\n"}
        {"\n"}
        {props.isBlog && props.driveLink && (
          <Button
            variant="primary"
            href={props.driveLink}
            target="_blank"
            style={{marginLeft: "10px"}}
          >
            Have a look
          </Button>
        )}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.ghLink && (
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <AiFillGithub /> &nbsp;
            {"Repo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default WorkCards;
