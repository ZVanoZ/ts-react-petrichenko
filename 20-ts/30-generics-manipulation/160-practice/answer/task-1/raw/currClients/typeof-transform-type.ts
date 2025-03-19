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
    type ICurrClient = typeof currClients[number];
    type ClientTransformGeneric<T> = {
        [P in keyof T]: string;
    };
    /**
     *
     * TCurrClient Initial type:
     * {
     *      name: string,
     *      age: string,
     *      gender: string,
     *      timeLeft: string
     * }
     */
    type TCurrClient = ClientTransformGeneric<ICurrClient>;

    let client: ICurrClient;
    client = currClients[0];
    /*
typeof-transform-type.ts:27:5 - error TS2322: Type '
    { name: string; age: string; gender: string; timeLeft: string; } |
    { name: string; age: number; gender: string; timeLeft: string; }' is not assignable to type 'TCurrClient'.
  Type '{ name: string; age: number; gender: string; timeLeft: string; }' is not assignable to type 'TCurrClient'.
    Type '{ name: string; age: number; gender: string; timeLeft: string; }' is not assignable to type 'ClientTransformGeneric<{ name: string; age: number; gender: string; timeLeft: string; }>'.
      Types of property 'age' are incompatible.
        Type 'number' is not assignable to type 'string'.
    */
})();