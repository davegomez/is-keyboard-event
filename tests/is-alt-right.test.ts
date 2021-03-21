import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";
import {
  CODE_ALT_RIGHT,
  VALUE_ALT,
} from "https://deno.land/x/keycode@v3.1.0/mod.ts";
import { mockKeyboardEvent } from "./utils.ts";
import { isAltRight } from "../mod.ts";

Deno.test("isAltRight keyup", () => {
  const event = mockKeyboardEvent("keyup", {
    code: CODE_ALT_RIGHT,
    key: VALUE_ALT,
  });
  assertEquals(isAltRight(event), true);
});

Deno.test("isAltRight keydown", () => {
  const event = mockKeyboardEvent("keydown", {
    code: CODE_ALT_RIGHT,
    key: VALUE_ALT,
  });
  assertEquals(isAltRight(event), true);
});

Deno.test("!isAltRight when Alt key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_ALT_RIGHT,
    key: VALUE_ALT,
    ctrlKey: true,
  });
  assertEquals(isAltRight(event), false);
});

Deno.test("!isAltRight when Ctrl key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_ALT_RIGHT,
    key: VALUE_ALT,
    shiftKey: true,
  });
  assertEquals(isAltRight(event), false);
});

Deno.test("!isAltRight when Meta key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_ALT_RIGHT,
    key: VALUE_ALT,
    metaKey: true,
  });
  assertEquals(isAltRight(event), false);
});
