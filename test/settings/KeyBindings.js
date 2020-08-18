import test from "ava";
import { KeyBindings } from "../../build/spatial-controls.esm.js";

test("can be instantiated", t => {

	const object = new KeyBindings();

	t.truthy(object);

});

test("can be cloned", t => {

	const object = new KeyBindings();

	t.truthy(object.clone());

});
