// Program for printing number from 1 to 50 after every 1 second
/*
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


*/

var count = 1;

var fun = function (value) {
  setTimeout(function () {
    fun3(value);
  }, 1000);
}

var fun3 = function (value) {
  console.log(value);
  count += 1;
  fun1();
}

var fun1 = function () {
  if (count <= 50) {
    fun(count);
  }
}

fun1();



