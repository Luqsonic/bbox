import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 10px;
  
  position:sticky;
  top:0px;
  z-index:100;
  box-shadow: 0px 1px 5px;
  
  @media screen and (max-width:720px){
   height:50px;
   padding:0 8px;
   
 }
  
  `;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 10px 0;
  margin: 0 auto;
  @media screen and (max-width: 500px) {
    padding:09px 0px;
  }
`;

export const LogoImg = styled.img`
  width: 220px;
-webkit-tap-highlight-color: transparent;
  @media screen and (max-width: 500px) {
    width: 90px;
    margin:0;
  }
`;

export const TMDBLogoImg = styled.img`
  width: 100px;
  margin-top:10px;
-webkit-tap-highlight-color: transparent;
  @media screen and (max-width: 500px) {
    width: 75px;
    height:19px;
    margin-top:6px;
    border:solid 1px white;
    border-radius:4px;
  }
`;
