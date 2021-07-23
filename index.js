class Flames {
	constructor(x,y) {
		this.worker(x,y);
	}
	worker(x,y) {
		let x_array = x.toLowerCase().replace(/\s+/g).split("");
		let y_array = y.toLowerCase().replace(/\s+/g).split("");
		let counter = 0;
		loop1:
		for (let i = 0; i < x_array.length; i++) {
			loop2:
			for (let j = 0; j < y_array.length; j++) {
				counter++;
				if (x_array[i] == y_array[j]) {
					x_array.splice(i, 1);
					y_array.splice(j, 1);
					this.worker(x_array.join(""), y_array.join(""));
					break loop1;
				}
			}
		}
		if (counter == (x_array.length * y_array.length)) {
			this.computed = (x_array.length+y_array.length);
		}
	}
	compute() {
		let flames_tree = {
			1:"Friends",
			2:"Lovers",
			3:"Admirers",
			4:"Married",
			5:"Enemies",
			6:"Secret Lovers"
		};
		let flames_determinant = function(x) {
			while (x > 0) {
				x -= 6;
			}
			return x;
		}
		let result = flames_determinant(this.computed);
		if (result <= 0) {
			result = result + 6;
		}
		return flames_tree[result];
	}
}

let flames = new Flames('Person A', 'Person B').compute();
//Returns the status of both members as Friends, Lovers, e.t.c;