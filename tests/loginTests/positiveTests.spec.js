import { expect, test } from "@playwright/test";
import { users } from "../utils/testData.js";
const siteURL = "https://www.saucedemo.com/";

//Positive Test1
test.describe("Positive Login", () => {
  for (const user of users) {
    test(`enter to site and login with ${user.username}`, async ({ page }) => {
      await page.goto(siteURL);
      await page.locator('[data-test="username"]').fill(user.username);
      await page.locator('[data-test="password"]').fill(user.password);
      await page.locator('[data-test="login-button"]').click();
      await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    });
  }
});