import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import {Helmet} from 'react-helmet'
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
// Image
import NoImage from '../../images/no_image.jpg';
import {Show} from './showbutton.styles';
// Styles
import './actorinfo.css';


const ActorInfo = ({ actor }) =>{
//Gender
  if(actor.gender==2){
    var actorGender = "Male";
  }
  else if(actor.gender==1){
    var actorGender = "Female";
  }
  else{
    var actorGender = "Unknown";
  }

//Years
function ageCalc(date){
  var year = parseInt(date.slice(0,4));
  var ActorAge = 2021-year;
  return (ActorAge+" years old");
}
//bio_box length
//var px = parseInt($("#story").css("height").slice(0,-2))
var age = "Unknown";
if(actor.birthday){
 age = ageCalc(actor.birthday);
}
else{
  age = "Unknown";
}

//Place of birth
var birthPlace = "(Unknown)";
if(actor.place_of_birth){
 birthPlace = actor.place_of_birth;
}
else{
  birthPlace = "(Unknown)";
}


  return (
  <div class="actorbody" onLoad="load()">

   <div class="a_header">
    <img src={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }/>
    <p id="name">{actor.name}</p>

     <div class="share">
      <div id="share_icons">
      
     <div class="icon_div">
      <a href={`https://www.facebook.com`}>
      <img src="https://eljambo.files.wordpress.com/2021/09/wp-1632455260225.png" />
      </a>
     </div>
     
     <div class="icon_div">
       <a href={`https://twitter.com`} >
          <img src="https://eljambo.files.wordpress.com/2021/09/wp-1632455260294.png" />
       </a>
     </div>
     
     <div class="icon_div">
       <a href={`https://telegram.me/share`}>        
         <img src="https://eljambo.files.wordpress.com/2021/09/wp-1632455260269.png" />
       </a>
     </div>
    </div>
  </div>
 </div>


  <div class="a_personal_info">
   <h3>Personal Info</h3>
   <div class="info">
    <p class="i_header">Known for</p>
    <p class="i_tagline">{actor.known_for_department}</p>
  </div>
  
   <div class="info">
    <p class="i_header">Gender</p>
    <p class="i_tagline">{actorGender}</p>
  </div>
  
   <div class="info">
    <p class="i_header">Birthdate</p>
    <p class="i_tagline">{actor.birthday} ({age})</p>
   </div>
  
   <div class="info">
    <p class="i_header">Place of Birth</p>
    <p class="i_tagline">{birthPlace}</p>
   </div>

 </div>

   <div class="bio">
    <h2>Biography</h2>
    <div id="bio_box">
    <p id="story">
      {actor.biography}
     </p>
    <button id="showButton">
      <span>Read More</span>
      <img src="https://eljambo.files.wordpress.com/2021/09/arrow.png" >
      </img>
     </button>
  </div>
 </div>
      
      <Helmet>
        <script src="../../loader.js" type = "text/javascript" > </script>
      </Helmet>
</div>

)

};


export default ActorInfo;