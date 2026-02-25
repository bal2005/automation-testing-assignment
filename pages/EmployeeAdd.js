import {
  firstNameSelector,
  lastNameSelector,
  employeeIdField,
  saveButton
} from "../pageobjects/employeeAddObject.js";

export class EmployeeAdd {
  constructor(page) {
    this.page = page;
  }

  async fillFirstName(firstName) {
    await this.page.locator(firstNameSelector).fill(firstName);
  }

  async fillLastName(lastName) {
    await this.page.locator(lastNameSelector).fill(lastName);
  }

  async getEmployeeId() {
    return await this.page
      .getByRole(employeeIdField.role)
      .nth(employeeIdField.nth)
      .inputValue();
  }

  async clickSave() {
    await this.page
      .getByRole(saveButton.role, { name: saveButton.name })
      .click();
  }
}