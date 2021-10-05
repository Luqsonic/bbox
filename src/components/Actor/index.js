import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Styles
import { Wrapper, Image } from './Actor.styles';

const Actor = ({ name, id, character, imageUrl }) => (
  <Wrapper>
  <Link to={`/actor/${id}`}>
    <Image src={imageUrl} alt='actor-thumb'/>
  </Link>
    <h3 style={{textDecoration:"none"}}>{name}</h3>
    <p>{character}</p>
  </Wrapper>
);

Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageUrl: PropTypes.string,
}

export default Actor;
