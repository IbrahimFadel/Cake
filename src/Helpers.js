export class Helpers {
	rgb2hex(r, g, b, a) {
		r = r.toString(16);
		g = g.toString(16);
		b = b.toString(16);

		if (r.length === 1) r = "0" + r;
		if (g.length === 1) g = "0" + g;
		if (b.length === 1) b = "0" + b;

		if (a != undefined) {
			a = a.toString(16);
			if (a.length === 1) a = "0" + a;

			return "#" + r + g + b + a;
		}

		return "#" + r + g + b;
	}

	rgba2float(colour) {
		const floats = colour.map(val => {
			const newVal = val / 255;
			return newVal;
		});
		return floats;
	}

	mapCoordToVert(coord, max, type) {
		let vert = undefined;
		if (type === "w") vert = ((coord - 0) / (max - 0)) * (1 + 1) - 1;
		else if (type === "h") vert = ((coord - 0) / (max - 0)) * (-1 - 1) + 1;
		return vert;
	}
}
