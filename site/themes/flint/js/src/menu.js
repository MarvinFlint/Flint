//Nav toggle mobile
$(document).ready(function(){
    $(".mobile-menu").click(function(){
        $(".nav").slideToggle()
    })
})

//Back button
$(document).ready(function(){
    $(".reset").click(function(){
        $(".t2").css({"opacity" : "0", "transform" : "scale(1.5)"}).delay(1000).slideUp(500, function(){
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
        $(this).attr("style", "transform: scale(1.5) !important");
        var ClickedEleId = $(this).attr("id");
        $(".t1").css("opacity", "0").delay(1000).slideUp(500, function(){
            $("." + ClickedEleId).slideDown(500, function(){
                $("." + ClickedEleId).css({
                    "opacity" : "1",
                    "transform" : "scale(1)"
                });
            })
        })
    })
})

