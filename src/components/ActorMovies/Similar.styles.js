import styled from 'styled-components';

export const Wrapper = styled.div`
  color: var(--white);
  background: var(--darkGrey);
  border-radius: 20px;
  padding: 5px;
  text-align: center;
  overflow:hidden;

  @media screen and (max-width: 768px) {
    width:100px;
    height:150px;
    border-radius:12px;
  }

  h3 {
    margin: 10px 0 0 0;
    
      @media screen and (max-width: 768px) {}
        font-size:13px;
        margin:0px;
      }

  p {
    margin: 5px 0;
    
      @media screen and (max-width: 768px) {}
       font-size:11px;
       margin:2px 0 0 0;
       }
`;

export const Image = styled.img`
  min-width: 140px;
  height: 200px;
  margin: 5px;
  border-radius:25px;
  
  
    @media screen and (max-width: 768px) {
      max-height:200px;
      border-radius:15px;
    }
  
`;
