import { test, expect } from '@playwright/test';
import { LoginActions } from '../actions/LoginActions.js';
import { DashBoardAction } from '../actions/DashboardAction.js';
import loginData from '../testdata/loginData.json';

test.describe('Dashboard Module', () => {

  test.beforeEach(async ({ page }) => {
    const loginActions = new LoginActions(page);

    await loginActions.loginToApplication(
      loginData.username,
      loginData.password
    );

    await expect(page).toHaveURL(/dashboard/);
  });

  test('User should navigate to PIM from Dashboard', async ({ page }) => {
    const dashboard = new DashBoardAction(page);

    await dashboard.navigateToPIM();

    await expect(
      page.getByRole('heading', { name: 'PIM' })
    ).toBeVisible();
  });

});