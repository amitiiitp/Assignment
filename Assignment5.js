var numbersToBeAdded = [1, 2, 4, 67, 23, 12, 73, 94, 43, 62, 8, 54, 23, 28, 11, 33];
function addAsynchronously(a, b) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      return resolve(a + b);
    }, 10 * Math.random());
  });
}

var sum = numbersToBeAdded[0], i = 1;

var callback = function (sumSoFar) {

  if (i < numbersToBeAdded.length) {
    console.log(`sum of ${sum} and ${numbersToBeAdded[i]} is ${sumSoFar}`);
    i += 1;
    sum = sumSoFar;
    fun();
  }
}
var fun = function () {
  addAsynchronously(sum, numbersToBeAdded[i]).then(callback)
}
fun();

