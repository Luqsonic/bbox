import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  background: var(--darkGrey);
  padding: 0 20px;
  
  
  @media screen and (max-width: 768px) {
     min-height:50px;
     height:50px;
   }
  
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  width: 100%;
  margin: 0 auto;

  .column {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--medGrey);
    border-radius: 20px;
    margin: 0 20px;
    flex: 1;

    :first-child {
      margin-left: 0;
    }

    :last-child {
      margin-right: 0;
    }
  }

  
  @media screen and (max-width: 768px) {
    display: flex;
    max-height:80%;

    .column {
    margin: 0px;
    display: flex;
    justify-content: space-between;
    background: var(--medGrey);
    border-radius: 6px;
    margin: 0 5px;
    border:solid 1px #FF0051;
    text-align:center;
    padding:3px;

    :first-child {
      margin-left: -10px;
    }

    :last-child {
      margin-right: -10px;
      }
    }
    
    .column p{
      margin-bottom:0px;
      margin-top:0px;
    }
  }
`;
