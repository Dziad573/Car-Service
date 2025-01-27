import { test, expect } from '@playwright/test';

test('promotionCarDataTest', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.locator('span').filter({ hasText: 'Make an Order' }).first().click();
    await expect(page.getByText('Promotional Details for BMW M3 Competition503Automatic3.8s59L128$ /1')).toBeVisible();
});


// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//     await page.goto('http://localhost:5173/');
//     await page.locator('span').filter({ hasText: 'Make an Order' }).first().click;
//     await page.getByRole('button', { name: '28 stycznia' }).click();
//     await page.waitForTimeout(500);
//     await page.getByLabel('Name:').click();
//     await page.getByLabel('Name:').fill('Krystian');
//     await page.getByLabel('Email:').click();
//     await page.getByRole('button', { name: 'Reserve Now' }).waitFor();
//     await page.getByRole('button', { name: 'Reserve Now' }).click();
//     await page.getByRole('link', { name: 'My Reservations' }).waitFor();
//     await page.getByRole('link', { name: 'My Reservations' }).click();
//     await page.getByLabel('Phone:').fill('678678678');
//     await page.getByRole('button', { name: 'Reserve Now' }).click();
//     await page.getByRole('link', { name: 'My Reservations' }).click();
//     await expect(page.getByText('Reservation 1Car: BMW M3')).toBeVisible();
// });