$(document).ready(function (){

    $('.impulsor').click(function(){
        $('body,html').animate({
            scrollTop:'0px'
        }, 500);
    });
});