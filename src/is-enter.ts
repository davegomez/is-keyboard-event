import {
  CODE_ENTER,
  VALUE_ENTER,
} from "https://deno.land/x/keycode@v3.1.0/mod.ts";
import { is } from "./is.ts";

const isEnter = is(CODE_ENTER, VALUE_ENTER);

export { isEnter };
export default isEnter;
