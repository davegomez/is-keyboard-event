import {
  CODE_DOWN,
  VALUE_DOWN,
} from "https://deno.land/x/keycode@v3.1.0/mod.ts";
import { is } from "./is.ts";

const isDown = is(CODE_DOWN, VALUE_DOWN);

export { isDown };
export default isDown;
