// Program for printing number from 1 to 50 after every 1 second
var count = 0;
var fun = function () {
  if (count < 50) {
    count += 1;
    console.log(count);
  }
  else {
    clearInterval(id);
    console.log('BYE');
  }
}
var id = setInterval(fun, 1000);







