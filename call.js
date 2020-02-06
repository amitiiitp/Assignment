var fun1 = function () {
  console.log('hii1');
}

var fun2 = function (callback) {
  setTimeout(function () {
    console.log('hii2');
    callback();
  }, 1000);
}
fun2(fun1);
