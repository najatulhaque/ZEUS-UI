 let navbar=document.querySelector('.header')
document.addEventListener('scroll',() =>{
    if( window.top.scrollY>100){
        navbar.classList.add('header-bg')
    }
    else{
        navbar.classList.remove('header-bg');
        navbar.style.transition= ".2s ease"
    }
})


// Slider
$('.slide').slick({
    slideToShow:1,
    prevArrow:'<i class="fa-solid fa-angle-left prev glow-on-hover" ></i>',
    nextArrow:'<i class="fa-solid fa-angle-right next glow-on-hover " ></i>'
});





// Back To Top Button

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});






// Aos


  AOS.init();



  // Counter

  $(".cont").counterUp({time:2000});






//Acourdion


$(document).ready(function(){
  $('.accordion-list > li > .answer').hide();
    
  $('.accordion-list > li').click(function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".answer").slideUp();
    } else {
      $(".accordion-list > li.active .answer").slideUp();
      $(".accordion-list > li.active").removeClass("active");
      $(this).addClass("active").find(".answer").slideDown();
    }
    return false;
  });
  
});







 
