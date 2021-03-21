import {
  CODE_SHIFT_LEFT,
  VALUE_SHIFT,
} from "https://deno.land/x/keycode@v3.1.0/mod.ts";
import { is } from "./is.ts";

const isShiftLeft = is(CODE_SHIFT_LEFT, VALUE_SHIFT);

export { isShiftLeft };
export default isShiftLeft;
