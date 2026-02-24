import {PIM} from "../pages/PIM.js";

export class PIMActions{
    constructor(page){
        this.PIM = new PIM(page);
    }

    async navigateToEmployee(){
        await this.PIM.addEmployee();
    }
}