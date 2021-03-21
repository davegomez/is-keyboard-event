import {
  CODE_CONTROL_LEFT,
  VALUE_CONTROL,
} from "https://deno.land/x/keycode@v3.1.0/mod.ts";
import { is } from "./is.ts";

const isCtrlLeft = is(CODE_CONTROL_LEFT, VALUE_CONTROL);

export { isCtrlLeft };
export default isCtrlLeft;
