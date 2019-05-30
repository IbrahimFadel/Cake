import { Cake } from "./src/Cake.js";

const app = new Cake.Application({
	width: 800,
	height: 600,
	colour: [255, 0, 0, 100]
});
document.body.appendChild(app.canvas);
