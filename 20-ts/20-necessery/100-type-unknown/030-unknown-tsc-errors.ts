/**
 * В переменную типа unknown можно присвоить любые данные.
 * В строго типизираванные переменные нельзя засунуть значение из unknown.
 */
(
    () => {
        let
            unknownTypeValue: unknown,
            unknownTypeValue2: unknown,
            numberValue: number = 123,
            arrayOfStrings: string[] = ['Hello', 'world']
        ;
        const
            unknownTypeValueConst: unknown = 10
        ;

        //---------------------------------------------------------------------
        unknownTypeValue.someMethod();      // error TS2339: Property 'someMethod' does not exist on type 'unknown'.
        unknownTypeValueConst.someMethod(); // error TS2339: Property 'someMethod' does not exist on type 'unknown'.

        unknownTypeValue = 1;
        unknownTypeValue = true;
        unknownTypeValue = 'aaaaa';
        unknownTypeValue = [];
        unknownTypeValue = () => {
        };
        unknownTypeValue = {};
        unknownTypeValue = null;
        unknownTypeValue = undefined;

        unknownTypeValue = numberValue; // OK
        unknownTypeValue = arrayOfStrings; // OK


        //---------------------------------------------------------------------
        // Попытки засунуть значение типа unknown в типизированные переменные
        //-----

        unknownTypeValue2 = unknownTypeValue; // "unknown  = unknown" // OK.
        numberValue = unknownTypeValue;       // "number   = unknown" // error TS2322: Type 'unknown' is not assignable to type 'number'.
        arrayOfStrings = unknownTypeValue;    // "string[] = unknown" // error TS2740: Type '{}' is missing the following properties from type 'string[]': length, pop, push, concat, and 29 more.

        //---------------------------------------------------------------------
    }
)();
