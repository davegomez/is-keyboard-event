import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";
import {
  CODE_ESCAPE,
  VALUE_ESCAPE,
} from "https://deno.land/x/keycode@v3.1.0/mod.ts";
import { mockKeyboardEvent } from "./utils.ts";
import { isEscape } from "../mod.ts";

Deno.test("isEscape keypress with code", () => {
  const event = mockKeyboardEvent("keypress", { code: CODE_ESCAPE });
  assertEquals(isEscape(event), true);
});

Deno.test("isEscape keypress with key", () => {
  const event = mockKeyboardEvent("keypress", { key: VALUE_ESCAPE });
  assertEquals(isEscape(event), true);
});

Deno.test("isEscape keyup with code", () => {
  const event = mockKeyboardEvent("keyup", { code: CODE_ESCAPE });
  assertEquals(isEscape(event), true);
});

Deno.test("isEscape keyup with key", () => {
  const event = mockKeyboardEvent("keyup", { key: VALUE_ESCAPE });
  assertEquals(isEscape(event), true);
});

Deno.test("isEscape keydown with code", () => {
  const event = mockKeyboardEvent("keydown", { code: CODE_ESCAPE });
  assertEquals(isEscape(event), true);
});

Deno.test("isEscape keydown with key", () => {
  const event = mockKeyboardEvent("keydown", { key: VALUE_ESCAPE });
  assertEquals(isEscape(event), true);
});

Deno.test("!isEscape when Alt key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_ESCAPE,
    altKey: true,
  });
  assertEquals(isEscape(event), false);
});

Deno.test("!isEscape when Ctrl key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_ESCAPE,
    ctrlKey: true,
  });
  assertEquals(isEscape(event), false);
});

Deno.test("!isEscape when Shift key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_ESCAPE,
    shiftKey: true,
  });
  assertEquals(isEscape(event), false);
});

Deno.test("!isEscape when Meta key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_ESCAPE,
    metaKey: true,
  });
  assertEquals(isEscape(event), false);
});
