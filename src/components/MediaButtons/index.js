import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet'

//Images
import WatchButton from './Images/watch.svg';
import DlButton from './Images/download.svg';

// Styles
import'./mediabuttons.css';
//Scripts
import { watchButton,dlButton,posButton} from './mediabuttons.js';

const  MediaButtons= ({source,movieId,titleLength}) => {
 /*var source = {
    {id:"848278",link_name:"High",file_size:"300 MB",link_url:"#",link_id:"2021"},
    {id:"848278",link_name:"High",file_size:"300 MB",link_url:"#",link_id:"2021"}
    };
  *////var res = source.json();
  
  return (
    <>
    
  <div onLoad={posButton(titleLength)} class="media_buttons">
     <div class="watch_button">
       <div class="watchB">
         <button onClick={watchButton}class="watchB-btn">
          <img src="https://eljambo.files.wordpress.com/2021/09/watch.png" alt="Watch"/>
         </button>
      <div class="watchB-content">
         {source.result.map(res => (
         <Link style={{textDecoration:"none"}}
             to={`/player/${res.id}/${res.link_id}`}
           >
          <a
            class="watch_link"
            tmdb_id={res.id}
            key={res.link_id}
            href={res.link_url}
            style={{textDecoration:"none"}}
            >
            {res.link_name}<br/>({res.file_size})
          </a>
         </Link>
        ))}        
      </div>
      </div>
    </div>

     <div class="dl_button">
       <div class="dlB">
        <button onClick={dlButton} class="dl-btn">
          <img src="https://eljambo.files.wordpress.com/2021/09/download.png" alt="Download"/>
        </button>
       <div class="dl-content">
         {source.result.map(res => (
          <a
            class="dl_link"
            tmdb_id={res.id}
            key={res.link_id}
            href={res.link_url}
            download
            >
            {res.link_name}<br/>({res.file_size})
          </a>
        ))}
          </div>
      </div>
    </div>


  
</div>


      <Helmet>
        <script src="./mediabuttons.js" type = "text/javascript" > </script>
      </Helmet>
  </>
);

}

export default MediaButtons;
