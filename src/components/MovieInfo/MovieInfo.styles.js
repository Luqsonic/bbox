import styled from 'styled-components';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';





export const Wrapper = styled.div`
  background: ${({ backdrop }) =>
    backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : '#000'};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateMovieInfo 1s;
  position:relative;

  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  
   @media screen and (max-width: 768px) {
   padding:20px 15px;
   height:450px;
  }
  
  
  
  
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;




  @media screen and (max-width: 768px) {
   border-radius:5px;
   max-height:400px;
   min-height:400px;
   height:420px;
   margin-top:;
   flex-wrap:wrap;
  }
`;






export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;
  
@media screen and (max-width: 768px) {
   max-height:100%;
   padding:0px 5px;
   flex:57%;
   height:200px;
  }


  .rating-directors {
    display: flex;
    justify-content: flex-start;
    
    
    @media screen and (max-width: 768px) {
     height:70px;
     padding:0px 5px 0px 5px;
     overflow:hidden;
     justify-content: space-between;
    }
     
  }
  
  .rating{
    @media screen and (max-width: 768px) {
     padding:0px;
    }
  }
  
  #h3_Rating{
    @media screen and (max-width: 768px) {
     font-size:18px;
     margin:0px 0px 5px 0px;
    }
  }
  

 
 
  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 50%;
    margin: 0;
    
    
    @media screen and (max-width: 768px) {
     width:30px;
     height:30px;
     margin:auto;
    }
    
  }



  .director {
    margin: 0 0 0 40px;
    
    
    @media screen and (max-width: 768px) {
     margin:0 0 0 20px;
     min-width:55%;
     text-align:center;
    }
    
   h3{
     margin:0 0 5px 0;
     font-size:18px;
   } 
    
    
    p {
      margin: 0;
    }
  }



  h1 {
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
      margin-top:5px;
      margin-bottom:10px;
      overflow-wrap:break-word;
      white-space:normal;
      word-break:break-all;
      padding:0px 1px;    
    }
  }
  
  
`;


//Upper movie info
export const Story = styled.div`
  @media screen and (max-width: 768px) {
  position:absolute;
  top:270px;
  width: 92%;
  max-width:100%;
  padding: 0px 5px;
  color: var(--white);
  max-height:100%;
  margin-top:-50px;
  padding-top:5px;
  
  h3{
     margin:0 0 5px 0;
     font-size:16px;
     
   } 
  
  
  #date,#genres{
    margin:0px 0 5px 0;
    width:100%;
    font-size:14px;
  }
  #genres{
    font-size:15px;
  }
  
  
  
  #overview{
  @media screen and (max-width: 768px) {
    font-size: 15px;
    margin:0px;
   
   }
  }
 }
  

`;
