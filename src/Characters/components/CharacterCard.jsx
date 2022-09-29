import React from "react";
import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const CharacterCard = ({ character }) => {
  
  return (
    <Col className="my-2 col-6">
      <Card className='col-12'>
        <BCard.Header>
        <BCard.Title>Title {character.name}</BCard.Title>
        <BCard.Subtitle>{character.birth_year}</BCard.Subtitle>
        </BCard.Header>
      
      
      </Card>
    </Col>
  );
};

export default CharacterCard;
