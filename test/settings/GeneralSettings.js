import test from "ava";
import { GeneralSettings } from "../../build/spatial-controls.esm.js";

test("can be instantiated", t => {

	const object = new GeneralSettings();

	t.truthy(object);

});

test("can be cloned", t => {

	const object = new GeneralSettings();

	t.truthy(object.clone());

});
