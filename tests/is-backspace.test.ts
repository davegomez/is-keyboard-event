import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";
import {
  CODE_BACK_SPACE,
  VALUE_BACK_SPACE,
} from "https://deno.land/x/keycode@v3.1.0/mod.ts";
import { mockKeyboardEvent } from "./utils.ts";
import { isBackspace } from "../mod.ts";

Deno.test("isBackspace keypress with code", () => {
  const event = mockKeyboardEvent("keypress", { code: CODE_BACK_SPACE });
  assertEquals(isBackspace(event), true);
});

Deno.test("isBackspace keypress with key", () => {
  const event = mockKeyboardEvent("keypress", { key: VALUE_BACK_SPACE });
  assertEquals(isBackspace(event), true);
});

Deno.test("isBackspace keyup with code", () => {
  const event = mockKeyboardEvent("keyup", { code: CODE_BACK_SPACE });
  assertEquals(isBackspace(event), true);
});

Deno.test("isBackspace keyup with key", () => {
  const event = mockKeyboardEvent("keyup", { key: VALUE_BACK_SPACE });
  assertEquals(isBackspace(event), true);
});

Deno.test("isBackspace keydown with code", () => {
  const event = mockKeyboardEvent("keydown", { code: CODE_BACK_SPACE });
  assertEquals(isBackspace(event), true);
});

Deno.test("isBackspace keydown with key", () => {
  const event = mockKeyboardEvent("keydown", { key: VALUE_BACK_SPACE });
  assertEquals(isBackspace(event), true);
});
