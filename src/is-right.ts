import {
  CODE_RIGHT,
  VALUE_RIGHT,
} from "https://deno.land/x/keycode@v3.1.0/mod.ts";
import { is } from "./is.ts";

const isRight = is(CODE_RIGHT, VALUE_RIGHT);

export { isRight };
export default isRight;
