import { EmployeeAdd } from '../pages/EmployeeAdd.js';

export class EmployeeAddAction {
  constructor(page) {
    this.page = page;
    this.employeePage = new EmployeeAdd(page);
  }

  async addNewEmployee(firstName, lastName) {

    await this.employeePage.fillFirstName(firstName);
    await this.employeePage.fillLastName(lastName);

    const employeeId = await this.employeePage.getEmployeeId();

    
    await this.employeePage.clickSave();

    await this.page.waitForURL(/viewPersonalDetails/);

    return employeeId; 
  }
}