
var numbersToBeAdded = [1, 2, 4, 67, 23, 12, 73, 94, 43, 62, 8, 54, 23, 28, 11, 33];
function addAsynchronously(a, b, callback) {
  setTimeout(function () {
    return callback(null, a + b);
  }, 10 * Math.random());
}

var print = function (x, y) {
  if (count < numbersToBeAdded.length) {
    sumSoFar = y;
    count += 1;
    fun();
  }

  else {
    endOfFunction();
  }

}

var endOfFunction = function () {
  console.log(sumSoFar);
  console.log("BYE");
}
var sumSoFar = 0;
var count = 0;

var fun = function () {
  if (count < numbersToBeAdded.length) {
    addAsynchronously(sumSoFar, numbersToBeAdded[count], print);
  }
}

fun();










