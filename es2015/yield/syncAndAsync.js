let foo = (x, ms) => {
  setTimeout(function() {
    console.log('Hello World', x);
    it.next();
  }, ms);
};

function* main() {
  yield foo('a', 200);
  secondary(); //yields to a secondary generator function, can pass param as well if needed
  yield; // one of two calls to foo() in parallel
  yield; // two of two
  yield foo('d', 25);
}

let it = main();
it.next();

function secondary() {
  foo('b', 1000);
  foo('c', 50);
};
