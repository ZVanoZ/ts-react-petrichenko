/**
 *
 */
(
    () => {
        const
            numLiteral = 5,
            numObject = new Number(5),
            numRunObj = Number(5)
        ;

        console.log('numLiteral', typeof numLiteral, numLiteral);          // number 5
        console.log('numObject', typeof numObject, numObject);             // object [Number: 5]
        console.log('numRunObj', typeof numRunObj, numRunObj);             // number 5
        console.log('numLiteral == numObject', numLiteral == numObject);   // true
        console.log('numLiteral === numObject', numLiteral === numObject); // false

        console.log('numObject.toFixed()', numObject.toFixed());            // 5                                         // Объект-обертка обладает методами.
        console.log('numLiteral.toFixed()', numLiteral.toFixed());          // 5                                         // Переменной литерального типа позволяет использовать методы
        console.log('numRunObj.toFixed()', numRunObj.toFixed());            // 5                                         //

        //console.log('5.toFixed()', 5.toFixed());                          // error TS2304: Cannot find name 'toFixed'. // Числовой литерал не позволяет вызывать методы.
        console.log('"Hello".toUpperCase()', "Hello".toUpperCase());        // HELLO                                     // Строковый литерал позволяет вызывать методы.

        let
            numLiteralTyped: number = 6,
            numObjectTyped: Number = new Number(6)
        ;
        //numLiteralTyped = numObjectTyped; // error TS2322: Type 'Number' is not assignable to type 'number'.
        console.log('numObjectTyped', typeof numObjectTyped, numObjectTyped); // object [Number: 6]
        numObjectTyped = numLiteralTyped; // OK. TSC не выдал ошибку при компиляции
        console.log('numObjectTyped', typeof numObjectTyped, numObjectTyped); // number 6      !!! Тип переменной изменился с Number на number
    }
)();
