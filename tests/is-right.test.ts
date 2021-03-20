import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";
import {
  CODE_RIGHT,
  VALUE_RIGHT,
} from "https://deno.land/x/keycode@v3.1.0/mod.ts";
import { mockKeyboardEvent } from "./utils.ts";
import { isRight } from "../mod.ts";

Deno.test("isRight keypress with code", () => {
  const event = mockKeyboardEvent("keypress", { code: CODE_RIGHT });
  assertEquals(isRight(event), true);
});

Deno.test("isRight keypress with key", () => {
  const event = mockKeyboardEvent("keypress", { key: VALUE_RIGHT });
  assertEquals(isRight(event), true);
});

Deno.test("isRight keyup with code", () => {
  const event = mockKeyboardEvent("keyup", { code: CODE_RIGHT });
  assertEquals(isRight(event), true);
});

Deno.test("isRight keyup with key", () => {
  const event = mockKeyboardEvent("keyup", { key: VALUE_RIGHT });
  assertEquals(isRight(event), true);
});

Deno.test("isRight keydown with code", () => {
  const event = mockKeyboardEvent("keydown", { code: CODE_RIGHT });
  assertEquals(isRight(event), true);
});

Deno.test("isRight keydown with key", () => {
  const event = mockKeyboardEvent("keydown", { key: VALUE_RIGHT });
  assertEquals(isRight(event), true);
});

Deno.test("!isRight when Alt key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_RIGHT,
    altKey: true,
  });
  assertEquals(isRight(event), false);
});

Deno.test("!isRight when Ctrl key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_RIGHT,
    ctrlKey: true,
  });
  assertEquals(isRight(event), false);
});

Deno.test("!isRight when Shift key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_RIGHT,
    shiftKey: true,
  });
  assertEquals(isRight(event), false);
});

Deno.test("!isRight when Meta key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_RIGHT,
    metaKey: true,
  });
  assertEquals(isRight(event), false);
});
