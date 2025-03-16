(
    () => {
//-----------------------------------------------------------------------------

        // type TExample1 = number
        type TExample1 = "string" extends 'Hello' ? string : undefined;
        //const example1n: TExample1 = 1;    // error TS2322: Type '1' is not assignable to type 'undefined'.
        //const example2s : TExample1 = '1'; // error TS2322: Type '"1"' is not assignable to type 'undefined'.

//-----------------------------------------------------------------------------

        // type TExample2 = number
        type TExample2 = 'Hello' extends "string" ? string : undefined;
        //const example2n: TExample2 = 1;   // error TS2322: Type '1' is not assignable to type 'undefined'.
        //const example2s: TExample2 = '1'; // error TS2322: Type '"1"' is not assignable to type 'undefined'.

//-----------------------------------------------------------------------------

        // Initial type: string
        type TExample3 = "string" extends string ? string : undefined;
        const example3s: TExample3 = '1';
        //const example3n : TExample3 = 1; // error TS2322: Type 'number' is not assignable to type 'string'.

        // Простое условие в тернарном операторе вычисления условного типа не работает
        // type TExample4 = true ? string : number; // error TS2693: 'number' only refers to a type, but is being used as a value here.
        // const example4s: TExample4 = '1'; // error TS2322: Type '"1"' is not assignable to type 'true'.

//-----------------------------------------------------------------------------

        // Сравнивать константу и тип нельзя т.к. константа не является типом
        const someStringConst = 'myString';
        // type TExample5_1 = someStringConst extends string ? string : number; // error TS2749: 'someStringConst' refers to a value, but is being used as a type here. Did you mean 'typeof someStringConst'?
        // Можно сравнить тип данных из константы с другим типом данных через typeof
        type TExample5_2 = typeof someStringConst extends string ? string : undefined; // Работает
        const example5_2s: TExample5_2 = '1'; //
        //const example5_2n: TExample5_2 = 1; // error TS2322: Type 'number' is not assignable to type 'string'.

//-----------------------------------------------------------------------------
// @TODO: разобраться почему так работает пример
//--

        // let rndValue = Math.random();
        // console.log('rndValue', rndValue);
        // let someStringVar = rndValue < 0.5 ? 'myString' : 123;
        // console.log('typeof someStringVar:', typeof someStringVar);
        // type TExample6 = typeof someStringVar extends string ? string : number; // Работает.  Всегда string
        // //console.log('typeof TExample6:', typeof TExample6);// error TS2693: 'TExample6' only refers to a type, but is being used as a value here.
        // //const example6s: TExample6 = '1'; // error TS2322: Type 'string' is not assignable to type 'number'.
        // const example6n: TExample6 = 1; // Работает, но непонятно почему.

//-----------------------------------------------------------------------------
    }
)();


