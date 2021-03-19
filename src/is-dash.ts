import {
  CODE_DASH,
  VALUE_DASH,
} from "https://deno.land/x/keycode@v3.1.0/mod.ts";
import { is } from "./is.ts";

const isDash = is(CODE_DASH, VALUE_DASH);

export { isDash };
export default isDash;
