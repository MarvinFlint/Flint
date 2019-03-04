$(document).ready(function(){
    $(".mobile-menu").click(function(){
        $(".nav").slideToggle()
    })
})
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

$(document).ready(function(){
    $(".t1").click(function(){
        $(this).css("transform", "scale(1.5)");
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

