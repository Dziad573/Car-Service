import { test, expect } from '@playwright/test';

test('carDataTest', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.locator('div').filter({ hasText: /^140\$\/ 1 dayMore Details >$/ }).locator('span').nth(2).click();
    await expect(page.getByText('Details for Toyota GT86228Manual7.6s50L140$ /1 dayNot Available NowThe Toyota')).toBeVisible();
});
