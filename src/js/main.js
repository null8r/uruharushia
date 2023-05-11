window.onload = function(){
  var ua = window.navigator.userAgent.toLowerCase();

  if(ua.indexOf('msie') != -1 || ua.indexOf('trident') != -1){
  }
  else{
    noIE();
  }
};

function playVoice(){
  clickCount();

  var random = Math.floor( Math.random() * 31 ) + 1;
  new Audio('src/audio/' + random + '.mp3').play();
}

var click = 0;
document.getElementById('click').innerHTML = click + "回";

function clickCount(){
  click++;
  if(click < 10000000){
    document.getElementById('click').innerHTML = click + "回";
  }
  else{
    document.getElementById('click').innerHTML = "こんるし！！";
  }
}

function noIE(){
  //twemoji
  twemoji.parse(document.body);
  
  //navbar
  $('.nav-link, .dropdown-item').click(function(){
    if($(this).hasClass('dropdown-toggle')){
    }
    else{
    $(".navbar-collapse").collapse('hide');
    }
  });

  //move-top
  var topBtn=$('.move-top');
  topBtn.hide();

  $(window).scroll(function(){
    if($(this).scrollTop()>80){
      topBtn.fadeIn();
    }
    else{
      topBtn.fadeOut();
    }
  });

  //smoothscroll
  const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
      let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const gap = 70;
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  };
};