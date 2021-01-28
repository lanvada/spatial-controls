import test from "ava";
import { ZoomSettings } from "../../";

test("can be instantiated", t => {

	const object = new ZoomSettings();

	t.truthy(object);

});

test("can be cloned", t => {

	const object = new ZoomSettings();

	t.truthy(object.clone());

});
