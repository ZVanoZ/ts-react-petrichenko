/**
 * Generic "ConstructorParameters" применяется для извлечения типов параметров конструктора класса.
 */
(() => {
    // Initial type: number
    type p1type = ConstructorParameters<typeof Example>[0];
    let p1: p1type;
    //p1 = 'abc'; // error TS2322: Type 'string' is not assignable to type 'number'.
    p1 = 123;     // OK
    console.log('typeof p1', typeof p1); // typeof p1 number


    class Example {
        constructor(
            a: number
        ) {
            //...
        }
    }
})();