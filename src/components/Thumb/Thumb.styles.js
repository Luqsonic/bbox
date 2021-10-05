import styled from 'styled-components';

export const Wrapper = styled.div`
  position:relative;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
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
  
  
  
  border:solid 1px rgba(0,0,0,0.5);
  
  @media screen and (max-width:720px){
    border-radius:10px;
  }
  
`;

export const Span = styled.span`
display: ${({ text }) =>
    text=='New' ? 'block'
    : 'none'};
position:absolute;
top:6px;
right:6px;
color:black;
background:aqua;
border-radius:3px;
width:30px;
height:16px;
padding:0px;
text-align:center;
overflow:hidden;

  p{
    margin:0px;
    padding:0px;
    box-sizing:border-box;
    font-weight:bold;
    color:black;
    font-family: 'Secular One', sans-serif;
    font-size:13px;
    text-transform:uppercase;
  }
  #pt{
    margin:-1px -3px;
  }


`;
