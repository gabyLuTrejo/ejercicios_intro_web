function convertirFahrenheit(){
  var gradosC = document.getElementById('celsius').value;
  var conversion = (gradosC-32)*5/9;
  conversion = Math.round(conversion*100)/100;
  var gradosF = document.getElementById('fahrenheit');
  gradosF.value = conversion;
}

function convertirCelcius(){
  var gradosF = document.getElementById('fahrenheit').value;
  var conversion = gradosF*9/5 +32;
  conversion = Math.round(conversion*100)/100;
  var gradosC = document.getElementById('celsius');
  gradosC.value = conversion;
}
