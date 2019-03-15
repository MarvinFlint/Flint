//Nav toggle mobile
$(document).ready(function(){
    $(".mobile-menu").click(function(){
        $(".nav").slideToggle()
    })
})

//Back button
$(document).ready(function(){
    $(".reset").click(function(){
        $(".t2").css({"opacity" : "0", "transform" : "scale(1.4)"}).delay(1000).slideUp(500, function(){
            $(".t1").slideDown(500, function(){
                $(".t1").css({
                    "opacity" : "1",
                    "transform" : "scale(1)"
                })
            })
        })
    })
})

//Panel switches
$(document).ready(function(){
    $(".t1").click(function(){
        $(this).attr("style", "transform: scale(1.4) !important");
        var ClickedEleId = $(this).attr("id");
        $(".t1").css("opacity", "0").delay(1000).slideUp(500, function(){
            $("." + ClickedEleId).slideDown(500, function(){
                $("." + ClickedEleId).css({
                    "opacity" : "1",
                    "transform" : "scale(1)",
                    "display" : "flex"
                });
            })
        })
    })
})
$(function(){
    // Bind the swipeHandler callback function to the swipe event on div.box
    $( ".switch-div" ).on( "swipe", swipeHandler );
   
    // Callback function references the event target and adds the 'swipe' class to it
    function swipeHandler( event ){
      $( event.target ).addClass( "swipe" );
    }
  });

