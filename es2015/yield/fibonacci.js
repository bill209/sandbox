function* fibonacci() {
	var fn1 = 0;
	var fn2 = 1;
	while (true) {
		var current = fn1;
		fn1 = fn2;
		fn2 = current + fn1;
		console.log("current",current);
		
		var reset = yield current;

		if (reset === 8) {
			fn1 = 0;
			fn2 = 1;
		}
	}
}

var sequence = fibonacci();
console.log("result: ", sequence.next(1).value);     // 0
console.log("result: ", sequence.next(2).value);     // 1
console.log("result: ", sequence.next(3).value);     // 1
console.log("result: ", sequence.next(4).value);     // 2
console.log("result: ", sequence.next(5).value);     // 3
console.log("result: ", sequence.next(6).value);     // 5
console.log("result: ", sequence.next(7).value);     // 8
console.log("result: ", sequence.next(8).value);     // 0 - reset
console.log("result: ", sequence.next(1).value);     // 1
console.log("result: ", sequence.next(2).value);     // 1
console.log("result: ", sequence.next(3).value);     // 2