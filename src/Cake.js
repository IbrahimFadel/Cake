import { CakeApplication as Application } from "./Application.js";
import { Graphics } from "./Graphics.js";
import { Graphic } from "./Graphic.js";
import { Helpers } from "./Helpers.js";

export const Cake = {
	Helpers: new Helpers(),
	Application: Application,
	Graphics: Graphics,
	Graphic: Graphic
};
