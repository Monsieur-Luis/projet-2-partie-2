import React from "react";
import CharacterCard from "./CharacterCard";
import Row from "react-bootstrap/Row";

const CharacterList = ({  characters}) => {
  return (
    <Row>
      {characters.map((character,index) => (
        <CharacterCard key={index} character={character}  />
      ))}
    </Row>
  );
};

export default CharacterList;
