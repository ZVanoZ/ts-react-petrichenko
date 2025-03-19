(() => {
    console.log('--10--');
    type TCalculateResult = ReturnType<typeof calculate>;
    type TCalculateParams = Parameters<typeof calculate>;


    let res: TCalculateResult;
    // res = 1;   // OK
    // res = '1'; // error TS2322: Type 'string' is no t assignable to type 'number'.
    let
        p1: TCalculateParams[0],
        p2: TCalculateParams[1]
    ;
    // p1='1'; // error TS2322: Type 'string' is not assignable to type 'number'.
    p1 = 1;   // OK
    p2 = 2;
    res = calculate(p1, p2);
    console.log(`(${p1}, ${p2})`, res);

    p1 = 2;
    res = calculate(p1, p2);
    console.log(`(${p1}, ${p2})`, res);

    p1 = 3;
    p2 = 3;
    res = calculate(p1, p2);
    console.log(`(${p1}, ${p2})`, res);

    /*
(1, 2) 2
(2, 2) 4
(3, 3) 9
    */

    function calculate(
        a: number,
        b: number
    ): number //
    {
        return a * b;
    }
})();

(() => {
    console.log('--20--');

    (() => {
        console.log('--20.10--');
        type p1type = Parameters<(a: number) => {}>[0];
        let p1: p1type;

        p1 = 1;
        console.log('typeof p1', typeof p1); // typeof p1 number

        //p1 = 'abc'; // error TS2322: Type 'string' is not assignable to type 'number'.
    })();

    (() => {
        console.log('--20.20--');
        type p1type = Parameters<<T>(a: T) => {}>[0];
        let p1: p1type;// тип "unknown"

        console.log('typeof p1', typeof p1); // typeof p1 undefined

        p1 = 1;
        console.log('typeof p1', typeof p1); // typeof p1 number

        p1 = 'abc';
        console.log('typeof p1', typeof p1); // typeof p1 string

    })();
})();