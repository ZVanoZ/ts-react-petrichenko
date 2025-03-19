import {currClients} from "../../data";

(() => {
    interface ICurrClient {
        name: string;
        age?: number | string;
        gender: "male" | "female";
        timeLeft: string;
    }

    const client0: ICurrClient = currClients[0];
    /*
Types of property 'gender' are incompatible.
    Type 'string' is not assignable to type '"male" | "female"'.
     */
})();