import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";
import {
  CODE_DASH,
  VALUE_DASH,
} from "https://deno.land/x/keycode@v3.1.0/mod.ts";
import { mockKeyboardEvent } from "./utils.ts";
import { isDash } from "../mod.ts";

Deno.test("isDash keypress with code", () => {
  const event = mockKeyboardEvent("keypress", { code: CODE_DASH });
  assertEquals(isDash(event), true);
});

Deno.test("isDash keypress with key", () => {
  const event = mockKeyboardEvent("keypress", { key: VALUE_DASH });
  assertEquals(isDash(event), true);
});

Deno.test("isDash keyup with code", () => {
  const event = mockKeyboardEvent("keyup", { code: CODE_DASH });
  assertEquals(isDash(event), true);
});

Deno.test("isDash keyup with key", () => {
  const event = mockKeyboardEvent("keyup", { key: VALUE_DASH });
  assertEquals(isDash(event), true);
});

Deno.test("isDash keydown with code", () => {
  const event = mockKeyboardEvent("keydown", { code: CODE_DASH });
  assertEquals(isDash(event), true);
});

Deno.test("isDash keydown with key", () => {
  const event = mockKeyboardEvent("keydown", { key: VALUE_DASH });
  assertEquals(isDash(event), true);
});

Deno.test("!isDash when Alt key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_DASH,
    altKey: true,
  });
  assertEquals(isDash(event), false);
});

Deno.test("!isDash when Ctrl key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_DASH,
    ctrlKey: true,
  });
  assertEquals(isDash(event), false);
});

Deno.test("!isDash when Shift key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_DASH,
    shiftKey: true,
  });
  assertEquals(isDash(event), false);
});

Deno.test("!isDash when Meta key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_DASH,
    metaKey: true,
  });
  assertEquals(isDash(event), false);
});
