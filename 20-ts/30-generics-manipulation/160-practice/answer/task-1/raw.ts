import {fitnessClubCenter,currClients} from "./data";

// (() => {
//     (() => {
//         const currClients = [
//             {
//                 name: "John Smith",
//                 age: "-",
//                 gender: "male",
//                 timeLeft: "1 month",
//             },
//             {
//                 name: "Alise Smith",
//                 age: 35,
//                 gender: "female",
//                 timeLeft: "3 month",
//             },
//             {
//                 name: "Ann Sonne",
//                 age: 24,
//                 gender: "female",
//                 timeLeft: "5 month",
//             },
//         ];
//
//         interface ICurrClient {
//             name: string;
//             //age: number | '-';
//             age?: number | string | undefined;
//             gender: "male" | "female" | undefined;
//             //gender:string;
//             timeLeft: string;
//         }
//
//         const client0: ICurrClient = currClients[0];
//
//     })();
// })();


(() => {
    interface ICurrClient {
        name: string;
        age?: number | string; // Corrected age type
        gender?: "male" | "female"; // Corrected gender type
        timeLeft: string;
    }
    // const client0: ICurrClient = currClients[0];
})();


(() => {
    type TGender = "male" | "female";
    type TClientAge = number | '-';
    interface ICurrClient {
        name: string;
        age?: number | string;
        // gender:string;
        //gender: "male" | "female";
        gender?: TGender;
        timeLeft: string;
    }
})();