const n = 5;

const solve = n => n === 1 ? 1 : solve(n - 1) + 4 * (n - 1);

console.log(n);
console.log(solve(n));

const answers = [
	[1, 1],
	[2, 5],
	[3, 13],
	[4, 25],
	[5, 41],
];

// 1 -> 2: 1 | 1  -> 5 : 4
// 2 -> 3: 1 | 5  -> 13: 8
// 3 -> 4: 1 | 13 -> 25: 12
// 4 -> 5: 1 | 25 -> 41: 16

for (let x = 0; x < 9; x++) {
	for (let y = 0; y < 9; y++) {
		const div = document.createElement("div");
		div.gridRow = `${y + 1}`;
		div.gridColumn = `${x + 1}`;
		div.addEventListener("click", () => {
			div.active = !div.active;
			div.classList.toggle("active", div.active);
		});
		document.body.append(div);
	}
}
