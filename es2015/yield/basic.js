"use strict";

let foo = (x, ms) => {
  setTimeout(function() {
    console.log('Hello World', x);
    it.next();
  }, ms);
};

function* main() {
  yield foo('a', 1000);
  yield foo('b', 25);
  foo('c', 1200);
  yield foo('d', 250);

}

let it = main();
it.next();
