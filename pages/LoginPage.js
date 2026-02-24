export class LoginPage {
  constructor(page) {
    this.page = page;

    // Locators only
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
  }

  async navigateToLogin() {
    await this.page.goto(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );
  }

  async fillUsername(username) {
    await this.usernameInput.fill(username);
  }

  async fillPassword(password) {
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
  await this.loginButton.click();
  }
}