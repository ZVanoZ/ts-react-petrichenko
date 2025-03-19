import {currClients} from "../../data";

/**
 * В этом примере для gender определяем тип string.
 * Не совсем то, что нужно.
 * Хотелось бы ограничить gender вариантами 'male' | 'female'.
 */
(() => {
    interface ICurrClient {
        name: string;
        age?: number | string;
        gender: string;
        timeLeft: string;
    }

    let client: ICurrClient;
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