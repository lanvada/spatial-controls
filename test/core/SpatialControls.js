import test from "ava";
import { Quaternion, Vector3 } from "three";
import { SpatialControls } from "../../build/spatial-controls.esm.js";

test("can be instantiated", t => {

	const object = new SpatialControls(new Vector3(), new Quaternion(), null);

	t.truthy(object);

});

test("can copy another instance", t => {

	const controls1 = new SpatialControls(new Vector3(), new Quaternion(), null);
	const controls2 = new SpatialControls(new Vector3(), new Quaternion(), null);

	t.truthy(controls1.copy(controls2));

});
