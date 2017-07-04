'use strict';

function printName(first = 'bill', last = 'bob'){
	return `This haiku is for ${first} ${last}.
`
}

console.log(printName());
console.log(printName('suzy','q'));