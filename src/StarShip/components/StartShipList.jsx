import React from "react";
import StartShipCard from "./StartShipCard";
import Row from "react-bootstrap/Row";

const StartShipList = ({ starships}) => {
  return (
    <Row>
      {starships.map((starship,index) => (
        <StartShipCard key={index} starship={starship}  />
      ))}
    </Row>
  );
};

export default StartShipList;
