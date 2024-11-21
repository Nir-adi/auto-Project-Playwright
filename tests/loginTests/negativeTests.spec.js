import {expect, test} from '@playwright/test'
import {negativeUsers} from '../utils/testData.js'

const siteURL = 'https://www.saucedemo.com/'

test.describe.only('negative Login with', () => {
    for (const {username, password, message} of negativeUsers) {
        test(`enter to site and login with ${username} and ${password}`, async ({
            page,
        }) => {
            await page.goto(siteURL)
            await page.locator('[data-test="username"]').fill(username)
            await page.locator('[data-test="password"]').fill(password)
            await page.locator('[data-test="login-button"]').click()
            await expect(page.locator('[data-test="error"]')).toHaveText(
                message,
            )
        })
    }
})
