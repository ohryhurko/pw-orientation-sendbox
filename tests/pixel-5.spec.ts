import { test, expect, devices } from "@playwright/test";

test.use(devices["Pixel 5"]);

test("Pixel 5 orientation is portait-primary", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  const orientation = await page.evaluate(() => screen.orientation.type);

  expect(orientation).toBe("portrait-primary");
});
