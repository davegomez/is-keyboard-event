import {
  CODE_LEFT,
  VALUE_LEFT,
} from "https://deno.land/x/keycode@v3.1.0/mod.ts";
import { is } from "./is.ts";

const isLeft = is(CODE_LEFT, VALUE_LEFT);

export { isLeft };
export default isLeft;
