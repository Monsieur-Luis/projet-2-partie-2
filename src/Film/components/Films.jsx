import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import FilmService from "../service/FilmService";
//import PokeList from "./PokeList";
import FilmList from "./FilmList";

const filmService = new FilmService();

const Films = () => {
  const [data, setData] = useState([]);

  const getFilms = async () => {
    //fetching data of first 6 films
    const films = await filmService.getFilm();
    //console.log("films=>",films)
    setData(films);
  };

  useEffect(() => {
    getFilms();
  }, []);


  return (
    <>
    <h1>Film</h1>
    <FilmList films={data}/>
    </>
  );
};

export default Films;

