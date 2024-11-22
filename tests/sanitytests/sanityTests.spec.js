//sanity Test
import { expect, test } from "@playwright/test";
const siteURL = "https://www.saucedemo.com/";

test.describe.only("Sanity", () => {
  test("Sanity Check", async ({ page }) => {
    await page.goto(siteURL);
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await expect(page.getByText("Swag Labs")).toBeVisible();
    await page
      .locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
      .click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(
      page.locator('[data-test="shopping-cart-badge"]')
    ).toContainText("2");
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
    await expect(
      page.locator('[data-test="shopping-cart-badge"]')
    ).toContainText("2");
    await page.locator('[data-test="checkout"]').click();
    await expect(page).toHaveURL(
      "https://www.saucedemo.com/checkout-step-one.html"
    );
    await expect(page.locator('[data-test="title"]')).toHaveText(
      "Checkout: Your Information"
    );
    await page.locator('[data-test="firstName"]').fill("Dudi");
    await page.locator('[data-test="lastName"]').fill("White");
    await page.locator('[data-test="postalCode"]').fill("050505000");
    await page.locator('[data-test="continue"]').click();
    await expect(page).toHaveURL(
      "https://www.saucedemo.com/checkout-step-two.html"
    );
    await expect(page.locator('[data-test="title"]')).toHaveText(
      "Checkout: Overview"
    );
    await page.locator('[data-test="finish"]').click();
    await expect(page).toHaveURL(
      "https://www.saucedemo.com/checkout-complete.html"
    );
    await expect(page.locator('[data-test="title"]')).toContainText(
      "Checkout: Complete!"
    );
    await expect(page.locator('[data-test="complete-header"]')).toHaveText(
      "Thank you for your order!"
    );
    await expect(page.locator('[data-test="complete-text"]')).toHaveText(
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
    );
  });
});
