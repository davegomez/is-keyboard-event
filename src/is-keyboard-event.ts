const isKeyboardEvent = (type: string): boolean =>
  type === "keyup" || type === "keydown";

export { isKeyboardEvent };
export default isKeyboardEvent;
