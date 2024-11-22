import { expect, test } from "@playwright/test";
import { negativeUsers } from "../utils/testData";
//Negative Test1
const siteURL = "https://www.saucedemo.com/";

test.describe("negative Login with", () => {
  for (const { username, password, Message } of negativeUsers) {
    test(`enter to site and login with ${username} and ${password}`, async ({
      page,
    }) => {
      await page.goto(siteURL);
      await page.locator('[data-test="username"]').fill(username);
      await page.locator('[data-test="password"]').fill(password);
      await page.locator('[data-test="login-button"]').click();
      await expect(page.locator('[data-test="error"]')).toHaveText(Message);
    });
  }
});
