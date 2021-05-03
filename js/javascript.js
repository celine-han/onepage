$(function(){
    const $nav = $('header>nav>ul>li>a');
    const arrScrollTop = [];
    for(let i=0; i<4; i++){
       arrScrollTop[i] = $('.cont-container>article').eq(i).offset().top;
    }

    $nav.on('click', function(evt){
        evt.preventDefault();
        let nowIdx = $nav.index(this);
        $('body, html').animate({
            scrollTop : arrScrollTop[nowIdx]-100
        }, 1000, 'easeInOutCirc');
    });

    $('aside>a').on('click', function(evt){
        evt.preventDefault();
        $('body, html').animate({
            scrollTop : 0
        });
    });

    $('header>h1').on('click', function(){
        $('aside>a').trigger('click');
    });

    
   $('.intro>.intro-cont>a').on('click', function(evt){
        evt.preventDefault();
        $('body, html').animate({
            scrollTop : arrScrollTop[0]
        }, 1000, 'easeOutQuad');
   });
});

$(function(){
    const $indicator = $('.cont-container>.cont01>.slide-container>.slide-indicator>li>a');
    $indicator.on('click', function(evt){
        evt.preventDefault();

        const img = $(this).attr('href');

        $('.slide-container>p>img').attr({
            src : img
        })

        $(this).parent().addClass('on').siblings().removeClass('on');
    });
});

$(function(){
    const $indicator = $('.cont02>.slide-container>.slide-indicator>li>a');
    
    $indicator.on('click', function(evt){
        evt.preventDefault();
        const nowIdx = $indicator.index(this);
        const slideLeng = $('.cont02>.slide-container>.slides>li').width();
        console.log(nowIdx);
        $('.cont02>.slide-container>.slides').stop().animate({
            'margin-left' : -slideLeng*nowIdx
        });
        $(this).parent().addClasss('on').siblings().removeClass('on');
    });
    
});

$(function(){
    const $indicator = $('.cont03>.slide-container>.slide-indicator>li>a');
    const $slide = $('.cont03>.slide-container>.slides>li');
    let nowIdx = 0;
    let oldIdx = null;
    let intervalKey = null;

    const slideMoveFn = function(){
        $slide.eq(oldIdx).stop().fadeOut(1000);
        $slide.eq(nowIdx).stop().fadeIn(1000);  
        
        $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
    };

    $indicator.on('click', function(evt){
        evt.preventDefault();
        oldIdx = nowIdx;
        nowIdx = $indicator.index(this);
        slideMoveFn();
    });

    $('.cont03>.slide-container>.slide-btn.prev').on('click', function(evt){
        evt.preventDefault();
        oldIdx = nowIdx;
        if(nowIdx>0){
            nowIdx--;
        }else{nowIdx=4}
        slideMoveFn();
    });

    $('.cont03>.slide-container>.slide-btn.next').on('click', function(evt){
        evt.preventDefault();
        oldIdx = nowIdx;
        if(nowIdx<4){
            nowIdx++;
        }else{nowIdx=0}
        slideMoveFn();
    });

    $('.cont03>.slide-container>.slide-btn-ps>li:nth-of-type(1)>a').on('click', function(evt){
        evt.preventDefault();
        clearInterval(intervalKey);
        $(this).parent().addClass('on').siblings().removeClass('on');
    });

    
    $('.cont03>.slide-container>.slide-btn-ps>li:nth-of-type(2)>a').on('click', function(evt){
        evt.preventDefault();
        clearInterval(intervalKey);
        intervalKey = setInterval(function(){
            oldIdx = nowIdx;
            if(nowIdx<4){
                nowIdx++;
            }else{nowIdx=0}
            slideMoveFn();
        }
        , 4000);
        
        $(this).parent().addClass('on').siblings().removeClass('on');
    });

});

$(function(){
    const $prev = $('.cont04>.slide-container>.slide-btn.prev');
    const $next = $('.cont04>.slide-container>.slide-btn.next');
    const $slide = $('.cont04>.slide-container>.slides>li');
    let nowIdx = 0;
    let oldIdx = null;
    let intervalKey = null;
    const moveFn = function(){
        $slide.eq(oldIdx).stop().fadeOut(1000);
        $slide.eq(nowIdx).stop().fadeIn(1000);
    };


    $prev.on('click', function(evt){
        evt.preventDefault();

        clearInterval(intervalKey);
        oldIdx = nowIdx;
        if(nowIdx>0){
            nowIdx--;
        }else{
            nowIdx=8;
        }

        if(nowIdx==2){
            $('.cont04>.tit>.subtit1').fadeIn();
            $('.cont04>.tit>.subtit3').fadeOut();
            $('.cont04>.tit>.subtit2').fadeOut();

        }else if(nowIdx==5){
            $('.cont04>.tit>.subtit2').fadeIn();
            $('.cont04>.tit>.subtit3').fadeOut();
        }else if(nowIdx==8){
            $('.cont04>.tit>.subtit3').fadeIn();
            $('.cont04>.tit>.subtit1').fadeOut();
        }
        moveFn();
    });

    $next.on('click', function(evt){
        evt.preventDefault();
        clearInterval(intervalKey);
        oldIdx = nowIdx;
        if(nowIdx<8){
            nowIdx++;
        }else{
            nowIdx=0;
        }

        if(nowIdx==3){
            $('.cont04>.tit>.subtit2').fadeIn();
            $('.cont04>.tit>.subtit1').fadeOut();
        }
        if(nowIdx==6){
            $('.cont04>.tit>.subtit3').fadeIn();
            $('.cont04>.tit>.subtit2').fadeOut();
        }
        if(nowIdx ==0){
            $('.cont04>.tit>.subtit1').fadeIn();
            $('.cont04>.tit>.subtit3').fadeOut();
        }

        moveFn();
    });

    $('.cont04>.slide-container>span.autoplayBtn').on('click', function(){
        if($('.cont04>.slide-container>span.autoplayBtn').hasClass('pause')){
            $(this).removeClass('pause');
            clearInterval(intervalKey);
            intervalKey = setInterval(function(){
                oldIdx = nowIdx;
                if(nowIdx<8){
                    nowIdx++;
                }else{
                    nowIdx=0;
                }

                if(nowIdx==0){
                    $('.cont04>.tit>.subtit1').fadeIn();
                    $('.cont04>.tit>.subtit3').fadeOut();
                }
                if(nowIdx==3){
                    $('.cont04>.tit>.subtit2').fadeIn();
                    $('.cont04>.tit>.subtit1').fadeOut();
                }
                if(nowIdx==6){
                    $('.cont04>.tit>.subtit3').fadeIn();
                    $('.cont04>.tit>.subtit2').fadeOut();
                }
                
                moveFn();
            }, 4000);
           
        }else{
            $(this).addClass('pause');
            clearInterval(intervalKey);
        }
    });

    

});

$(function(){
    const arrScrollTop = [];
    for(let i=0; i<4; i++){
       arrScrollTop[i] = $('.cont-container>article').eq(i).offset().top;
    }
    const $mnu = $('header>nav>ul>li>a');


    $(window).on('scroll', function(){
        let scroll = $(window).scrollTop();

        for(let i=0; i<4; i++){
            if(scroll>=arrScrollTop[i]-300){
                $mnu.eq(i).parent().addClass('on').siblings().removeClass('on');
            }else if(scroll<arrScrollTop[0]-300){
                $mnu.parents().removeClass('on');
            }
        }
    });

    $(window).on('load', function(){
        $('body, html').stop().animate({
            scrollTop : 0
        });
    });

});