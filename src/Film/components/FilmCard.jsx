import React from "react";
import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import {Link} from 'react-router-dom';
const DEFAULT_IMAGE_POSITION = "top";

const FilmCard = ({ film,index }) => {
 
  return (
    <Col className="my-2 col-6">
      <Link to={'/film/'+index}>
      <Card className='col-6'>
        <BCard.Header>
        <BCard.Title>Title {film.title}</BCard.Title>
        </BCard.Header>
      
        <BCard.Body>
          <BCard.Subtitle>Release on {film.release_date}</BCard.Subtitle>
         
        </BCard.Body>
      </Card>
      </Link>
    </Col>
  );
};

export default FilmCard;
