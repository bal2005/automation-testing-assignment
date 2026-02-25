import { pimMenu } from "../pageobjects/dashboardObject.js";

export class Dashboard {
  constructor(page) {
    this.page = page;
  }

  async clickToPim() {
    await pimMenu(this.page).click();
  }
}