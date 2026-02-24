export class PIM{
    constructor(page){
        this.page = page;

        this.addButton = page.getByRole('button',{name:'Add'})
    }

    async addEmployee(){
        await this.addButton.click();
    }
}