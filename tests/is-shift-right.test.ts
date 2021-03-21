import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";
import {
  CODE_SHIFT_RIGHT,
  VALUE_SHIFT,
} from "https://deno.land/x/keycode@v3.1.0/mod.ts";
import { mockKeyboardEvent } from "./utils.ts";
import { isShiftRight } from "../mod.ts";

Deno.test("isShiftRight keyup", () => {
  const event = mockKeyboardEvent("keyup", {
    code: CODE_SHIFT_RIGHT,
    key: VALUE_SHIFT,
  });
  assertEquals(isShiftRight(event), true);
});

Deno.test("isShiftRight keydown", () => {
  const event = mockKeyboardEvent("keydown", {
    code: CODE_SHIFT_RIGHT,
    key: VALUE_SHIFT,
  });
  assertEquals(isShiftRight(event), true);
});

Deno.test("!isShiftRight when Alt key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_SHIFT_RIGHT,
    key: VALUE_SHIFT,
    altKey: true,
  });
  assertEquals(isShiftRight(event), false);
});

Deno.test("!isShiftRight when Ctrl key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_SHIFT_RIGHT,
    key: VALUE_SHIFT,
    ctrlKey: true,
  });
  assertEquals(isShiftRight(event), false);
});

Deno.test("!isShiftRight when Meta key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_SHIFT_RIGHT,
    key: VALUE_SHIFT,
    metaKey: true,
  });
  assertEquals(isShiftRight(event), false);
});
