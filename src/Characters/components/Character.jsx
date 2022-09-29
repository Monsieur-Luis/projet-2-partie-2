import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import  CharacterService from "../service/CharacterService";
//import PokeList from "./PokeList";
import CharacterList from "./CharacterList";

const  characterServiceService = new CharacterService();

const Characters = ({urlList}) => {
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
  }, [urlList]);

  console.log('data',data)

  return (
    <>
    <h3>Characters</h3>
    <CharacterList characters={data}/>
    </>
  );
};

export default Characters;

