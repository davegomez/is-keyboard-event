import { CODE_TAB, VALUE_TAB } from "https://deno.land/x/keycode@v3.1.0/mod.ts";
import { is } from "./is.ts";

const isTab = is(CODE_TAB, VALUE_TAB);

export { isTab };
export default isTab;
