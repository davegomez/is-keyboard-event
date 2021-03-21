import {
  CODE_ALT_LEFT,
  VALUE_ALT,
} from "https://deno.land/x/keycode@v3.1.0/mod.ts";
import { is } from "./is.ts";

const isAltLeft = is(CODE_ALT_LEFT, VALUE_ALT);

export { isAltLeft };
export default isAltLeft;
