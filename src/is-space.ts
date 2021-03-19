import {
  CODE_SPACE,
  VALUE_SPACE,
} from "https://deno.land/x/keycode@v3.1.0/mod.ts";
import { is } from "./is.ts";

const isSpace = is(CODE_SPACE, VALUE_SPACE);

export { isSpace };
export default isSpace;
