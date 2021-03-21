import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";
import {
  CODE_SHIFT_LEFT,
  VALUE_SHIFT,
} from "https://deno.land/x/keycode@v3.1.0/mod.ts";
import { mockKeyboardEvent } from "./utils.ts";
import { isShiftLeft } from "../mod.ts";

Deno.test("isShiftLeft keyup", () => {
  const event = mockKeyboardEvent("keyup", {
    code: CODE_SHIFT_LEFT,
    key: VALUE_SHIFT,
  });
  assertEquals(isShiftLeft(event), true);
});

Deno.test("isShiftLeft keydown", () => {
  const event = mockKeyboardEvent("keydown", {
    code: CODE_SHIFT_LEFT,
    key: VALUE_SHIFT,
  });
  assertEquals(isShiftLeft(event), true);
});

Deno.test("!isShiftLeft when Alt key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_SHIFT_LEFT,
    key: VALUE_SHIFT,
    altKey: true,
  });
  assertEquals(isShiftLeft(event), false);
});

Deno.test("!isShiftLeft when Ctrl key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_SHIFT_LEFT,
    key: VALUE_SHIFT,
    ctrlKey: true,
  });
  assertEquals(isShiftLeft(event), false);
});

Deno.test("!isShiftLeft when Meta key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_SHIFT_LEFT,
    key: VALUE_SHIFT,
    metaKey: true,
  });
  assertEquals(isShiftLeft(event), false);
});
