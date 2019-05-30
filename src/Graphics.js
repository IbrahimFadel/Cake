import { Cake } from "./Cake.js";

export class Graphics {
	constructor(app) {
		this.app = app;
		this.graphics = [];

		this.TRIANGLE = 0;
	}

	drawTriangle(x1, y1, x2, y2, x3, y3) {
		if (
			x1 === undefined ||
			x2 === undefined ||
			x3 === undefined ||
			y1 === undefined ||
			y2 === undefined ||
			y3 === undefined
		) {
			console.error(
				"ERROR! Could not draw triangle. Not all vertices given"
			);
		}
		const settings = {
			x1: x1,
			y1: y1,
			x2: x2,
			y2: y2,
			x3: x3,
			y3: y3
		};
		this.graphics.push(new Cake.Graphic(this.TRIANGLE, this.app, settings));
	}
}
