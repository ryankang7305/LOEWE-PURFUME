$('.search_box input').keyup(function(){
    let inputVal = $(this).val().length 


    if(inputVal > 0) {

        $('.search_box botton').css({color:'#fff'});
    }else {
        $('.search_box button').css({color:''});


    }
    

})


    let defaultFont = parseInt($('html').css('fontsize'))
    $('.title_box h2').click(function(){
    defaultFont++
    $('html').css({fontSize:defaultFont+1});

    })

    $('title_box p').click(function(){


    defaultFont
    $('html').css({fontSize:defaultFont});

    })