import {currClients} from "../../data";

/**
 * @see [20-set-by-key.ts](../130-mapped-types/20-set-by-key.ts)
 * Попытки сделать по аналогии.
 */
(() => {
    /*
type ICurrClient = (
{name: string    age: string    gender: string    timeLeft: string } |
{name: string    age: number    gender: string    timeLeft: string } |
{name: string    age: number    gender: string    timeLeft: string }
    */
    type TCurrClient = typeof currClients[number];
    let client: TCurrClient;
    client = currClients[0];
    console.log("client0", client);
    client = currClients[1];
    console.log("client1", client);
    client = currClients[2];
    console.log("client2", client);
    /*
client0 { name: 'John Smith', age: '-', gender: 'male', timeLeft: '1 month' }
client1 { name: 'Alise Smith', age: 35, gender: 'female', timeLeft: '3 month' }
client2 { name: 'Ann Sonne', age: 24, gender: 'female', timeLeft: '5 month' }
    */
})();