import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";
import {
  CODE_ALT_LEFT,
  VALUE_ALT,
} from "https://deno.land/x/keycode@v3.1.0/mod.ts";
import { mockKeyboardEvent } from "./utils.ts";
import { isAltLeft } from "../mod.ts";

Deno.test("isAltLeft keyup", () => {
  const event = mockKeyboardEvent("keyup", {
    code: CODE_ALT_LEFT,
    key: VALUE_ALT,
  });
  assertEquals(isAltLeft(event), true);
});

Deno.test("isAltLeft keydown", () => {
  const event = mockKeyboardEvent("keydown", {
    code: CODE_ALT_LEFT,
    key: VALUE_ALT,
  });
  assertEquals(isAltLeft(event), true);
});

Deno.test("!isAltLeft when Alt key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_ALT_LEFT,
    key: VALUE_ALT,
    ctrlKey: true,
  });
  assertEquals(isAltLeft(event), false);
});

Deno.test("!isAltLeft when Ctrl key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_ALT_LEFT,
    key: VALUE_ALT,
    shiftKey: true,
  });
  assertEquals(isAltLeft(event), false);
});

Deno.test("!isAltLeft when Meta key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_ALT_LEFT,
    key: VALUE_ALT,
    metaKey: true,
  });
  assertEquals(isAltLeft(event), false);
});
