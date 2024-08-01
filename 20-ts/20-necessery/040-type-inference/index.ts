/**
 * Главный посыл урока "Не объявляй тип там, где Typescript может однозначно определить тип сам".
 * [EN: Type Inference](https://www.typescriptlang.org/docs/handbook/type-inference.html#handbook-content)
 * [RU: Вывод типов](https://scriptdev.ru/guide/037/)
 **/

(
    /**
     * Базовый пример.
     * Для let и var определение типа данных работает одинаково.
     */
    () => {
        // const salaryConstUnassigned; //  error TS1155: 'const' declarations must be initialized.
        let
            /**
             * TS7043: Variable salaryLetUnassigned implicitly has an any type, but a better type
             * may be inferred from usage.
             */
            salaryLetUnassigned // Тип any. Не рекомендуется использовать т.к. теряется смысл TS.
        ; 
        console.log('salaryLetUnassigned', salaryLetUnassigned); // undefined
        salaryLetUnassigned = 1;
        salaryLetUnassigned = true;
        salaryLetUnassigned = 'Hello';

        const salaryConst500 = 500;         // Правильно. TS определил литеральный тип со значением 500.
        const salaryConstNumber500: number = 500; // Неправильно. Указывать тип не нужно. TS умеет распознавать тип по присваиваемому значению.

        let salaryLet500 = 500;          // Правильно. TS определил тип переменной number по присваиваемому значению.
        //salaryLet500 = 'Hello';                 // error TS2322: Type 'string' is not assignable to type 'number'
        let salaryLetNumber500: number = 500;     // Неправильно. Декларация типа number. TS сам понимает какой тут тип.

        var salaryVar500 = 500;          // Правильно. TS определил тип переменной number по присваиваемому значению.
        //salaryVar500 = 'Hello';                 // error TS2322: Type 'string' is not assignable to type 'number'.

    }
)();

(
    /**
     * В этом фрагменте кода рассматриваем когда нужно конкретизировать тип.
     */
    () => {
        const
            isOkConst = true, // Литеральный тип со значением true
            isOkConstTyped: boolean = true   // boolean тип со значением true
        ;
        let
            isOk = true, // boolean тип со значением true
            movement = false, // TS определил тип переменной boolean по присваиваемому значению.  Присваивать данные другого типа нельзя.
            movementTyped: boolean | string = false // В этом случае указание типа оправдано т.к. в коде далее это нужно.
        ;
        if (isOk) {
            //movement = 'moving';    // error TS2322: Type 'string' is not assignable to type 'boolean'.
            movementTyped = 'moving'; // OK. При объявлении указали альтернативный тип string.
        }
    }
)();