import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";
import { CODE_UP, VALUE_UP } from "https://deno.land/x/keycode@v3.1.0/mod.ts";
import { mockKeyboardEvent } from "./utils.ts";
import { isUp } from "../mod.ts";

Deno.test("isUp keypress with code", () => {
  const event = mockKeyboardEvent("keypress", { code: CODE_UP });
  assertEquals(isUp(event), true);
});

Deno.test("isUp keypress with key", () => {
  const event = mockKeyboardEvent("keypress", { key: VALUE_UP });
  assertEquals(isUp(event), true);
});

Deno.test("isUp keyup with code", () => {
  const event = mockKeyboardEvent("keyup", { code: CODE_UP });
  assertEquals(isUp(event), true);
});

Deno.test("isUp keyup with key", () => {
  const event = mockKeyboardEvent("keyup", { key: VALUE_UP });
  assertEquals(isUp(event), true);
});

Deno.test("isUp keydown with code", () => {
  const event = mockKeyboardEvent("keydown", { code: CODE_UP });
  assertEquals(isUp(event), true);
});

Deno.test("isUp keydown with key", () => {
  const event = mockKeyboardEvent("keydown", { key: VALUE_UP });
  assertEquals(isUp(event), true);
});

Deno.test("!isUp when Alt key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_UP,
    altKey: true,
  });
  assertEquals(isUp(event), false);
});

Deno.test("!isUp when Ctrl key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_UP,
    ctrlKey: true,
  });
  assertEquals(isUp(event), false);
});

Deno.test("!isUp when Shift key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_UP,
    shiftKey: true,
  });
  assertEquals(isUp(event), false);
});

Deno.test("!isUp when Meta key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_UP,
    metaKey: true,
  });
  assertEquals(isUp(event), false);
});
