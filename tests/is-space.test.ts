import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";
import {
  CODE_SPACE,
  VALUE_SPACE,
} from "https://deno.land/x/keycode@v3.1.0/mod.ts";
import { mockKeyboardEvent } from "./utils.ts";
import { isSpace } from "../mod.ts";

Deno.test("isSpace keypress with code", () => {
  const event = mockKeyboardEvent("keypress", { code: CODE_SPACE });
  assertEquals(isSpace(event), true);
});

Deno.test("isSpace keypress with key", () => {
  const event = mockKeyboardEvent("keypress", { key: VALUE_SPACE });
  assertEquals(isSpace(event), true);
});

Deno.test("isSpace keyup with code", () => {
  const event = mockKeyboardEvent("keyup", { code: CODE_SPACE });
  assertEquals(isSpace(event), true);
});

Deno.test("isSpace keyup with key", () => {
  const event = mockKeyboardEvent("keyup", { key: VALUE_SPACE });
  assertEquals(isSpace(event), true);
});

Deno.test("isSpace keydown with code", () => {
  const event = mockKeyboardEvent("keydown", { code: CODE_SPACE });
  assertEquals(isSpace(event), true);
});

Deno.test("isSpace keydown with key", () => {
  const event = mockKeyboardEvent("keydown", { key: VALUE_SPACE });
  assertEquals(isSpace(event), true);
});
