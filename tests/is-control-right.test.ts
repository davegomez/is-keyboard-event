import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";
import {
  CODE_CONTROL_RIGHT,
  VALUE_CONTROL,
} from "https://deno.land/x/keycode@v3.1.0/mod.ts";
import { mockKeyboardEvent } from "./utils.ts";
import { isCtrlLeft } from "../mod.ts";

Deno.test("isCtrlLeft keyup", () => {
  const event = mockKeyboardEvent("keyup", {
    code: CODE_CONTROL_RIGHT,
    key: VALUE_CONTROL,
  });
  assertEquals(isCtrlLeft(event), true);
});

Deno.test("isCtrlLeft keydown", () => {
  const event = mockKeyboardEvent("keydown", {
    code: CODE_CONTROL_RIGHT,
    key: VALUE_CONTROL,
  });
  assertEquals(isCtrlLeft(event), true);
});

Deno.test("!isCtrlLeft when Alt key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_CONTROL_RIGHT,
    key: VALUE_CONTROL,
    altKey: true,
  });
  assertEquals(isCtrlLeft(event), false);
});

Deno.test("!isCtrlLeft when Ctrl key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_CONTROL_RIGHT,
    key: VALUE_CONTROL,
    shiftKey: true,
  });
  assertEquals(isCtrlLeft(event), false);
});

Deno.test("!isCtrlLeft when Meta key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_CONTROL_RIGHT,
    key: VALUE_CONTROL,
    metaKey: true,
  });
  assertEquals(isCtrlLeft(event), false);
});
