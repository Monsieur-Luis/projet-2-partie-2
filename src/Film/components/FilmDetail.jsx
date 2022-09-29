import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import FilmService from '../service/FilmService'
import Characters from '../../Characters/components/Character';
import StarShip from '../../StarShip/components/StarShip';

const fs=new FilmService();
export default function FilmDetail() {
    const {id}=useParams()
    const [data, setData] = useState(null);
   
    
    const getFilmDetail = async () => {
      const filmData = await fs.getFilmWithReturnedUrl('https://swapi.dev/api/films/'+id)
      setData(filmData)
    };

    useEffect(()=>{
        getFilmDetail();
    },[id])

if(data==null){
return<></>
}



  return (
<>
    <h1 className='text-center'>{data.title}</h1><br/><br/>
    <p  className='text-center'>{data.opening_crawl}</p>
    <Characters urlList={data.characters || []} />
    <StarShip  urlList={data.starships || []} />
    </>
  )
}
