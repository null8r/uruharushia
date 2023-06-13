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
