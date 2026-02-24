import { test, expect } from '@playwright/test';
import { LoginActions } from '../actions/LoginActions.js';
import loginData from '../testdata/loginData.json';

test('User should login successfully', async ({ page }) => {
  const loginActions = new LoginActions(page);

  await loginActions.loginToApplication(
    loginData.username,
    loginData.password
  );

  await expect(page).toHaveURL(/dashboard/, { timeout: 30000 });

  
});