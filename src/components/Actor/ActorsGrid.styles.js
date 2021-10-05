import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 20px;


  @media screen and (max-width: 768px) {
    padding:0 10px;
  }



  h1 {
    color: var(--medGrey);
    
      @media screen and (max-width: 768px) {
        font-size:17px;
        margin:5px 0 5px 0;
        }
    }

  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
  
  
    @media screen and (max-width: 768px) {
     grid-template-columns: repeat(auto-fill, minmax(100px,100px));
     grid-gap: 0.8rem; 
    }
  
  
`;
