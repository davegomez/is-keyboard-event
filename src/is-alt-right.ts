import {
  CODE_ALT_RIGHT,
  VALUE_ALT,
} from "https://deno.land/x/keycode@v3.1.0/mod.ts";
import { is } from "./is.ts";

const isAltRight = is(CODE_ALT_RIGHT, VALUE_ALT);

export { isAltRight };
export default isAltRight;
