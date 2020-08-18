import test from "ava";
import { RotationSettings } from "../../build/spatial-controls.esm.js";

test("can be instantiated", t => {

	const object = new RotationSettings();

	t.truthy(object);

});

test("can be cloned", t => {

	const object = new RotationSettings();

	t.truthy(object.clone());

});
