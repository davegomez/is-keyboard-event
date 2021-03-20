import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";
import { CODE_TAB, VALUE_TAB } from "https://deno.land/x/keycode@v3.1.0/mod.ts";
import { mockKeyboardEvent } from "./utils.ts";
import { isTab } from "../mod.ts";

Deno.test("isTab keypress with code", () => {
  const event = mockKeyboardEvent("keypress", { code: CODE_TAB });
  assertEquals(isTab(event), true);
});

Deno.test("isTab keypress with key", () => {
  const event = mockKeyboardEvent("keypress", { key: VALUE_TAB });
  assertEquals(isTab(event), true);
});

Deno.test("isTab keyup with code", () => {
  const event = mockKeyboardEvent("keyup", { code: CODE_TAB });
  assertEquals(isTab(event), true);
});

Deno.test("isTab keyup with key", () => {
  const event = mockKeyboardEvent("keyup", { key: VALUE_TAB });
  assertEquals(isTab(event), true);
});

Deno.test("isTab keydown with code", () => {
  const event = mockKeyboardEvent("keydown", { code: CODE_TAB });
  assertEquals(isTab(event), true);
});

Deno.test("isTab keydown with key", () => {
  const event = mockKeyboardEvent("keydown", { key: VALUE_TAB });
  assertEquals(isTab(event), true);
});

Deno.test("!isTab when Alt key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_TAB,
    altKey: true,
  });
  assertEquals(isTab(event), false);
});

Deno.test("!isTab when Ctrl key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_TAB,
    ctrlKey: true,
  });
  assertEquals(isTab(event), false);
});

Deno.test("!isTab when Shift key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_TAB,
    shiftKey: true,
  });
  assertEquals(isTab(event), false);
});

Deno.test("!isTab when Meta key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_TAB,
    metaKey: true,
  });
  assertEquals(isTab(event), false);
});
