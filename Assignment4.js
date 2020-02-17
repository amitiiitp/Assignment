// import { type } from "os";

function printOne() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('1');
      return resolve();
    }, 100 * Math.random());
  });
}

function printTwo() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('2');
      return resolve();
    }, 100 * Math.random());
  });
}

function printThree() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('3');
      return resolve();
    }, 100 * Math.random());
  });
}

function printFour() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('4');
      return resolve();
    }, 100 * Math.random());
  });
}

printOne().then(function () {
  printTwo().then(function () {
    printThree().then(function () {
      printFour().then(function () {
        console.log("BYE");
      })
    })
  })
})



