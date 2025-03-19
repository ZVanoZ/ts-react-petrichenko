import {exClients as clients, fitnessClubCenter} from "../../data";

(() => {
    type TGender = "male" | "female";
    type TClientAge = number | '-';

    interface ICurrClient {
        name: string,
        age?: TClientAge,
        gender?: TGender
        timeLeft: string,
    }
    type TExClient = Omit<ICurrClient, 'timeLeft'>;
    (()=>{
        const client: TExClient = {
            name: "Tom Smooth",
            age: 50,
            gender: "male"
        };
        console.log('TExClient', client);
    })();
    type TExClient2 = TExClient& { makeCallFor: Date }
    (()=>{
        const client: TExClient2 = {
            name: "Tom Smooth",
            age: 50,
            gender: "male",
            makeCallFor: new Date("2023-08-12")
        };
        console.log('TExClient', client);
    })();
})();