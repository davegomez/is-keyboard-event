import {
  CODE_ESCAPE,
  VALUE_ESCAPE,
} from "https://deno.land/x/keycode@v3.1.0/mod.ts";
import { is } from "./is.ts";

const isEscape = is(CODE_ESCAPE, VALUE_ESCAPE);

export { isEscape };
export default isEscape;
