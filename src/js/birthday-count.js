function main(){
  let nowDate = new Date();
  let now = nowDate.getTime();
  let tYear = nowDate.getFullYear();

  let bYears = tYear + 1;
  let bMonths = 1 - 1;
  let bDate = 22;
  let bHours = 0;
  let bMinutes = 0;
  let bSeconds = 0;

  let birthday = new Date( bYears, bMonths, bDate, bHours, bMinutes, bSeconds);
  let bTarget = birthday.getTime();

  let diffDates = bTarget - now;

  let date = Math.floor(diffDates / ( 1000 * 60 * 60 * 24 ));
  diffDates = diffDates % ( 1000 * 60 * 60 * 24 );

  let hours = Math.floor(diffDates / ( 1000 * 60 * 60 ));
  diffDates = diffDates % ( 1000 * 60 * 60 );

  let minutes = Math.floor(diffDates / ( 1000 * 60 ));
  diffDates = diffDates % ( 1000 * 60);

  let seconds = Math.floor(diffDates / 1000);

  if( date > 365 ){
    date = date - 366;
  }
  
  if( date == 0 ){
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