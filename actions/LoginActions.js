import { LoginPage } from '../pages/LoginPage.js';

export class LoginActions {
  constructor(page) {
    this.loginPage = new LoginPage(page);
    this.page = page;
  }

  async loginToApplication(username, password) {

    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
      waitUntil: 'domcontentloaded'
    });

    

    await this.loginPage.usernameInput.waitFor({ state: 'visible' });

    await this.page.screenshot({
      path: 'screenshots/before-login.png',
      fullPage: true
    });

    await this.loginPage.fillUsername(username);
    await this.loginPage.fillPassword(password);

    // Click login and wait for navigation
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