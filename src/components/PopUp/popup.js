import $ from 'jquery';


var modal = $(".modal");
var modal2 = $(".modal2");
var btn = $(".openModal");
var span = $(".close");
var span2 = $(".close2");
     
   
   export const closePopup = () => {
     $(".modal").css("display","none");
     $(".modal2").css("display","none");
     $(".alert").css("display","none");
   }
   
   export const sendReq = () => {
      $(".modal").css("display","none");
      $(".modal2").css("display","block");     

      var inform = new FormData();
      var movieReq = $(".watch_link").attr("tmdb_id");

      inform.append('movieReq',movieReq);
      
      $.ajax({
      url:'https://www.blackboxcinema.site/movie_request.php',
      type: 'post',
      data:inform,
      contentType: false,
      processData: false,
      success: function(msg){
      var res = msg;
      }
      });
      
      
   }
   
   
   window.onclick = function(event) {
      if (event.target == modal) {
         closePopup();
      }
      else if(event.target == modal2) {
        closePopup();
      }
   };
