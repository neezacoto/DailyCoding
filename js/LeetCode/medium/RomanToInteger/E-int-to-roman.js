//Emerald's Solution
//New information:
//Symbol.iterator, next(), repeat(),  
/**
 * allows to 
 * for (const value of process.argv.slice(2)) {
		console.log(int_to_roman(new Number(value)));
	}
 */

	const dict = {
		"1": "I",
		"4": "IV",
		"5": "V",
		"9": "IX",
		"10": "X",
		"40": "XL",
		"50": "L",
		"90": "XC",
		"100": "C",
		"400": "CD",
		"500": "D",
		"900": "CM",
		"1000": "M",
		
		[Symbol.iterator]: function* () {
			//the new number converts the string to number, but it's unessesary b/c strings get converted to
			//numbers when getting compared
			//since the object is not yet defined, this is called
			const keys = Object.keys(this).sort((a, b) => a === b ? 0 : new Number(a) < new Number(b) ? 1 : -1);
			let i = 0;
			while(i < keys.length)
				//doing i++ in a statment such as obj[i++] will first evaluate the i, then increment afterwards
				//just like when assigning values a = 2; b = a++; //a = 3 //b = 2
				yield {key: keys[i], value: this[keys[i++]]};
		}
	};

	function int_to_roman(num) {
		let c_num = num;
		let roman = "";
		//getting the iterator from dictionary
		const iterator = dict[Symbol.iterator]();
		//setting the value from next to interation_value.
		//This is because of the pausey nature of iteration. next.value() will hold the current value of each next(),
		//each iteration using next()
		let interation_value = iterator.next().value;

		while(c_num > 0) {
			const nkey = new Number(interation_value.key);

			const repeat = Math.floor(c_num / nkey);

			if (c_num >= nkey) {
				c_num -= nkey * repeat;
				roman += dict[nkey].repeat(repeat);
			}

			if (c_num % nkey)
				interation_value = iterator.next().value;
		}

		return `${num} in roman: ${roman}`;
	}

console.log(int_to_roman(9))