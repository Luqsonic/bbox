import styled from 'styled-components';

export const Wrapper = styled.div`
  color: var(--white);
  background: var(--darkGrey);
  border-radius: 20px;
  padding: 5px;
  text-align: center;
  overflow:hidden;
  text-decoration:none;

  @media screen and (max-width: 768px) {
    width:100px;
    height:150px;
    border-radius:12px;
  }

  h3 {
    margin: 10px 0 0 0;
    text-decoration:none;
    
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
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
  
  
    @media screen and (max-width: 768px) {
      max-height:80%;
      border-radius:8px;
    }
  
`;
