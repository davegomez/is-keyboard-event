import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";
import {
  CODE_ENTER,
  VALUE_ENTER,
} from "https://deno.land/x/keycode@v3.1.0/mod.ts";
import { mockKeyboardEvent } from "./utils.ts";
import { isEnter } from "../mod.ts";

Deno.test("isEnter keypress with code", () => {
  const event = mockKeyboardEvent("keypress", { code: CODE_ENTER });
  assertEquals(isEnter(event), true);
});

Deno.test("isEnter keypress with key", () => {
  const event = mockKeyboardEvent("keypress", { key: VALUE_ENTER });
  assertEquals(isEnter(event), true);
});

Deno.test("isEnter keyup with code", () => {
  const event = mockKeyboardEvent("keyup", { code: CODE_ENTER });
  assertEquals(isEnter(event), true);
});

Deno.test("isEnter keyup with key", () => {
  const event = mockKeyboardEvent("keyup", { key: VALUE_ENTER });
  assertEquals(isEnter(event), true);
});

Deno.test("isEnter keydown with code", () => {
  const event = mockKeyboardEvent("keydown", { code: CODE_ENTER });
  assertEquals(isEnter(event), true);
});

Deno.test("isEnter keydown with key", () => {
  const event = mockKeyboardEvent("keydown", { key: VALUE_ENTER });
  assertEquals(isEnter(event), true);
});

Deno.test("!isEnter when Alt key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_ENTER,
    altKey: true,
  });
  assertEquals(isEnter(event), false);
});

Deno.test("!isEnter when Ctrl key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_ENTER,
    ctrlKey: true,
  });
  assertEquals(isEnter(event), false);
});

Deno.test("!isEnter when Shift key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_ENTER,
    shiftKey: true,
  });
  assertEquals(isEnter(event), false);
});

Deno.test("!isEnter when Meta key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_ENTER,
    metaKey: true,
  });
  assertEquals(isEnter(event), false);
});
