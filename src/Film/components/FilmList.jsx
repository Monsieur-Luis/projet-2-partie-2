import React from "react";
import FilmCard from "./FilmCard";
import Row from "react-bootstrap/Row";

const FilmList = ({  films}) => {
  return (
    <Row>
      {films.map((film,index) => (
        <FilmCard key={index} film={film}  index={index+1}/>
      ))}
    </Row>
  );
};

export default FilmList;
