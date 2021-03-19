import {
  CODE_ESCAPE,
  VALUE_ESCAPE,
} from "https://deno.land/x/keycode@v3.1.0/mod.ts";
import { isKeyboardEvent } from "./is-keyboard-event.ts";

const isEscape = ({ code, key, type }: KeyboardEvent): boolean =>
  isKeyboardEvent(type) && (code === CODE_ESCAPE || key === VALUE_ESCAPE);

export { isEscape };
export default isEscape;
