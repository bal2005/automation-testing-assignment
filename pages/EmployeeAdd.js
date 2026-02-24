export class EmployeeAdd {
  constructor(page) {
    this.page = page;

    
    this.firstName = page.locator('input[name="firstName"]');
    this.lastName = page.locator('input[name="lastName"]');
    this.employeeId = page.getByRole('textbox').nth(4);
    this.saveBtn = page.getByRole('button', { name: 'Save' });
  }

  async fillFirstName(firstName) {
    await this.firstName.fill(firstName);
  }

  async fillLastName(lastName) {
    await this.lastName.fill(lastName);
  }

  async getEmployeeId() {
    return await this.employeeId.inputValue();
  }

  async clickSave() {
    await this.saveBtn.click();
  }
}