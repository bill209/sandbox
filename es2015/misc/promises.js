// Async call

let asyncCall = (x) => {
	return new Promise((resolve, reject) => {
		if (x !== 3) {
			resolve('we like the number ' + x);
		} else {
			reject('we do not like the number 3');
		}
	});
};

let nbrs = [1, 3, 5];

// one way to handle errors
for (let nbr of nbrs) {
	asyncCall(nbr).then(
		(val) => console.log("success: " + val),
		(err) => console.log("rejected: " + err)
	);
}

// a second way of handling errors
for (let nbr of nbrs) {
	asyncCall(nbr).then(
		(val) => console.log("success: " + val)
	)
		.catch(
			(err) => console.log("rejected: " + err)
		);
}



