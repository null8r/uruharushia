function main(){
  var nowDate = new Date();
  var now = nowDate.getTime();

  var bYears = nowDate.getFullYear() + 1;
  var bMonths = 1 - 1;
  var bDays = 22;
  var bHours = 0;
  var bMinutes = 0;
  var bSeconds = 0;
  var birthday = new Date( bYears, bMonths, bDays, bHours, bMinutes, bSeconds);
  var bTarget = birthday.getTime();

  var diffDates = bTarget - now;

  var days = Math.floor(diffDates / ( 1000 * 60 * 60 * 24 ));
  diffDates = diffDates % ( 1000 * 60 * 60 * 24 );

  var hours = Math.floor(diffDates / ( 1000 * 60 * 60 ));
  diffDates = diffDates % ( 1000 * 60 * 60 );

  var minutes = Math.floor(diffDates / ( 1000 * 60 ));
  diffDates = diffDates % ( 1000 * 60);

  var seconds = Math.floor(diffDates / 1000);

  if(bTarget - 31536000000 >= now){
    document.getElementById('countdown').style.display = 'none';
    document.getElementById('happy-birthday').style.display = 'flex';
    document.getElementById('happy-birthday').innerHTML = "誕生日おめでとう！！";
  }
  else{
    document.getElementById('countdown').style.display = '';
    document.getElementById('happy-birthday').innerHTML = "";
  }

  document.getElementById('days').innerHTML = ("0" + days).slice(-3);
  document.getElementById('hours').innerHTML = ("0" + hours).slice(-2);
  document.getElementById('minutes').innerHTML = ("0" + minutes).slice(-2);
  document.getElementById('seconds').innerHTML = ("0" + seconds).slice(-2);
}

setInterval('main()',1000);