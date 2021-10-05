import React from 'react';
import { useParams } from 'react-router-dom';

// Config
import { IMAGE_BASE_URL,BACKDROP_SIZE, POSTER_SIZE } from '../config';
// Components
import ActorMovies from './ActorMovies/SimilarGrid';
import ActorInfo from './ActorInfo';
import ActorCrumb from './ActorCrumb';
import Spinner from './Spinner';
import Similar from './ActorMovies';
// Hook
import { useActorInfoFetch } from '../hooks/useActorInfoFetch';
// Image
import NoImage from '../images/no_image.jpg';



const ActorPage = () => {
  const { actorId } = useParams();
  const { state: actor, loading, error } = useActorInfoFetch(actorId);

  
                
  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <ActorCrumb actorName={actor.name} />
      <ActorInfo actor={actor}/>
      
      <ActorMovies header='Known for'>
          {actor.movies.slice(0,12).map(movie => (              
                  <Similar
                  movieId ={movie.id}
                  imageUrl={
                  movie.poster_path
                    ?`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.poster_path}`
 
                    : NoImage
                }
              />
              ))}
      </ActorMovies> 
      
      
      
      
    </>
  );
};

export default ActorPage;

