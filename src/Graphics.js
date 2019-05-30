import { Cake } from "./Cake.js";

export class Graphics {
	constructor(app) {
		this.app = app;
		this.graphics = [];

		this.TRIANGLE = 0;
		this.RECT = 1;
	}

	drawRect(x, y, w, h, colour) {
		if (
			x === undefined ||
			y === undefined ||
			w === undefined ||
			h === undefined
		) {
			console.error("ERROR! drawRect needs 4 parameters. x, y, w, h");
		}
		if (
			colour === undefined ||
			colour.r === undefined ||
			colour.g === undefined ||
			colour.b === undefined
		) {
			console.warn("WARNING! No colour specified. Using default colour");
			colour = { r: 0, g: 0, b: 0 };
		}
		const rgbArr = [colour.r, colour.g, colour.b];
		const newColour = Cake.Helpers.rgba2float(rgbArr);
		const settings = {
			x: x,
			y: y,
			w: w,
			h: h,
			colour: {
				r: newColour[0],
				g: newColour[1],
				b: newColour[2]
			}
		};

		this.graphics.push(new Cake.Graphic(this.RECT, this.app, settings));
	}

	drawTriangle(x1, y1, x2, y2, x3, y3, colour) {
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
		if (
			colour === undefined ||
			colour.r === undefined ||
			colour.g === undefined ||
			colour.b === undefined
		) {
			console.warn("WARNING! No colour specified. Using default colour");
			colour = { r: 0, g: 0, b: 0 };
		}
		const rgbArr = [colour.r, colour.g, colour.b];
		const newColour = Cake.Helpers.rgba2float(rgbArr);
		const newSettings = {
			x1: x1,
			y1: y1,
			x2: x2,
			y2: y2,
			x3: x3,
			y3: y3,
			colour: {
				r: newColour[0],
				g: newColour[1],
				b: newColour[2]
			}
		};
		this.graphics.push(
			new Cake.Graphic(this.TRIANGLE, this.app, newSettings)
		);
	}
}
