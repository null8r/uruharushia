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

  var days = diffDates / ( 1000 * 60 * 60 * 24 );
  diffDates = diffDates % ( 1000 * 60 * 60 * 24 );

  var hours = diffDates / ( 1000 * 60 * 60 );
  diffDates = diffDates % ( 1000 * 60 * 60 );

  var minutes = diffDates / ( 1000 * 60 );
  diffDates = diffDates % ( 1000 * 60);

  var seconds = diffDates / 1000;

  document.getElementById('days').innerHTML = Math.floor(days);
  document.getElementById('hours').innerHTML = Math.floor(hours);
  document.getElementById('minutes').innerHTML = Math.floor(minutes);
  document.getElementById('seconds').innerHTML = Math.floor(seconds);
}

setInterval('main()',1000);