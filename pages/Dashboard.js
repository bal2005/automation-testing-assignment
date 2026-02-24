export class Dashboard{
    constructor(page) {
    this.page = page;
    this.pimMenu = page.getByRole("link",{name:'PIM'})
    this.pimHeader= page.getByRole("heading",{name:'PIM'})
}
    async clickToPim(){
        await this.pimMenu.click();
    }
}