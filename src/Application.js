import { Cake } from "./Cake.js";
import { vertexShaderText, fragmentShaderText } from "./Shaders.js";

export class CakeApplication {
	constructor(config) {
		this.VERSION = "0.0.1";
		this.config = config;
		this.WIDTH = this.config.width || 800;
		this.HEIGHT = this.config.height || 600;
		this.COLOUR = this.config.colour || [0, 0, 0];
		this.canvas = undefined;
		this.gl = undefined;
		this.vertexShader = undefined;
		this.fragmentShader = undefined;
		this.shaderProgram = undefined;
		this.printInfo();
		this.createCanvas();
		this.initShaders();
		this.initShaderProgram();

		this.Graphics = new Cake.Graphics(this);
	}

	printInfo() {
		const consoleStyles = [
			"background: linear-gradient(#D33106, #571402)",
			"border: 1px solid #3E0E02",
			"color: white",
			"display: block",
			"text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)",
			"box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset",
			"line-height: 40px",
			"text-align: center",
			"font-weight: bold"
		].join(";");
		console.log("%c Cake - Version " + this.VERSION + " ", consoleStyles);
	}

	createCanvas() {
		this.canvas = document.createElement("canvas");
		this.canvas.width = this.WIDTH;
		this.canvas.height = this.HEIGHT;
		this.gl = this.canvas.getContext("webgl");
		const gl = this.gl;
		if (gl === null) {
			alert(
				"Unable to initialize WebGL. Your browser or machine may not support it."
			);
			return;
		}
		const floatColour = Cake.Helpers.rgba2float(this.COLOUR);
		gl.clearColor(
			floatColour[0],
			floatColour[1],
			floatColour[2],
			floatColour[3]
		);
		gl.clearDepth(1.0);
		gl.enable(gl.DEPTH_TEST);
		gl.depthFunc(gl.LEQUAL);
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	}

	initShaders() {
		const gl = this.gl;
		this.vertexShader = gl.createShader(gl.VERTEX_SHADER);
		this.fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

		gl.shaderSource(this.vertexShader, vertexShaderText);
		gl.shaderSource(this.fragmentShader, fragmentShaderText);

		gl.compileShader(this.vertexShader);
		gl.compileShader(this.fragmentShader);

		if (!gl.getShaderParameter(this.vertexShader, gl.COMPILE_STATUS)) {
			console.error(
				"ERROR! Failed to compile vertex shader",
				gl.getShaderInfoLog(this.vertexShader)
			);
			return;
		}
		if (!gl.getShaderParameter(this.fragmentShader, gl.COMPILE_STATUS)) {
			console.error(
				"ERROR! Failed to compile fragment shader",
				gl.getShaderInfoLog(this.fragmentShader)
			);
			return;
		}
	}

	initShaderProgram() {
		const gl = this.gl;
		this.shaderProgram = gl.createProgram();
		gl.attachShader(this.shaderProgram, this.vertexShader);
		gl.attachShader(this.shaderProgram, this.fragmentShader);
		gl.linkProgram(this.shaderProgram);
		if (!gl.getProgramParameter(this.shaderProgram, gl.LINK_STATUS)) {
			console.error(
				"ERROR! Failed to link shader program",
				gl.getProgramInfoLog(this.shaderProgram)
			);
			return;
		}

		gl.validateProgram(this.shaderProgram);
		if (!gl.getProgramParameter(this.shaderProgram, gl.VALIDATE_STATUS)) {
			console.error(
				"ERROR! Failed to validate shader program",
				gl.getProgramInfoLog(this.shaderProgram)
			);
			return;
		}
	}
}
