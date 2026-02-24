import { test, expect } from '@playwright/test';
import { LoginActions } from '../actions/LoginActions.js';
import { DashBoardAction } from '../actions/DashboardAction.js';
import { PIMActions } from '../actions/PIMActions.js';
import { EmployeeAddAction } from '../actions/EmployeeAddAction.js';
import loginData from '../testdata/loginData.json';

test.describe('Add Employee Flow', () => {

  test.beforeEach(async ({ page }) => {
    const loginActions = new LoginActions(page);

    await loginActions.loginToApplication(
      loginData.username,
      loginData.password
    );

    await expect(page).toHaveURL(/dashboard/);
  });

  test('User should add employee and validate in employee list', async ({ page }) => {

    const dashboard = new DashBoardAction(page);
    const pim = new PIMActions(page);
    const employeeAction = new EmployeeAddAction(page);

    await dashboard.navigateToPIM();
    await expect(page.getByRole('heading', { name: 'PIM' })).toBeVisible();

    await pim.navigateToEmployee();   

    const employeeId = await employeeAction.addNewEmployee(
      'Alex',
      'Kumar'
    );

    await page.getByRole('link', { name: 'Employee List' }).click();

       
    const employeeIdSearchBox = page.getByRole('textbox').nth(2);
    await employeeIdSearchBox.fill(employeeId);

    await page.getByRole('button', { name: 'Search' }).click();

    
    await expect(
    page.getByRole('cell', { name: employeeId })
        ).toBeVisible();
   
  });

});