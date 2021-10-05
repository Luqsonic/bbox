import React from 'react';
import { useParams } from 'react-router-dom';
// Config
import { IMAGE_BASE_URL,BACKDROP_SIZE, POSTER_SIZE } from '../config';
// Components
import BreadCrumb from './BreadCrumb';
import ActorsGrid from './Actor/ActorsGrid';
import SimilarGrid from './SimilarMovies/SimilarGrid';
import Spinner from './Spinner';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor';
import Similar from './SimilarMovies';
import MediaButtons from './MediaButtons';
import Popup from './PopUp';
import API from '../API';
// Hook
import { useMovieFetch } from '../hooks/useMovieFetch';
import { useMediaLinksFetch } from '../hooks/useMediaLinksFetch';

// Image
import NoImage from '../images/no_image.jpg';

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);

  //const { state: media, loading, error } = useMediaLinksFetch(movieId);
       


/*
  function filterNew(item){
    year = parseInt(item.release_date.slice(0,4))
  }
*/ 
                
  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <BreadCrumb movieTitle={movie.title} />
      <Popup />
      <MovieInfo movie={movie} />
      <MediaButtons 
          source={movie.media}
          movieId={movieId}
          titleLength = {movie.title.length}
       />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <ActorsGrid header='Main Actors'>
      {movie.actors.slice(0,12).map(actor => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            id={actor.id}
            character={actor.character}
            imageUrl={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
          />   
        ))}
      </ActorsGrid>
      
        <SimilarGrid header='Similar Movies'>
          {movie.similar.slice(0,12).map(movie => (              
                  <Similar
                  movieId ={movie.id}
                  imageUrl={
                  movie.backdrop_path
                    ?`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.poster_path}`
 
                    : NoImage
                }
              />
              ))}
      </SimilarGrid> 
      
    </>
  );
};

export default Movie;
