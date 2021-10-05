import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Styles
import { Wrapper,Image,Span} from './Thumb.styles';

const Thumb = ({ image, movieId, clickable,timestamp }) => (
  <Wrapper>
    <Span id="timestamp" text={timestamp}><p id="pt">{timestamp}</p></Span>
      {clickable ? (
      <Link to={`/movie/${movieId}`}>
        <Image src={image} alt='movie-thumb' />
      </Link>
     ) : (
      <Image src={image} alt='movie-thumb' />
    )}
  </Wrapper>
);

Thumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool
};

export default Thumb;
