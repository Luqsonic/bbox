import React from 'react';
import { useParams } from 'react-router-dom';
import $ from 'jquery';
import Plyr from 'plyr-react'
import 'plyr-react/dist/plyr.css'
// Config
import { IMAGE_BASE_URL,BACKDROP_SIZE, POSTER_SIZE } from '../config';
// Components
import Spinner from './Spinner';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor';
// Hook
import { useMovieFetch } from '../hooks/useMovieFetch';
import { useVideoFetch } from '../hooks/useVideoFetch';
// Image
import NoImage from '../images/no_image.jpg';
//Style
import "./Player/player.css";



const Movie = () => {
  const { movieId,linkId } = useParams();
  const { state: movie, loading, error } = useVideoFetch(movieId,linkId);
  //alert(movie);
  //const { state: video } = useVideoFetch(linkId);
  const mj = JSON.stringify(movie);
  
  //alert(mj.slice(2300,2600));
  
/*  var inform = new FormData();
  inform.append('link_id',linkId);
  var video;
$.ajax({
  url:'https://www.blackboxcinema.site/vlink.php',
  type: 'post',
  data:inform,
  contentType: false,
  processData: false,
  success: function(msg){
    video = JSON.parse(msg);
    alert(video);
  }
});
  
 */ 
  
  
  const thumbnail =
          movie.poster_path
            ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`
            : 'https://eljambo.files.wordpress.com/2021/09/wp-1632455233935.jpg';
          
  
  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;
  
  return(
    <div id="body">
          
    <div class="movie_details">
      <p id="movie_name">{movie.title}</p>
    </div>
  
  
    <div class="container">
  <img id="player_logo" src="https://eljambo.files.wordpress.com/2021/08/wp-1629569444760.png"
             />
  
    <Plyr
 source={
 {
    type: 'video',
    title: `${movie.title}`,
    sources: [
      {
    src: `${movie.video.movie_link}`,
    type: 'video/mp4',
    size: 720,
    },
    ],
    poster:`${thumbnail}`,
    tracks: [
    {
    kind: 'captions',
    label: 'English',
    srclang: 'en',
    src: `${movie.video.subs}`,
    default: true,
    },
   ],
 }
    
}

    options={
    {
     settings : ['captions', 'quality', 'speed'],
     captions : {
         active: false,
         language: 'auto',
         update: false 
      },
      quality : { 
          default: 480,
          options: [720] 
          },
      fullscreen: {
        enabled: true, 
        fallback: true, 
        iosNative: false, 
        container: null 
      }
    }
    }
    
    
    />
   </div>
    
  


    <div class="p_share">
        <p>Share movie link:</p>

     <div id="p_share_icons">
        <div id="tooltip"class="p_icon_div">
        <img onClick={() => {
            
        var $temp = $("<input>");
        var $url = "https://blackbox.site/media?i="+movieId;

        $("body").append($temp);
        $temp.val($url).select();
        document.execCommand("copy");
        $temp.remove();
        $("#myTooltip").text("Link copied!");

            }
          }
        id="copy" src="https://eljambo.files.wordpress.com/2021/09/wp-1632455260198.png" />
        <span class="tooltiptext" id="myTooltip">Link copied</span>
        </div>
        <div class="p_icon_div">
        <a href={`https://www.facebook.com/sharer/sharer.php?u=https://blackboxcinema.site/media?i=${movieId}`}>
        <img src="https://eljambo.files.wordpress.com/2021/09/wp-1632455260225.png" />
        </a>
        </div>
        
        <div class="p_icon_div">
         <a href={`https://twitter.com/intent/tweet?text=https://blackboxcinema.site/media?i=${movieId}`} >
         <img src="https://eljambo.files.wordpress.com/2021/09/wp-1632455260294.png" />
         </a>
         </div>
   
         <div class="p_icon_div">
         <a href={`whatsapp://send?text=https://blackboxcinema.site/media?i=${movieId}`}>       
         <img src="https://eljambo.files.wordpress.com/2021/09/wp-1632455260246.png" />
         </a>
         </div>
   
         <div class="p_icon_div">
         <a href={`https://telegram.me/share/url?url=https://blackboxcinema.site/media?i=${movieId}`}>        
         <img src="https://eljambo.files.wordpress.com/2021/09/wp-1632455260269.png" />
         </a>
         </div>
        
        </div>   
    </div>


</div>   
    
  )

};

export default Movie;
