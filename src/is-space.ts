import {
  CODE_SPACE,
  VALUE_SPACE,
} from "https://deno.land/x/keycode@v3.1.0/mod.ts";
import { isKeyboardEvent } from "./is-keyboard-event.ts";

const isSpace = ({ code, key, type }: KeyboardEvent): boolean =>
  isKeyboardEvent(type) && (code === CODE_SPACE || key === VALUE_SPACE);

export { isSpace };
export default isSpace;
