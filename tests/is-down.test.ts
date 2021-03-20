import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";
import {
  CODE_DOWN,
  VALUE_DOWN,
} from "https://deno.land/x/keycode@v3.1.0/mod.ts";
import { mockKeyboardEvent } from "./utils.ts";
import { isDown } from "../mod.ts";

Deno.test("isDown keypress with code", () => {
  const event = mockKeyboardEvent("keypress", { code: CODE_DOWN });
  assertEquals(isDown(event), true);
});

Deno.test("isDown keypress with key", () => {
  const event = mockKeyboardEvent("keypress", { key: VALUE_DOWN });
  assertEquals(isDown(event), true);
});

Deno.test("isDown keyup with code", () => {
  const event = mockKeyboardEvent("keyup", { code: CODE_DOWN });
  assertEquals(isDown(event), true);
});

Deno.test("isDown keyup with key", () => {
  const event = mockKeyboardEvent("keyup", { key: VALUE_DOWN });
  assertEquals(isDown(event), true);
});

Deno.test("isDown keydown with code", () => {
  const event = mockKeyboardEvent("keydown", { code: CODE_DOWN });
  assertEquals(isDown(event), true);
});

Deno.test("isDown keydown with key", () => {
  const event = mockKeyboardEvent("keydown", { key: VALUE_DOWN });
  assertEquals(isDown(event), true);
});

Deno.test("!isDown when Alt key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_DOWN,
    altKey: true,
  });
  assertEquals(isDown(event), false);
});

Deno.test("!isDown when Ctrl key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_DOWN,
    ctrlKey: true,
  });
  assertEquals(isDown(event), false);
});

Deno.test("!isDown when Shift key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_DOWN,
    shiftKey: true,
  });
  assertEquals(isDown(event), false);
});

Deno.test("!isDown when Meta key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_DOWN,
    metaKey: true,
  });
  assertEquals(isDown(event), false);
});
