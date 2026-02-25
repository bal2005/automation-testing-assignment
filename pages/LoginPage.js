import { usernameSelector, passwordSelector, submitButtonSelector } from "../pageobjects/loginObject";
export class LoginPage {
  constructor(page) {
    this.page = page;

   
  }

  async navigateToLogin() {
    await this.page.goto(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );
  }

  async waitForLoginPage() {
    await this.page.locator(usernameSelector).waitFor({ state: 'visible' });
  }

  async fillUsername(username) {
    await this.page.locator(usernameSelector).fill(username);
  }

  async fillPassword(password) {
    await this.page.locator(passwordSelector).fill(password);
  }

  async clickLogin() {
  await this.page.locator(submitButtonSelector).click();
  }
}