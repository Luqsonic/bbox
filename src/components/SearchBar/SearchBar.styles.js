import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  background: var(--darkGrey);
  padding: 0 20px;
  
  
  @media screen and (max-width:720px){
   height:55px;
 }
  
`;

export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  height: 55px;
  background: var(--medGrey);
  margin: 0 auto;
  border-radius: 40px;
  color: var(--white);

  @media screen and (max-width:720px){
   height:35px;
 }




  img {
    position: absolute;
    left: 15px;
    top: 14px;
    width: 30px;
    
    @media screen and (max-width:720px){
     width:19px;
     top:8px;
     left:9px;
     }
   }

  input {
    font-size: var(--fontBig);
    position: absolute;
    left: 0;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: var(--white);
    
    
    @media screen and (max-width:720px){
      font-size:20px;
      margin:0px;
      padding:0 0 0 40px;
      height:35px;
 }
    
    

    :focus {
      outline: none;
    }
  }
`;
