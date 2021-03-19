import { CODE_UP, VALUE_UP } from "https://deno.land/x/keycode@v3.1.0/mod.ts";
import { is } from "./is.ts";

const isUp = is(CODE_UP, VALUE_UP);

export { isUp };
export default isUp;
