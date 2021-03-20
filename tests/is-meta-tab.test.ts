import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";
import {
  CODE_ENTER,
  CODE_TAB,
  VALUE_TAB,
} from "https://deno.land/x/keycode@v3.1.0/mod.ts";
import { mockKeyboardEvent } from "./utils.ts";
import { isMetaTab } from "../mod.ts";

Deno.test("isMetaTab keypress with code", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_TAB,
    metaKey: true,
  });
  assertEquals(isMetaTab(event), true);
});

Deno.test("isMetaTab keypress with key", () => {
  const event = mockKeyboardEvent("keypress", {
    key: VALUE_TAB,
    metaKey: true,
  });
  assertEquals(isMetaTab(event), true);
});

Deno.test("isMetaTab keyup with code", () => {
  const event = mockKeyboardEvent("keyup", { code: CODE_TAB, metaKey: true });
  assertEquals(isMetaTab(event), true);
});

Deno.test("isMetaTab keyup with key", () => {
  const event = mockKeyboardEvent("keyup", { key: VALUE_TAB, metaKey: true });
  assertEquals(isMetaTab(event), true);
});

Deno.test("isMetaTab keydown with code", () => {
  const event = mockKeyboardEvent("keydown", { code: CODE_TAB, metaKey: true });
  assertEquals(isMetaTab(event), true);
});

Deno.test("isMetaTab keydown with key", () => {
  const event = mockKeyboardEvent("keydown", { key: VALUE_TAB, metaKey: true });
  assertEquals(isMetaTab(event), true);
});

Deno.test("!isMetaTab when Alt key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_TAB,
    metaKey: true,
    altKey: true,
  });
  assertEquals(isMetaTab(event), false);
});

Deno.test("!isMetaTab when Ctrl key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_TAB,
    metaKey: true,
    ctrlKey: true,
  });
  assertEquals(isMetaTab(event), false);
});

Deno.test("!isMetaTab when Shift key is pressed", () => {
  const event = mockKeyboardEvent("keypress", {
    code: CODE_TAB,
    metaKey: true,
    shiftKey: true,
  });
  assertEquals(isMetaTab(event), false);
});
