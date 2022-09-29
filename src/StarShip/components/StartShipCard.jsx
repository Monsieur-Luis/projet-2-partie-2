import React from "react";
import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const StartShipCard = ({ starship }) => {
  
  return (
    <Col className="my-2 col-6">
      <Card className='col-12'>
        <BCard.Header>
        <BCard.Title>Title {starship.name}</BCard.Title>
        <BCard.Subtitle>{starship.model}</BCard.Subtitle>
        </BCard.Header>
        <BCard.Body>
          <BCard.Subtitle>Made By : {starship.manufacturer}</BCard.Subtitle>
        </BCard.Body>
      
      </Card>
    </Col>
  );
};

export default StartShipCard;
