import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";
import {
  CODE_EQUALS,
  VALUE_EQUALS,
} from "https://deno.land/x/keycode@v3.1.0/mod.ts";
import { mockKeyboardEvent } from "./utils.ts";
import { isEqual } from "../mod.ts";

Deno.test("isEqual keypress with code", () => {
  const event = mockKeyboardEvent("keypress", { code: CODE_EQUALS });
  assertEquals(isEqual(event), true);
});

Deno.test("isEqual keypress with key", () => {
  const event = mockKeyboardEvent("keypress", { key: VALUE_EQUALS });
  assertEquals(isEqual(event), true);
});

Deno.test("isEqual keyup with code", () => {
  const event = mockKeyboardEvent("keyup", { code: CODE_EQUALS });
  assertEquals(isEqual(event), true);
});

Deno.test("isEqual keyup with key", () => {
  const event = mockKeyboardEvent("keyup", { key: VALUE_EQUALS });
  assertEquals(isEqual(event), true);
});

Deno.test("isEqual keydown with code", () => {
  const event = mockKeyboardEvent("keydown", { code: CODE_EQUALS });
  assertEquals(isEqual(event), true);
});

Deno.test("isEqual keydown with key", () => {
  const event = mockKeyboardEvent("keydown", { key: VALUE_EQUALS });
  assertEquals(isEqual(event), true);
});
