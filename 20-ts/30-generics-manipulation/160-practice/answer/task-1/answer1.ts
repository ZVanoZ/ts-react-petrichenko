import {fitnessClubCenter,currClients} from "./data";

(() => {
    //type txxx = typeof fitnessClubCenter;
    type TClass = typeof fitnessClubCenter.classes[number];
    type TFutureClasses = typeof fitnessClubCenter.futureClasses[number];
    type TCurrClients = typeof fitnessClubCenter.currClients[number];
    type TExClients = typeof fitnessClubCenter.exClients[number];
    type TFutureClientsClients = typeof fitnessClubCenter.futureClients[number];
    interface IFitnessClubCenter {
        clubName: string;
        location: string;
        classes: TClass[];
        futureClasses: TFutureClasses[];
        currClients: TCurrClients[];
        exClients: TExClients[];
        futureClients: TFutureClientsClients[];
    }
    const clients:IFitnessClubCenter = fitnessClubCenter;
    console.log('clients', clients);
})();
