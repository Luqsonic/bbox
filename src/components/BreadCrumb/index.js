import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Styles
import { Wrapper, Content,Span } from './BreadCrumb.styles';

const BreadCrumb = ({ movieTitle }) => {

var movie_title = "Movie";
if(movieTitle.length>50){

movie_title = movieTitle.slice(0,50).concat("...");
}
else{
movie_title = movieTitle;
}

  return (
  <Wrapper>
    <Content>
      <Link to='/'>
        <span>Home</span>
      </Link>
      <span>》</span>
      <Span>{movie_title}</Span>
    </Content>
  </Wrapper>
);
}
BreadCrumb.propTypes = {
  movieTitle: PropTypes.string
};

export default BreadCrumb;
