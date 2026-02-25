import { addButton } from "../pageobjects/pimObject";
export class PIM{
    constructor(page){
        this.page = page;

        
    }

    async addEmployee(){
         await this.page
      .getByRole(addButton.role, { name: addButton.name })
      .click();
    }
}