const isKeyboardEvent = (type: string): boolean =>
  type === "keypress" || type === "keyup" || type === "keydown";

export { isKeyboardEvent };
export default isKeyboardEvent;
