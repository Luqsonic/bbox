import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Styles
import { Wrapper, Image } from './Similar.styles';

const Similar = ({movieId, imageUrl }) => (
  <div id="Similar">
  <Link to={`/movie/${movieId}`}>
    <Image src={imageUrl} alt='movie-thumb' />
  </Link>
  </div>
);

Similar.propTypes = {
  imageUrl: PropTypes.string,
}

export default Similar;
