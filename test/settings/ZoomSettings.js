import test from "ava";
import { ZoomSettings } from "spatial-controls";

test("can be instantiated", t => {

	const object = new ZoomSettings();
	t.pass();

});

test("can be cloned", t => {

	const object = new ZoomSettings();
	object.clone();
	t.pass();

});
