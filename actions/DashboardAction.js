import { Dashboard } from "../pages/Dashboard";

export class DashBoardAction{
    constructor(page){
        this.Dashboard = new Dashboard(page); 
    }

    async navigateToPIM() {
        await this.Dashboard.clickToPim();
   }
}