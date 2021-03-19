import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

const keyboardEventProperties = {
  DOM_KEY_LOCATION_LEFT: 0,
  DOM_KEY_LOCATION_NUMPAD: 0,
  DOM_KEY_LOCATION_RIGHT: 0,
  DOM_KEY_LOCATION_STANDARD: 0,
  altKey: false,
  bubbles: true,
  cancelable: false,
  cancelBubble: false,
  char: "",
  charCode: 13,
  code: "",
  composed: true,
  ctrlKey: false,
  currentTarget: null,
  detail: 0,
  eventPhase: 0,
  isComposing: false,
  isTrusted: true,
  key: "",
  keyCode: 13,
  location: 0,
  metaKey: false,
  repeat: false,
  returnValue: true,
  shiftKey: false,
  target: null,
  timeStamp: 1616176942935,
  view: null,
  which: 0,
  getModifierState: (keyArg = "keypress") => keyArg === "keypress",
};

const mockKeyboardEvent = (
  typeArg: string,
  keyboardEventInit = {}
): KeyboardEvent =>
  ({
    ...keyboardEventProperties,
    type: typeArg,
    ...keyboardEventInit,
  } as KeyboardEvent);

export { mockKeyboardEvent };
