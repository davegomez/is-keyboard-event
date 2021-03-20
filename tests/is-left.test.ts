import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";
import {
  CODE_LEFT,
  VALUE_LEFT,
} from "https://deno.land/x/keycode@v3.1.0/mod.ts";
import { mockKeyboardEvent } from "./utils.ts";
import { isLeft } from "../mod.ts";

Deno.test("isLeft keypress with code", () => {
  const event = mockKeyboardEvent("keypress", { code: CODE_LEFT });
  assertEquals(isLeft(event), true);
});

Deno.test("isLeft keypress with key", () => {
  const event = mockKeyboardEvent("keypress", { key: VALUE_LEFT });
  assertEquals(isLeft(event), true);
});

Deno.test("isLeft keyup with code", () => {
  const event = mockKeyboardEvent("keyup", { code: CODE_LEFT });
  assertEquals(isLeft(event), true);
});

Deno.test("isLeft keyup with key", () => {
  const event = mockKeyboardEvent("keyup", { key: VALUE_LEFT });
  assertEquals(isLeft(event), true);
});

Deno.test("isLeft keydown with code", () => {
  const event = mockKeyboardEvent("keydown", { code: CODE_LEFT });
  assertEquals(isLeft(event), true);
});

Deno.test("isLeft keydown with key", () => {
  const event = mockKeyboardEvent("keydown", { key: VALUE_LEFT });
  assertEquals(isLeft(event), true);
});

Deno.test("!isLeft when Alt key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_LEFT,
    altKey: true,
  });
  assertEquals(isLeft(event), false);
});

Deno.test("!isLeft when Ctrl key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_LEFT,
    ctrlKey: true,
  });
  assertEquals(isLeft(event), false);
});

Deno.test("!isLeft when Shift key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_LEFT,
    shiftKey: true,
  });
  assertEquals(isLeft(event), false);
});

Deno.test("!isLeft when Meta key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_LEFT,
    metaKey: true,
  });
  assertEquals(isLeft(event), false);
});
