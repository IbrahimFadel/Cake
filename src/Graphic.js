import { Cake } from "./Cake.js";

export class Graphic {
	constructor(type, app, settings) {
		this.type = type;
		this.app = app;
		this.settings = settings;
		this.gl = this.app.gl;
		this.vertices = [];
		this.vertexBufferObject = undefined;
		this.positionAttribLocation = undefined;
		this.colourAttribLocation = undefined;
		this.make();
	}

	make() {
		if (this.type === 0) {
			this.makeTriangle();
		} else if (this.type === 1) {
			this.makeRect();
		}
	}

	makeRect() {
		const gl = this.gl;

		const x1 = Cake.Helpers.mapCoordToVert(
			this.settings.x,
			this.app.canvas.width,
			"w"
		);
		const y1 = Cake.Helpers.mapCoordToVert(
			this.settings.y,
			this.app.canvas.height,
			"h"
		);
		const x2 = Cake.Helpers.mapCoordToVert(
			this.settings.x,
			this.app.canvas.width,
			"w"
		);
		const y2 = Cake.Helpers.mapCoordToVert(
			this.settings.y + this.settings.h,
			this.app.canvas.height,
			"h"
		);
		const x3 = Cake.Helpers.mapCoordToVert(
			this.settings.x + this.settings.w,
			this.app.canvas.width,
			"w"
		);
		const y3 = Cake.Helpers.mapCoordToVert(
			this.settings.y + this.settings.h,
			this.app.canvas.height,
			"h"
		);
		const x4 = Cake.Helpers.mapCoordToVert(
			this.settings.x + this.settings.w,
			this.app.canvas.width,
			"w"
		);

		const y4 = Cake.Helpers.mapCoordToVert(
			this.settings.y,
			this.app.canvas.height,
			"h"
		);

		this.vertices = [
			x1,
			y1,
			this.settings.colour.r,
			this.settings.colour.g,
			this.settings.colour.b,
			x2,
			y2,
			this.settings.colour.r,
			this.settings.colour.g,
			this.settings.colour.b,
			x3,
			y3,
			this.settings.colour.r,
			this.settings.colour.g,
			this.settings.colour.b,
			x4,
			y4,
			this.settings.colour.r,
			this.settings.colour.g,
			this.settings.colour.b
		];

		this.vertexBufferObject = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBufferObject);
		gl.bufferData(
			gl.ARRAY_BUFFER,
			new Float32Array(this.vertices),
			gl.STATIC_DRAW
		);
		this.positionAttribLocation = gl.getAttribLocation(
			this.app.shaderProgram,
			"vertPosition"
		);
		this.colourAttribLocation = gl.getAttribLocation(
			this.app.shaderProgram,
			"vertColour"
		);
		gl.vertexAttribPointer(
			this.positionAttribLocation,
			2,
			gl.FLOAT,
			gl.FALSE,
			5 * Float32Array.BYTES_PER_ELEMENT,
			0
		);
		gl.vertexAttribPointer(
			this.colourAttribLocation,
			3,
			gl.FLOAT,
			gl.FALSE,
			5 * Float32Array.BYTES_PER_ELEMENT,
			2 * Float32Array.BYTES_PER_ELEMENT
		);
		gl.enableVertexAttribArray(this.positionAttribLocation);
		gl.enableVertexAttribArray(this.colourAttribLocation);
		gl.useProgram(this.app.shaderProgram);
		gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	}

	makeTriangle() {
		const gl = this.gl;

		const x1 = Cake.Helpers.mapCoordToVert(
			this.settings.x1,
			this.app.canvas.width,
			"w"
		);
		const x2 = Cake.Helpers.mapCoordToVert(
			this.settings.x2,
			this.app.canvas.width,
			"w"
		);
		const x3 = Cake.Helpers.mapCoordToVert(
			this.settings.x3,
			this.app.canvas.width,
			"w"
		);
		const y1 = Cake.Helpers.mapCoordToVert(
			this.settings.y1,
			this.app.canvas.height,
			"h"
		);
		const y2 = Cake.Helpers.mapCoordToVert(
			this.settings.y2,
			this.app.canvas.height,
			"h"
		);
		const y3 = Cake.Helpers.mapCoordToVert(
			this.settings.y3,
			this.app.canvas.height,
			"h"
		);
		this.vertices = [
			x1,
			y1,
			this.settings.colour.r,
			this.settings.colour.g,
			this.settings.colour.b,
			x2,
			y2,
			this.settings.colour.r,
			this.settings.colour.g,
			this.settings.colour.b,
			x3,
			y3,
			this.settings.colour.r,
			this.settings.colour.g,
			this.settings.colour.b
		];
		this.vertexBufferObject = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBufferObject);
		gl.bufferData(
			gl.ARRAY_BUFFER,
			new Float32Array(this.vertices),
			gl.STATIC_DRAW
		);
		this.positionAttribLocation = gl.getAttribLocation(
			this.app.shaderProgram,
			"vertPosition"
		);
		this.colourAttribLocation = gl.getAttribLocation(
			this.app.shaderProgram,
			"vertColour"
		);
		gl.vertexAttribPointer(
			this.positionAttribLocation,
			2,
			gl.FLOAT,
			gl.FALSE,
			5 * Float32Array.BYTES_PER_ELEMENT,
			0
		);
		gl.vertexAttribPointer(
			this.colourAttribLocation,
			3,
			gl.FLOAT,
			gl.FALSE,
			5 * Float32Array.BYTES_PER_ELEMENT,
			2 * Float32Array.BYTES_PER_ELEMENT
		);
		gl.enableVertexAttribArray(this.positionAttribLocation);
		gl.enableVertexAttribArray(this.colourAttribLocation);
		gl.useProgram(this.app.shaderProgram);
		gl.drawArrays(gl.TRIANGLES, 0, 3);
	}
}
