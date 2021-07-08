

$( ".theProblemCTA button" ).hover(
    function() {
        $( this ).animate({
            height: '+=5px',
            width: '+=50px'
          });
        $(".theProblemCTA img").animate({
            left: '-=25px'
            // height: '+=5px',
            // width: '+=50px'
        })
    }, function() {
        $( this ).animate({
            height: '-=5px',
            width: '-=50px'
          });
        $(".theProblemCTA img").animate({
            left: '+=25px'
            // height: '-=5px',
            // width: '-=50px'
        })
    }
);


$(".dropdown").hover(
    function(){
        $(".dropdown-content").show();
    }, function(){
        $(".dropdown-content").hide();
    }
);