import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import  CharacterService from "../service/CharacterService";
//import PokeList from "./PokeList";
import StarShipList from "./StartShipList";

const  characterServiceService = new CharacterService();

const StarShip = ({urlList}) => {
  const [data, setData] = useState([]);

  const getAllData = async () => {
    setData(
      await Promise.all(
        urlList.map((url) =>
          characterServiceService.getCharacterWithReturnedUrl(url)
        )
      )
    );
  };

  useEffect(() => {
    getAllData();
  }, [ urlList]);


  return (
    <>
    <h4>StarShip</h4>
    <StarShipList starships={data}/>
    </>
  );
};

export default StarShip;

