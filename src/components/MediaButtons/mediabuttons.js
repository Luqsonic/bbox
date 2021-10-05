import $ from 'jquery';



export const watchButton = () => {
var found = $(".watch_link").text();

if(found.slice(0,13)!=="Not Available"){
if(found.slice(0,12)!=="Poor Quality"){
if($(".watchB-content").css("max-height")=="0px"){
//First click  
  $(".dl_button").css(
  {
  "left":"-15px",
  "max-width":"45px",
  "border-radius":"50%",
  "overflow":"hidden"
   
  });
  $(".watchB-content").css(
  {
  "max-height":"112px"
  
  });
  $(".dl-content").css(
  {
  "transition-duration":"0s",
  "max-height":"0px",
  
  })
  }
//second click  
else if($(".watchB-content").css("max-height")!="0px"){

  $(".dl_button").css(
  {
  "left":"0px",
  "width":"auto"
   
  });
  $(".watchB-content").css(
  {
  "max-height":"0px"
  
  });
  $(".dl-content").css(
  {
  "transition-duration":"1s",
  
  })
  
  setTimeout(function(){
  $(".dl_button").css(
    {
    "max-width":"100%",
    "border-radius":"5px",
    "overflow":"visible"
    });
    }, 600);
  
  
  }
}

else{
  $(".alert").css("display","block");
  if($(".watchB-content").css("max-height")=="0px"){
//First click  
  $(".dl_button").css(
  {
  "left":"-15px",
  "max-width":"45px",
  "border-radius":"50%",
  "overflow":"hidden"
   
  });
  $(".watchB-content").css(
  {
  "max-height":"112px"
  
  });
  $(".dl-content").css(
  {
  "transition-duration":"0s",
  "max-height":"0px",
  
  })
  }
//second click  
else if($(".watchB-content").css("max-height")!="0px"){

  $(".dl_button").css(
  {
  "left":"0px",
  "width":"auto"
   
  });
  $(".watchB-content").css(
  {
  "max-height":"0px"
  
  });
  $(".dl-content").css(
  {
  "transition-duration":"1s",
  
  })
  
  setTimeout(function(){
  $(".dl_button").css(
    {
    "max-width":"100%",
    "border-radius":"5px",
    "overflow":"visible"
    });
    }, 600);
   }
}
}
else{
  //alert("Movie Not Available");
  $(".modal").css("display","block");
}
};






//Dl button
export const dlButton = () => {
  var found = $(".dl_link").text();
if(found.slice(0,13)!=="Not Available"){
if(found.slice(0,12)!=="Poor Quality"){
if($(".watchB-content").css("max-height")=="0px"){
$(".dl-content").css(
  {
  "max-height":"112px",
  
  })
}

//alert($(".watchB-content").css("max-height"))
if($(".watchB-content").css("max-height")!="0px"){

  $(".dl-content").css(
  {
  "transition-duration":"1s",
  "max-height":"0px"  
  });

  $(".dl_button").css(
  {
  "left":"0px",
  "width":"auto"
   
  });
  $(".watchB-content").css(
  {
  "max-height":"0px"
  
  })
  
  setTimeout(function(){
  $(".dl_button").css(
    {
    "max-width":"100%",
    "border-radius":"5px",
    "overflow":"visible"
    });
    }, 600);
   
    setTimeout(function(){
    $(".dl-content").css(
    {
    "max-height":"112px"
    });
    }, 700);
  
  
  }
  
//second click
if($(".dl-content").css("max-height")!="0px"){
$(".dl-content").css(
    {
    "max-height":"0px"
    });
 }
  
}
//Poor Quality
else{
  $(".alert").css("display","block");
  if($(".watchB-content").css("max-height")=="0px"){
$(".dl-content").css(
  {
  "max-height":"112px",
  
  })
}

//alert($(".watchB-content").css("max-height"))
if($(".watchB-content").css("max-height")!="0px"){

  $(".dl-content").css(
  {
  "transition-duration":"1s",
  "max-height":"0px"  
  });

  $(".dl_button").css(
  {
  "left":"0px",
  "width":"auto"
   
  });
  $(".watchB-content").css(
  {
  "max-height":"0px"
  
  })
  
  setTimeout(function(){
  $(".dl_button").css(
    {
    "max-width":"100%",
    "border-radius":"5px",
    "overflow":"visible"
    });
    }, 600);
   
    setTimeout(function(){
    $(".dl-content").css(
    {
    "max-height":"112px"
    });
    }, 700);
  
  
  }
  
//second click
if($(".dl-content").css("max-height")!="0px"){
$(".dl-content").css(
    {
    "max-height":"0px"
    });
   }
}

}
else{
  //alert("Download link not availabe");
  $(".modal").css("display","block");
}
};


//Positioning buttons
export const posButton= (length) => {

if(length<18){
setTimeout(function(){  
$(".media_buttons").css("top","209px");
},1000);

}
else{
$(".media_buttons").css("top","235px");
}
};

