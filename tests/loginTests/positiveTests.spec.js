import {expect, test} from '@playwright/test'
import {users} from '../utils/testData.js'
const siteURL = 'https://www.saucedemo.com/'

test.describe('Positive Login', () => {
    for (const {username, password} of users) {
        test(`enter to site and login with ${username}`, async ({page}) => {
            await page.goto(siteURL)
            await page.locator('[data-test="username"]').fill(username)
            await page.locator('[data-test="password"]').fill(password)
            await page.locator('[data-test="login-button"]').click()
            await expect(page).toHaveURL(
                'https://www.saucedemo.com/inventory.html',
            )
        })
    }
    //test
})
