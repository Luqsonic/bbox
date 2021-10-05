import styled from 'styled-components';

export const Wrapper = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${({ image }) => image}), var(--darkGrey);
  background-size: 100%, cover;
  background-position: center;
  height: 600px;
  position: relative;
  animation: animateHeroImage 1s;

  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  
  @media screen and (max-width: 700px){
    height:200px;
    
  }

  
`;

export const Content = styled.div`
  padding: 20px;
  max-width: var(--maxWidth);
  margin: 0 auto;
  
  
  @media screen and (max-width:720px){
   padding:7px;
 }
  
  `;

export const Text = styled.div`
  z-index: 10;
  max-width: 700px;
  position: absolute;
  bottom: 40px;
  margin-right: 20px;
  min-height: 100px;
  color: var(--white);


 @media screen and (max-width:720px){
   bottom:0px;
   min-height:30px;
 }



  h1 {
    font-size: var(--fontSuperBig);

    @media screen and (max-width: 720px) {
      font-size: 20px;
      margin-bottom:-10px;
    }
  }

  p {
    font-size: var(--fontMed);

    @media screen and (max-width: 720px) {
      font-size: 10px;
    }
  }

  @media screen and (max-width: 720px) {
    max-width: 100%;
    margin-top:0px;
  }
`;
