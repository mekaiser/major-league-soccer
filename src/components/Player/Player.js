import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Player.css";

const Player = (props) => {
  const { image, name, salary } = props.player;
  return (
    <div class="player-single-style">
      <Card 
        class="shadow rounded" 
        style={{ width: "100%", textAlign: "center", border: "none" }}
      >
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>
            <h3>{name}</h3>
          </Card.Title>
          <Card.Text>
            Salary: ${salary}
          </Card.Text>
          <Button onClick={() => props.selectionHandler(props.player)} variant="success" style={{margin: "0.5em"}}>Select</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Player;
