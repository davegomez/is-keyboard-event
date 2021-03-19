import {
  CODE_BACK_SPACE,
  VALUE_BACK_SPACE,
} from "https://deno.land/x/keycode@v3.1.0/mod.ts";
import { is } from "./is.ts";

const isBackspace = is(CODE_BACK_SPACE, VALUE_BACK_SPACE);

export { isBackspace };
export default isBackspace;
