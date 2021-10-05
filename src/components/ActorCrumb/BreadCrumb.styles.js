import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  background: var(--medGrey);
  color: var(--white);
  
  
  @media screen and (max-width: 700px){
    height:25px; 
  }
  
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--maxWidth);
  padding: 0 20px;


  span {
    font-size: var(--fontMed);
    color: var(--white);
    padding-right: 10px;

    @media screen and (max-width: 768px) {
      font-size:14px;
    }
  }
`;



export const Span = styled.div`

max-height:100%;
  font-size:15px;
  box-sizing:border-box;
  padding:1px 0 0 0;
  margin-left:-10px;
  margin-bottom:0px;
  color: var(--white);
`;

export const Mid = styled.div`

max-height:100%;
  font-size:15px;
  box-sizing:border-box;
  padding:1px 0 0 0;
  margin-left:-5px;
  margin-right:5px;
  margin-bottom:0px;
  color: var(--white);
`;

