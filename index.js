$(document).ready(function(){
    $('.side-btn').click(function(){
        $('nav .menu').toggleClass("active");
        $('.side-btn i').toggleClass("active");
    })

    $(window).scroll(function(){
        if(this.scrollY>20){
            $('nav').addClass('show')
        }else{
            $('nav').removeClass('show')
        }
    })
})

$(document).ready(function(){
    $('.protfolio-menu li').click(function(){
        const value = $(this).attr('data-filter')
        if(value == 'all'){
            $('.protfolio-item').show('2000')
        }else{
            $('.protfolio-item').not('.'+value).hide('2000')
            $('.protfolio-item').filter('.'+value).show('2000')
        }
    })
})

$('.protfolio-menu li').click(function(){
    $(this).addClass('active').siblings().removeClass('active')
})

