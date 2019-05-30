import { Cake } from "./src/Cake.js";

const app = new Cake.Application({
	width: 800,
	height: 600,
	colour: [255, 0, 0, 100]
});
document.body.appendChild(app.canvas);

app.Graphics.drawTriangle(400, 0, 0, 600, 800, 600, { r: 214, g: 132, b: 215 });
app.Graphics.drawRect(
	app.canvas.width / 2 - 200,
	app.canvas.height / 2 - 50,
	400,
	100,
	{ r: 0, g: 0, b: 255 }
);
