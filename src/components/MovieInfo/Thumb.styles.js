import styled from 'styled-components';


export const Wrapper = styled.div`
  
  
  @media screen and (max-width: 768px) {
  width:250px;
  height:200px;
  display:inline;
  flex:43%;
  }
`;


export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 5px;
  animation: animateThumb 0.5s;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  
  @media screen and (max-width:720px){
   min-width:100%;
   height:100%;
   object-fit:fill;
 }  
  
  
`;


