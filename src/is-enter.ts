import {
  CODE_ENTER,
  VALUE_ENTER,
} from "https://deno.land/x/keycode@v3.1.0/mod.ts";
import { isKeyboardEvent } from "./is-keyboard-event.ts";

const isEnter = ({ code, key, type }: KeyboardEvent): boolean =>
  isKeyboardEvent(type) && (code === CODE_ENTER || key === VALUE_ENTER);

export { isEnter };
export default isEnter;
