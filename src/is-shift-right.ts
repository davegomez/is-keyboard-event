import {
  CODE_SHIFT_RIGHT,
  VALUE_SHIFT,
} from "https://deno.land/x/keycode@v3.1.0/mod.ts";
import { is } from "./is.ts";

const isShiftRight = is(CODE_SHIFT_RIGHT, VALUE_SHIFT);

export { isShiftRight };
export default isShiftRight;
