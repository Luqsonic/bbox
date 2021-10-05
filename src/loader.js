var px = parseInt($("#story").css("height").slice(0,-2))

          if(px>310){
            $("#showButton").css("display","block");
            $("#bio_box").css("height","300px");
            }
          else{
              $("#bio_box").css("height","auto");
              }

            $("#showButton").click(function() {
            $("#bio_box").css("height","auto");
            $("#showButton").css("display","none");

            });
