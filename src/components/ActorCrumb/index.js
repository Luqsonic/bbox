import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Styles
import { Wrapper,Mid, Content,Span } from './BreadCrumb.styles';

const ActorCrumb = ({ actorName }) => (
  <Wrapper>
    <Content>
      <Link to='/'>
        <span>Home</span>
      </Link>
      <Mid>/ Actor</Mid>
      <span>》</span>
      <Span>{actorName}</Span>
    </Content>
  </Wrapper>
);

ActorCrumb.propTypes = {
  actorName: PropTypes.string
};

export default ActorCrumb;
