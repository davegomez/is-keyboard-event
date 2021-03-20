import { isKeyboardEvent } from "./is-keyboard-event.ts";

const is = (codeArg: string, keyArg: string, mod: [string?] = []) => ({
  altKey,
  code,
  ctrlKey,
  key,
  metaKey,
  shiftKey,
  type,
}: KeyboardEvent): boolean =>
  isKeyboardEvent(type) &&
  (code === codeArg || key === keyArg) &&
  altKey === mod.includes("Alt") &&
  ctrlKey === mod.includes("Ctrl") &&
  metaKey === mod.includes("Meta") &&
  shiftKey === mod.includes("Shift");

export { is };
export default is;
