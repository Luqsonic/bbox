import React from 'react';
import { Link } from 'react-router-dom';

import RMDBLogo from '../../images/bbox_logo-min.png';
import TMDBLogo from '../../images/tg_join.png';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

const Header = () => (
  <Wrapper>
    <Content>
     <Link to='/'>
        <LogoImg src="https://eljambo.files.wordpress.com/2021/10/bbox_logo-min.png" alt='rmdb-logo' />
     </Link>
     <a href="https://t.me/joinchat/6Hfh6gAaRkY4NWY0">
      <TMDBLogoImg src="https://eljambo.files.wordpress.com/2021/10/tg_join.png" alt='tmdb-logo' />
     </a>
    </Content>
  </Wrapper>
);

export default Header;
