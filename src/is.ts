import { isKeyboardEvent } from "./is-keyboard-event.ts";

const is = (codeArg: string, keyArg: string) => ({
  code,
  key,
  type,
}: KeyboardEvent): boolean =>
  isKeyboardEvent(type) && (code === codeArg || key === keyArg);

export { is };
export default is;
