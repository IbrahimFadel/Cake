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
		const gl = this.gl;
		if (this.type === 0) {
			const x1 = Cake.Helpers.mapCoordToVert(
				this.settings.x1,
				this.app.canvas.width
			);
			const x2 = Cake.Helpers.mapCoordToVert(
				this.settings.x2,
				this.app.canvas.width
			);
			const x3 = Cake.Helpers.mapCoordToVert(
				this.settings.x3,
				this.app.canvas.width
			);
			const y1 = Cake.Helpers.mapCoordToVert(
				this.settings.y1,
				this.app.canvas.height
			);
			const y2 = Cake.Helpers.mapCoordToVert(
				this.settings.y1,
				this.app.canvas.height
			);
			const y3 = Cake.Helpers.mapCoordToVert(
				this.settings.y1,
				this.app.canvas.height
			);
			console.log(x1, y1);
			console.log(x2, y2);
			console.log(x3, y3);
			// this.vertices = [
			// 	x1,
			// 	y1,
			// 	1.0,
			// 	0.0,
			// 	0.0,
			// 	x2,
			// 	y2,
			// 	0.0,
			// 	1.0,
			// 	0.0,
			// 	x3,
			// 	y3,
			// 	0.0,
			// 	0.0,
			// 	1.0
			// ];
			this.vertices = [
				0,
				0.5,
				1.0,
				0.0,
				0.0,
				-0.5,
				-0.5,
				0.0,
				1.0,
				0.0,
				0.5,
				-0.5,
				0.0,
				0.0,
				1.0
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

	makeVertices() {
		// this.createBufferObject();
		// console.log(
		// 	Cake.Helpers.mapCoordToVert(800, 0, this.app.canvas.width),
		// 	Cake.Helpers.mapCoordToVert(0, 0, this.app.canvas.width)
		// );
	}
}
