import { Cake } from "./src/Cake.js";

const app = new Cake.Application({
	width: 800,
	height: 600,
	colour: [255, 0, 0, 100]
});
document.body.appendChild(app.canvas);

app.Graphics.drawTriangle(400, 600, 0, 600, 800, 600);
