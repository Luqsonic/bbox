import Plyr from 'plyr-react'
import 'plyr-react/dist/plyr.css'




const Player = () => {
  
  return (
  <div class="container">
  <img id="player_logo" src="https://eljambo.files.wordpress.com/2021/08/wp-1629569444760.png" />
  
    <Plyr id="video"
 source={
 {
    type: 'video',
    title: 'Movie',
    sources: [
      {
    src: 'https://blackboxlinks.herokuapp.com/460/Free.Guy.2021.720p.%40Netflixextra5.mp4',
    type: 'video/mp4',
    size: 720,
    },
    {
    src: 'https://blackboxlinks.herokuapp.com/461/Free.Guy.2021.720p.%40Netflixextra5.mp4',
    type: 'video/mp4',
    size: 480,
    },
    ],
    poster: 'https://eljambo.files.wordpress.com/2021/09/wp-1632455233935.jpg',
      
    previewThumbnails: {
    src: '/path/to/thumbnails.vtt',
    },
    tracks: [
    {
    kind: 'captions',
    label: 'English',
    srclang: 'en',
    src: 'https://blackboxlinks.herokuapp.com/464/movie.vtt',
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
          }
    }
    }
    
    
    />
   </div>
  )
};


export default Player;
