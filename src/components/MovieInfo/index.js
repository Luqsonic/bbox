import React from 'react';
import PropTypes from 'prop-types';
// Components
import Thumb from './Thumb';
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
// Image
import NoImage from '../../images/no_image.jpg';
// Styles
import { Wrapper, Content,Story, Text} from './MovieInfo.styles';

const MovieInfo = ({ movie }) =>{

var g = [];
var genre = movie.genres;
genre.forEach(getName);

function getName(item){
  g.push(item.name);
}

var mainGenres = g.sliceGenres = g.slice(0,2);
var strg = mainGenres.toString();
var genres = strg.replace(/,/g,", ");

var movieTitle = "Movie";
if(movie.title.length>32){
movieTitle = movie.title.slice(0,32).concat(" ...");
}
else{
movieTitle = movie.title;
}

function OverviewCut(text){
  if(text.length>180){
    return(text.slice(0,180).concat('...'));
}
else if(text.length<181){
  return(text);
}
}


  return (
  <Wrapper backdrop={movie.backdrop_path}>
    <Content>
      <Thumb
        image={
          movie.poster_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
            : NoImage
        }
        clickable={false}
      />
      <Text>
        <h1>{movieTitle}</h1>
        
        <div className='rating-directors'>
          <div className='rating'>
            <h3 id='h3_Rating'>RATING</h3>
            <div className='score'>{movie.vote_average}</div>
          </div>
          <div className='director'>
            <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
            {movie.directors.map(director => (
              <p key={director.credit_id}>{director.name}</p>
            ))}
          </div>
        </div>
      </Text>
      <Story overviewLength={movie.overview.length}>
        <p id='date'>Release Date: {movie.release_date}</p>
        <p id='genres'>Genre: {genres} </p>
        <h3>OVERVIEW</h3>
        <p id='overview'>{OverviewCut(movie.overview)}</p>
      </Story>
    </Content>
  </Wrapper>
);

}

MovieInfo.propTypes = {
  movie: PropTypes.object
}


export default MovieInfo;
