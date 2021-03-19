import {
  CODE_EQUALS,
  VALUE_EQUALS,
} from "https://deno.land/x/keycode@v3.1.0/mod.ts";
import { is } from "./is.ts";

const isEqual = is(CODE_EQUALS, VALUE_EQUALS);

export { isEqual };
export default isEqual;
