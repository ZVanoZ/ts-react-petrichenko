import {currClients, fitnessClubCenter} from "../../data";

(() => {
    type TGender = "male" | "female";
    type TClientAge = number | '-';

    interface ICurrClient {
        name: string;
        age?: TClientAge;
        gender?: TGender;
        timeLeft: string;
    }

    type MappedClient<T> = {
        [P in keyof T]: T[P];
    } & {
        gender?: TGender;
        age?: TClientAge
    };

    (() => {
        type TClient = MappedClient<ICurrClient> & {
            //gender: string;
            age: string;
        };

        let client: TClient;
        client = {
            age: "-",
            //gender: undefined,
            name: "",
            timeLeft: ""
        };
        client = {
            name: "John Smith",
            age: "-",
            gender: "male",
            timeLeft: "1 month",
        };
        //client = fitnessClubCenter.currClients[0];
    })();

    function convertClientMapped<T extends { gender: string }>(
        client: T
    ): MappedClient<T> //
    {
        const res: MappedClient<T> = {
            ...client,
            gender: client.gender === "male" ? "male" : "female",
        };
        return res;
    }

    let client: ICurrClient;
    client = convertClientMapped(currClients[0]);
    console.log("client0", client);
    client = convertClientMapped(currClients[1]);
    console.log("client1", client);
    client = convertClientMapped(currClients[2]);
    console.log("client2", client);
    /*
client0 { name: 'John Smith', age: '-', gender: 'male', timeLeft: '1 month' }
client1 { name: 'Alise Smith', age: 35, gender: 'female', timeLeft: '3 month' }
client2 { name: 'Ann Sonne', age: 24, gender: 'female', timeLeft: '5 month' }
    */
})();