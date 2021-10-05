import {react,useEffect} from 'react'
import { v4 as uuidv4 } from "uuid";

//Configs
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../../config';

// Hook
import { useHomeFetch } from '../../hooks/useHomeFetch';
// Image
import NoImage from '../../images/no_image.jpg';


var popular;

const DataSlider = () => {
 const {
  state,
   loading,
    error,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore
  } = useHomeFetch();

 useEffect(() => {

   popular = [
    state.results[0],
    state.results[1],
    state.results[2],
    state.results[3],
    state.results[4],
    state.results[5],
    state.results[6],
    state.results[7]];

});

return(
[
  {
    id: state.results[0],
    title: popular[0].title,
    overview:popular[0].overview,
    src:`${IMAGE_BASE_URL}${BACKDROP_SIZE}${popular[0].backdrop_path}`
     
     
  }
  
/* 
  {
   // id: popular[1].movie_id,
    title: popular[1].title,
    overview:popular[1].overview,
    src:`${IMAGE_BASE_URL}${BACKDROP_SIZE}${popular[1].backdrop_path}`
    },
  {
  //  id: popular[2].movie_id,
    title: popular[2].title,
    overview:popular[2].overview,
    src:`${IMAGE_BASE_URL}${BACKDROP_SIZE}${popular[2].backdrop_path}`
  },
  {
  //  id: popular[3].movie_id,
    title: popular[3].title,
    overview:popular[3].overview,
    src:`${IMAGE_BASE_URL}${BACKDROP_SIZE}${popular[3].backdrop_path}`
  },
  {
  //  id: popular[4].movie_id,
    title: popular[4].title,
    overview:popular[4].overview,
    src:`${IMAGE_BASE_URL}${BACKDROP_SIZE}${popular[4].backdrop_path}`
   },
  {
  //  id: popular[5].movie_id,
    title: popular[5].title,
    overview:popular[5].overview,
    src:`${IMAGE_BASE_URL}${BACKDROP_SIZE}${popular[5].backdrop_path}`
   },
  {
   // id: popular[6].movie_id,
    title: popular[6].title,
    overview:popular[6].overview,
    src:`${IMAGE_BASE_URL}${BACKDROP_SIZE}${popular[6].backdrop_path}`
   },
  {
  //  id: popular[7].movie_id,
    title: popular[7].title,
    overview:popular[7].overview,
    src:`${IMAGE_BASE_URL}${BACKDROP_SIZE}${popular[7].backdrop_path}`
   },
*/  
]

)
}

export default DataSlider;
