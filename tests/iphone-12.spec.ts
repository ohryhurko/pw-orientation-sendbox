import { test, expect } from "@playwright/test";

test("iPhone 12 orientation is portait-primary", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  const orientation = await page.evaluate(() => screen.orientation.type);

  expect(orientation).toBe("portrait-primary");
});
