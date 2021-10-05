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
        margin:10px 0 5px 0;
        border-top:solid 1px black;
        padding:5px 0px 2px 0px;
        }
    }

  }
`;

export const Content = styled.div`
  display: flex;
  border-top:solid 1px black;
  flex-wrap:nowrap;
  overflow-x:scroll;
  
  
    @media screen and (max-width: 768px) {
     display: flex;
     border-top:solid 1px black;
     flex-wrap:nowrap;
     overflow-x:scroll;
     margin-top:0px;
    }
  
  
`;
