/**
 *
 */
(
    () => {
        let
            url = 'http://google.com' as const,
            arr = [1, 2, 3] as const,
            obj = {
                f1: 'f1-value'
            } as const
        ;
        let
            url2 = url as const,                         // error TS1355: A 'const' assertions can only be applied to references to enum members, or string, number, boolean, array, or object literals.
            boolRes = (1 > 100) as const,                         // error TS1355: A 'const' assertions can only be applied to references to enum members, or string, number, boolean, array, or object literals.
            randVal3 = (Math.random() > 100 ? 'T' : 'F') as const // error TS1355: A 'const' assertions can only be applied to references to enum members, or string, number, boolean, array, or object literals.
        ;

        url = 'http://meta.ua'; // error TS2322: Type '"http://meta.ua"' is not assignable to type '"http://google.com"'.

        arr = [4, 5, 6];  // error TS2322: Type '6' is not assignable to type '3'.
        arr.push(4);      //  error TS2339: Property 'push' does not exist on type 'readonly [1, 2, 3]'.

        obj = {};       // error TS2741: Property 'f1' is missing in type '{}' but required in type '{ readonly f1: "f1-value"; }'.
        obj = {f1: ''}; // error TS2322: Type '""' is not assignable to type '"f1-value"'.
        obj.f1 = '';    // error TS2540: Cannot assign to 'f1' because it is a read-only property.

    }
)();
