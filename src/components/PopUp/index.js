import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Styles
import './popup.css';
//Scripts
import './popup.js';
import { closePopup,sendReq } from './popup.js';

const  Popup= () => {  
  return (
    <>
      
    <div class="modal">
       <div class="modalContent">
        <span class="close" onClick={closePopup}><p>×</p></span>
        <div class="emoji">
        <img src="https://eljambo.files.wordpress.com/2021/10/oops.png"/>
       </div>
       <div class="p_text">
         <p>This movie isn't available.</p>
         <p>Do you want to send a request and it will be uploaded as soon as possible?</p>
       </div>
       <div class="p_buttons">
         <button id="cancel" onClick={closePopup}>Cancel</button>
         <button id="req" onClick={sendReq}>Send Request</button>
       </div>
       </div>
    </div>

    <div class="modal2">
      <div class="modalContent2">
        <span class="close2" onClick={closePopup}><p>×</p></span>
      <div class="emoji">
      <img src="https://eljambo.files.wordpress.com/2021/10/checked.png"/>
      </div>

      <div class="p_text">
        <p>Movie request has been sent successfully and will be uploaded today</p>
        <p id="notice">Note: Always check the movie's release date to confirm it is available before sending any request.</p>
      </div>
      <div class="p_buttons">
        <button id="cancel2" onClick={closePopup}>Close</button>
      </div>
      </div>
      </div>
      
    <div class="alert">
      <div class="alertContent">
      <span class="a_close" onClick={closePopup}><p>×</p></span>
        <div class="a_emoji">
        <img src="https://eljambo.files.wordpress.com/2021/10/alarm-1.png"/>
        </div>

       <div class="alert_text">

     <p id="a_notice">Currently there is only a Poor Quality(CAM) version of this movie. This is because it is still exclusively available only in Cinemas and you can't find it anywhere else online.
      </p>
      <p id="a_recommend">*HD Quality(Best) version usually comes out 30 days from the day of movie release.</p>
      </div>
      <div class="a_buttons">
      <button id="a_cancel" onClick={closePopup}>Ok</button>
      </div>
      </div>
      </div>

    
    
    </>
    )
 }
 
 
 export default Popup;