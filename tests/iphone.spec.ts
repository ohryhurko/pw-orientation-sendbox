import { test, expect } from "@playwright/test";

test("iphone orientation is portait-primary", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  const orientation = await page.evaluate(() => screen.orientation.type);

  expect(orientation).toBe("portrait-primary");
});
