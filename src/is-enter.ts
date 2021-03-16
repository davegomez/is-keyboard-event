import { isKeyboardEvent } from "./is-keyboard-event.ts";

const isEnter = ({ code, key, keyCode, type }: KeyboardEvent): boolean =>
  isKeyboardEvent(type) &&
  (code === "Enter" || key === "Enter" || keyCode === 13);

export { isEnter };
export default isEnter;
