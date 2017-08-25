"use strict";

let foo = (x, ms) => {
  setTimeout(function() {
    console.log('you yielded', x);
    it.next();
  }, ms);
};

let bar = (x, ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log('you promised: ', x);
      if(x !== 'bad'){
        resolve(x + ' is resolved');
      } else {
        reject(x + ' is rejected');
      }
    }, ms);
  });
};

let p1 = bar;
let p2 = bar;

let it = main();
it.next();

/**
 * the work engine
 */
function* main() {
  yield foo('a', 500);
  console.log('a is resolved');

  // using secondary 'reject' function
  let v = yield Promise.all([p1('b', 1000), p2('c', 50)]).then((values) => {
    it.next(values);
  }, (reason) => {
    console.log(reason);
  });
  console.log('results from promise: ', v);

  yield foo('d', 25);
  console.log('d is resolved');

  // using .catch
  let z = yield Promise.all([p1('e', 1000), p2('bad', 50)]).then((values) => {
    it.next(values);
  })
    .catch((reason) => {
      console.log('rejected for ' + reason);
    });
  console.log('results from promise: ', z);

  // will not get called due to prior rejection
  foo('g', 25);
  console.log('g is resolved');

}

