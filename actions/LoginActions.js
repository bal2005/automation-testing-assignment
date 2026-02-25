import { LoginPage } from '../pages/LoginPage.js';

export class LoginActions {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
  }

  async loginToApplication(username, password) {

    await this.loginPage.navigateToLogin();

    await this.loginPage.waitForLoginPage();

    await this.page.screenshot({
      path: 'screenshots/before-login.png',
      fullPage: true
    });

    await this.loginPage.fillUsername(username);
    await this.loginPage.fillPassword(password);

    await Promise.all([
      this.page.waitForURL(/dashboard/),
      this.loginPage.clickLogin()
    ]);

    await this.page
      .getByRole('heading', { name: 'Dashboard' })
      .waitFor({ state: 'visible' });

    await this.page.screenshot({
      path: 'screenshots/after-login.png',
      fullPage: true
    });
  }
}