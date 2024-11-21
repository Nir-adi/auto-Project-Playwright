import { expect, test } from "@playwright/test";
const nUsers = [
    { username: "standard_user", password: "59559" },
    { username: "standard_users", password: "secret_sauce" },
    { username: "standard_users", password: "fdhfhdufud" },
    { username: "", password: "secret_sauce" },
    { username: "error_user", password: "" },
    { username: "", password: "" },
  ];
const siteURL = "https://www.saucedemo.com/";

//Negative Test1
test.describe.only("negative Login with", () => {
  for (const user of nUsers) {
    test(`enter to site and login with ${user.username} and ${user.password} `, async ({
      page,
    }) => {
      await page.goto(siteURL);
      await page.locator('[data-test="username"]').fill(nUsers.username);
      await page.locator('[data-test="password"]').fill(nUsers.password);
      await page.locator('[data-test="login-button"]').click();
      await expect(page.locator('[data-test="error"]')).toBeVisible();
    });
  }
});
