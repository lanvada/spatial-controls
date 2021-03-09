import { DemoManager } from "three-demo";
import { Event as Event3, sRGBEncoding, WebGLRenderer } from "three";
import { SpatialControlsDemo } from "./demos/SpatialControlsDemo";

/**
 * A demo manager.
 */

let manager: DemoManager;

/**
 * The main render loop.
 *
 * @param timestamp - The current time in milliseconds.
 */

function render(timestamp: number): void {

	requestAnimationFrame(render);
	manager.render(timestamp);

}

/**
 * Performs initialization tasks when the page has been fully loaded.
 *
 * @param event - An event.
 */

window.addEventListener("load", (event: Event) => {

	const debug = (window.location.href.indexOf("localhost") !== -1);
	const viewport = document.getElementById("viewport");

	const renderer = new WebGLRenderer({
		powerPreference: "high-performance",
		antialias: true,
		stencil: false,
		alpha: false,
		depth: true
	});

	renderer.outputEncoding = sRGBEncoding;
	renderer.debug.checkShaderErrors = debug;
	renderer.setSize(viewport.clientWidth, viewport.clientHeight);
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setClearColor(0x000000, 0.0);

	manager = new DemoManager(viewport, {
		aside: document.getElementById("aside"),
		renderer
	});

	manager.addEventListener("change", (event: Event3) => {

		document.querySelector(".loading").classList.remove("hidden");

	});

	manager.addEventListener("load", (event: Event3) => {

		document.querySelector(".loading").classList.add("hidden");

	});

	manager.addDemo(new SpatialControlsDemo());
	requestAnimationFrame(render);

});

/**
 * Handles browser resizing.
 *
 * @param event - An event.
 */

window.addEventListener("resize", (event: Event) => {

	const width = window.innerWidth;
	const height = window.innerHeight;
	manager.setSize(width, height);

});

/**
 * Performs initialization tasks when the document is ready.
 *
 * @param event - An event.
 */

document.addEventListener("DOMContentLoaded", (event: Event) => {

	const img = document.querySelector(".info img");
	const div = document.querySelector(".info div");

	if(img !== null && div !== null) {

		img.addEventListener("click", (event: Event) => {

			div.classList.toggle("hidden");

		});

	}

});

/**
 * Handles keyboard events.
 *
 * @param event - An event.
 */

document.addEventListener("keyup", (event: KeyboardEvent) => {

	if(event.key === "h") {

		const aside = document.querySelector("aside");
		const footer = document.querySelector("footer");

		event.preventDefault();
		aside.classList.toggle("hidden");
		footer.classList.toggle("hidden");

	}

});
