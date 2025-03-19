import {currClients}  from "../data";

(()=>{
    type TGender = "male" | "female";

    interface ICurrClient {
        name: string;
        age?: number | string; // Corrected age type
        // gender:string;
        //gender: "male" | "female";
        gender?: TGender;
        timeLeft: string;
    }

    (() => {
        let client0: ICurrClient;
        client0 = convertClient(currClients[0]);

        console.log('client0', client0);

        function convertClient(client: typeof currClients[number]): ICurrClient {
            return {
                ...client,
                gender: client.gender === "male" ? "male" : "female",
            };
        }
    })()
})();